const Order = require('../models/Menu-Items')
const router = require("express").Router()



router.get('/', async (req,res)=>{
    res.render('checkout.ejs')
})

router.post('/', async (req,res)=>{
    const order = await Order.create(req.body)
    res.redirect('/profile')
})

module.exports = router;

