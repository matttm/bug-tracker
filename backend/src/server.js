var express    = require('express');
var bodyParser = require('body-parser');
var low        = require( "lowdb");
var FileSync   = require("lowdb/adapters/FileSync");

const adapter = new FileSync("resources/db.json");
const db      = low(adapter);

const PORT   = 3001;
const app    = express();
const router = express.Router();

db.defaults({ bugs: [], count: 0 })
    .write();

let updateCount = () => db.update('count', n => n + 1);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/test', (req, res) => {
    res.json({ message: "Test Successful' "});
});

router.post('/bugs/:bugId', (req, res) => {
    let bug = req.body.bug;
    let id = parseInt(req.params.bugId);
    if (id) {
        db.get('bugs')
          .find({ id: id })
          .assign({
            name: bug.name,
            desc: bug.desc,
            priority: bug.priority,
            reporter: bug.reporter
          }).value();
        db.write();
        res.json({ status: "bug updated" });
    } else {
        res.status(500).json({ status: "Invalid bugId" });
    }
});

router.delete('/bugs/:bugId(\\+d)', (req, res) => {
});

router.get('/bugs', (req, res) => {
    res.json(
        db.get('bugs')
            .value()
    );
})

router.post('/bugs', (req, res) => {
    const bug = req.body.bug;
    db.get('bugs')
        .push({
            id: db.get('count').value(),
            name: bug.name,
            desc: bug.desc,
            priority: bug.priority,
            date: bug.date,
            reporter: bug.reporter
        })
        .write();
    updateCount();
});

app.use('/api', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
