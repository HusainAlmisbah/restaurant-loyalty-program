const adminMenu = require('../models/Menu-Items')
const router = require("express").Router()
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
    const menuItems = await adminMenu.find({})
    res.render('adminMenu.ejs', {menuItems:menuItems})
})

router.post('/delete/:id', async (req,res)=>{
    const id = req.params.id
    await adminMenu.findByIdAndDelete(id)
    res.redirect('/adminMenu')
})

// router.post('/update/:id', async (req,res)=>{
//     const id = req.params.id
//     const item = await adminMenu.findById(id)
//     res.render('update-item.ejs', {item:item})
// })

router.get('/update/:id', async (req,res)=>{
    const id = req.params.id
    const item = await adminMenu.findById(id)
    res.render('update-item.ejs', {item:item, points:points})
})



router.post('/update-item/:id', async (req,res)=>{
    const id = req.params.id
    await adminMenu.findByIdAndUpdate(id, req.body)
    res.redirect('/adminMenu')
})

module.exports = router;


