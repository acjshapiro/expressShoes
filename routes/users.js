var express = require('express');
var router = express.Router();

/* GET users listing. */
//we got here with request to /users.  the '/' is relative to current location.
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
