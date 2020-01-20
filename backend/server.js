import express from 'express';
import bodyParser from 'body-parser';

const PORT = 3000;
const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get('/test', (req, res) => {
    res.json({ message: "Test Successful' "});
});

router.get('/bugs', (req, res) => {
    res.json({
        id: 6,
        name: "Test path in backend doesn't work",
        desc: "GET requests to '/test' is not being received. The backend's middleware may be the problem",
        priority: 3,
        date: "2020-01-22",
        reporter: "Joey Bagodonuts"
    });
})

router.post('/bug', (req, res) => {
    const bug = req.body;
});

app.use('/api', router);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

module.exports = app;
