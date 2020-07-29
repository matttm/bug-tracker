

var assert  = require('assert'),
    server  = require('../bin/www'),
    chai    = require('chai'),
    request = require('supertest');

describe('Basic Mocha String Test', function() {
  it('should return that the number of characters is five', function() {
    assert.equal("Hello".length, 5);
  });
});

describe('POST to /bugs', function() {
  const _bug = {
    id: 0,
    name: 'Test generated bug',
    desc: 'This is a description generated by the unit test',
    priority: 4,
    reporter: 'Matt Malo'
  };
  it('should return creation status json', function(done) {
    request(server)
      .post('/api/bugs')
      .send({
        bug:  _bug
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.status, "bug created")
        done();
      })
  });
});

describe('Testing /bugs/:bugId', function() {
  const _bug = {
    id: 0,
    name: 'Test generated update for bug',
    desc: 'This is a description generated by the unit test',
    priority: 4,
    reporter: 'Matt Malo'
  };
  it('should return with bug updated json', function(done) {
    request(server)
      .post('/api/bugs/0')
      .send({
        bug: _bug
      })
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.status, "bug updated")
        done();
      })
  });

  it('should return bad request', function(done) {
    request(server)
      .post('/api/bugs/0')
      .send()
      .expect(400)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.status, "no bug provided")
        done();
      })
  });
});

describe('GET to /bugs', function() {
  it('should return non empty json', function(done) {
    request(server)
      .get('/api/bugs')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.notEqual(Object(res.body).keys, 0);
        done();
      })
  })
});

describe('DELETE to /bugs/:bugId', function() {
  it('should return non empty json', function(done) {
    request(server)
      .delete('/api/bugs/0')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        assert.equal(res.body.status, "bug deleted")
        done();
      })
  });
});
