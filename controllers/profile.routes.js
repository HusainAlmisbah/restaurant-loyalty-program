const Profile = require('../models/User')
const router = require("express").Router()

router.get('/', async (req,res)=>{
    res.render('profile.ejs')
})

module.exports = router;


