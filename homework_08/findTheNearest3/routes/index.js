var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  const collection = req.db.db("homework_08").collection("locations");
  const result = await collection.find({}).toArray();
  res.send(result);
});

router.post('/', async function(req, res, next) {
  const collection = req.db.db("homework_08").collection("locations");
  await collection.insert(req.body);
  res.end();
});

const MUM_COORD = [41.017654, -91.9665342];

router.get('/find', async function(req, res, next) {
  const collection = req.db.db("homework_08").collection("locations");
  const result = await collection.find({location: {$near: MUM_COORD}, category: "dorm" }).limit(3).toArray();
  res.send(result);
});

module.exports = router;
