const express = require('express');
const pedidosController = require('./pedidosController');
const router = express.Router();

/* GET product page. */
router.get('/', pedidosController.get);  //list 
router.post('/', pedidosController.post);  //insert 
router.put('/', pedidosController.put);  //update
router.delete('/:id', pedidosController.deleteID);   //delete

module.exports = router;