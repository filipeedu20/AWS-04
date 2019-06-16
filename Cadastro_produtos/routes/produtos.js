const express = require('express');
const produtosController = require('./produtosController');
const router = express.Router();

/* GET product page. */
router.get('/', produtosController.get);  //list 
router.post('/', produtosController.post);  //insert 
router.put('/', produtosController.put);  //update
router.delete('/:id', produtosController.deleteID);   //delete

module.exports = router;