const path = require('path');

const express = require('express');

const router = express.Router();

//admin/add_product => GET
router.get('/add_product', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../', 'views', 'add_product.html'));
});

router.post('/add_product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
