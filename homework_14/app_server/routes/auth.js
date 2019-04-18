var express = require('express');
var router = express.Router();

router.all('*', function(req, res, next) {
  if (req.token) next();
  else res.status(300).end("No token found!");
});

module.exports = router;