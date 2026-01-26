const Profile = require('../models/User')
const router = require("express").Router()

router.get('/', async (req,res)=>{
    console.log(req.session)
    res.render('profile.ejs',{cartOrder: req.session.cartOrder})
})

router.post('/', async (req,res)=>{
    const profile = await Profile.create(req.body)
    res.redirect('/profile')
})

module.exports = router;


