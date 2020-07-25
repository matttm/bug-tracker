

var assert = require('assert')
describe('Basic Mocha String Test', function() {
  it('should return that the number of characters is five', function() {
    assert.equal("Hello".length, 5);
  });
});
