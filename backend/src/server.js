import express from 'express';
import bodyParser from 'body-parser';
import low from "lowdb";
import FileSync from "lowdb/adapters/FileSync";

const adapter = new FileSync("../resources/db.json");
const db = low(adapter);

const PORT = 3000;
const app = express();
const router = express.Router();

db.defaults({ bugs: [], count: 0 })
    .write();

let updateCount = () => db.update('count', n => n + 1);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/test', (req, res) => {
    res.json({ message: "Test Successful' "});
});

router.get('/bugs', (req, res) => {
    res.json(
        db.get('bugs')
            .value()
    );
})

router.post('/bugs', (req, res) => {
    const bug = req.body;
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
