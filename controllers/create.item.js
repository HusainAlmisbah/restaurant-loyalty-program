const Item = require('../models/User')
const router = require("express").Router()

router.get('/', async (req,res)=>{
    res.render('create-item.ejs')
})

module.exports = router;