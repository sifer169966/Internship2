const express = require('express')
const router = express.Router();
const storeController = require('../controller/store')
const path = require('path')

/*===================================================================================== */
/*                                  Staticpage                                          */
/*===================================================================================== */
router.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,  '../public' , '/store', '/entrancStore.html'));
})

router.get('/addNewProductpage', (req,res)=>{
    res.sendFile(path.join(__dirname,  '../public' , '/store', '/addNewProduct.html'))
})

router.get('/getOneProductpage', (req,res)=>{
    res.sendFile(path.join(__dirname,  '../public' , '/store', '/getOneProduct.html'))
})

/*===================================================================================== */
/*                                  HANDLERS ROUTES                                     */
/*===================================================================================== */

router.get('/allstores',storeController.getAllProduct)
router.get('/getOneProduct',storeController.getOneProduct)
router.post('/addNewProduct',storeController.addNewProduct)
router.put('/:id',storeController.updateProduct)
router.delete('/:id',storeController.deleteProduct)

module.exports = router;