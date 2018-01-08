var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users list json');
});

router.get('/users/:userId/books/:bookId', function (req, res) {
    // Access userId via: req.params.userId
    // Access bookId via: req.params.bookId
    res.send(req.params);
});

module.exports = router;
