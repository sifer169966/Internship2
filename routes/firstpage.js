const express = require('express')
const router = express.Router()
const path = require('path')

router.get('/', (req,res)=>{
    res.redirect('/store')
})

module.exports = router