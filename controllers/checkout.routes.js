const Order = require('../models/Menu-Items')
const router = require("express").Router()
const menu = require('../menu.json')
 

router.get('/', async (req,res)=>{
    res.render('checkout.ejs',{points:req.session.totalPoints, price:req.session.totalPrice, cart:req.session.cart})
})

router.post('/', async (req,res)=>{
    console.log(req.body)
    let totalPrice = 0
    let totalPoints = 0
    for (const item of menu){
        if(req.body[`${item.category}`] === item.mealName){
            req.body[`${item.category}Price`] = item.price  
        const quantity = parseInt(req.body[`${item.category}Quantity`]) || 0
        console.log(`Item: ${item.mealName}, Quantity: ${quantity}`)
        if (quantity > 0){
            totalPrice += item.price * quantity
            totalPoints += item.points * quantity
        
        }
    }
    }
    req.session.totalPrice = totalPrice
    req.session.totalPoints = totalPoints
    req.session.cart = req.body
    console.log('Total Price:', totalPrice)
    console.log('Total Points:', totalPoints)
    // const order = await Order.create(req.body)
    res.redirect('/checkout')
})

router.post('/confirm', async (req,res)=>{
    const date = new Date()
    const orderData = {
        total: req.body.total,
        points: req.body.points,
        date: date.toLocaleString(),
        orderNumber: Math.floor(100000 + Math.random() * 900000)
    }


    req.session.cartOrder = orderData

    res.redirect('/profile')


})

module.exports = router;

