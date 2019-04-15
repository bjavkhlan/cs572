const express = require('express');
const axios = require("axios");
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  (async function() {
    try {
      const response = await axios.get("https://randomuser.me/api/?result=10");
      res.set();
      res.links({
        next: 'https://randomuser.me/api/?result=11',
        last: 'https://randomuser.me/api/?result=9'
      });
      res.send(response.data);
      res.end();
    } catch (err) {
      console.error(err);
      res.writeHead(500);
      res.end();
    }
  })();

  // axios.get("https://randomuser.me/api/?result=10")
  // .then(response => {
  //     res.send(response.data);
  //     res.end();
  // })
  // .catch(err => {
  //   console.err(err);
  //   res.writeHead(500);
  //   res.end();
  // });
});

module.exports = router;
