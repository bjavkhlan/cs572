const express = require('express');
const router = express.Router();


/*
db.lectures.createIndex({lecture: 'text'});
db.lectures.find({$text: {$search: "Lorem Ipsum"}});
*/
router.post("/:q", async function(req, res) {
  const collection = req.db.db("homework_07").collection("lectures");
  const result = await collection.find({$text: {$search: req.params.q}}).toArray();
  res.json(result);
});

module.exports = router;

