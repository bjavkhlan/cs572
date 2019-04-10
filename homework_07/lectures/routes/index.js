var express = require('express');
var router = express.Router();
const ObjectID = require('mongodb').ObjectID;


/* GET home page. */
router.get('/', async function(req, res, next) {
  const collection = req.db.db("homework_07").collection("lectures");
  const result = await collection.find({}).toArray();
  res.json(result);
});

router.post('/', (req, res) => {
  const collection = req.db.db("homework_07").collection("lectures");
  collection.insertOne(req.body);
  res.end();
});

router.put('/:id', (req, res) => {
  const collection = req.db.db("homework_07").collection("lectures");
  //collection.save(req.body);
  collection.updateOne({"_id": new ObjectID(req.params.id)}, {$set: req.body});
  collection.find({}).toArray().then(result => res.json(result));
});

router.delete('/:id', (req, res) => {
  const collection = req.db.db("homework_07").collection("lectures");
  const result = collection.deleteOne({"_id": new ObjectID(req.params.id)});
  res.end();
});

module.exports = router;
