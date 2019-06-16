const express = require('express');
const carinhoController = require('./carinhoController');
const router = express.Router();

/* GET product page. */
router.get('/', carinhoController.get);  //list 
router.post('/', carinhoController.post);  //insert 
router.put('/', carinhoController.put);  //update
router.delete('/:id', carinhoController.deleteID);   //delete

module.exports = router;