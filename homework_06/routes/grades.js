var express = require('express');
var router = express.Router();
const data  = {};
data[1] = { id: 1, name: "Asaad Saad", course: "CS572", grade: 100};
data[2] = { id: 2, name: "Javkhlan Batsaikhan", course: "CS572", grade: 95};
data[3] = { id: 3, name: "Munkhzul Khurelbaatar", course: "CS572", grade: 96};
data[4] = { id: 4, name: "Battuguldur Ganbold", course: "CS572", grade: 98};

/*  Get all */
router.get('/', function(req, res, next) {
    res.send(data);
    res.end();
});

router.get('/:id', function(req, res, next) {
    if (data[req.params.id]) res.send(data[req.params.id]);
    else res.status(404).end();
});

router.post('/', (req, res) => {
    data[req.body.id] = req.body;
    res.status(201);
    res.end();
});

router.put('/:id', (req, res) => {
    if (data[req.params.id]) {
        data[req.params.id] = req.body;
        res.sendStatus(205).end();
    } else res.status(404).end();
});

router.delete('/:id', (req, res, next) => {
    if (data[req.params.id]) {
        data[req.params.id] = undefined;
        res.status(204).end();
    } else next(`Id doesn't exist`); 
})

module.exports = router;
