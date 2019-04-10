const express = require("express");
const router = express.Router();
const encrypt = require("simple-encryptor");

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://homework01:homework01@ds233806.mlab.com:33806/homework01";
const client = new MongoClient(uri, { useNewUrlParser: true });
let message;
client.connect(err => {
    const collection = client.db("homework01").collection("data");
    collection.findOne()
    .then(data => {
        const encryptor = encrypt(data.key);
        message = encryptor.decrypt(data.message)
    });
    client.close();
  });

router.get('/', (req, res) => {
    res.set('Content-Type', 'application/json');
    res.send({
        message: message
    });
    res.end();
});

module.exports = router;