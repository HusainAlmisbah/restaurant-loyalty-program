const Item = require('../models/Menu-Items')
const router = require("express").Router()

const pointsObj={
    soups:5,
    hotMeza:5,
    coldMezaSalads:5,
    shawarma:10,
    byKG:20,
    friedGrilledFish:10,
    stewsCurries:10,
    grills:15,
    pasta:10,
    chineseDishes:7,
    sizzling:15,
    internationalDishes:5,
    sandwiches:5,
    desserts:7,
    coldBeverages:5,
    freshJuices:5,
}

const points=[
    'soups',
    'hotMeza',
    'coldMezaSalads',
    'shawarma',
    'byKG',
    'friedGrilledFish',
    'stewsCurries',
    'grills',
    'pasta',
    'chineseDishes',
    'sizzling',
    'internationalDishes',
    'sandwiches',
    'desserts',
    'coldBeverages',
    'freshJuices',
]


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