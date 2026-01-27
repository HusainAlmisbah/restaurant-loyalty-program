const Menu = require('../models/Menu-Items')
const router = require("express").Router()
const menu = require('../menu.json')


router.get('/', async (req,res)=>{
    


    res.render('menu.ejs', {menu:menu})

})

module.exports = router;


