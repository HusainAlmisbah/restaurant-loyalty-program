const adminMenu = require('../models/Menu-Items')
const router = require("express").Router()
const {category: points} = require('../category')


router.get('/', async (req,res)=>{
    const menuItems = await adminMenu.find({})
    console.log(menuItems)
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


