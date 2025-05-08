var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a products');
  res.render('products', { title: 'Express' });
});

router.get('/:nameProduct', function(req, res, next) {
  res.render('product', { product: req.params.nameProduct });
});

module.exports = router;
