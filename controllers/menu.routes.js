const Menu = require('../models/Menu-Items')
const router = require("express").Router()



router.get('/', async (req,res)=>{
    res.render('menu.ejs')
})

module.exports = router;


