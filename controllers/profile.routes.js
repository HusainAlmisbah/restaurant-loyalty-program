const Profile = require('../models/User')
const router = require("express").Router()

router.get('/', async (req,res)=>{
    res.render('profile.ejs')
})

router.post('/', async (req,res)=>{
    const profile = await Profile.create(req.body)
    res.redirect('/profile')
})

module.exports = router;


