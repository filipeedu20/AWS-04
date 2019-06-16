const express = require('express');
const carrinhoController = require('./carrinhoController');
const router = express.Router();

/* GET product page. */
router.get('/', carrinhoController.get);  //list 
router.post('/', carrinhoController.post);  //insert 
router.put('/', carrinhoController.put);  //update
router.delete('/:id', carrinhoController.deleteID);   //delete

module.exports = router;