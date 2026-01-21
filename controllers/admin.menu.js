const adminMenu = require('../models/Menu-Items')
const router = require("express").Router()

router.get('/', async (req,res)=>{
    res.render('adminMenu.ejs')
})

module.exports = router;


