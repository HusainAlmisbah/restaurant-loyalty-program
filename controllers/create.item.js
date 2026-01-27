const Item = require('../models/Menu-Items')
const router = require("express").Router()
const {pointsObj,category: points} = require('../category')




router.get('/', async (req,res)=>{
    res.render('create-item.ejs', {points:points})
})

router.post('/', async(req,res)=>{
    const category=req.body.Category
    const points = pointsObj[category]
    req.body.Points=points
    const menuItems = await Item.create(req.body)
    res.redirect('/adminMenu')
})

module.exports = router;