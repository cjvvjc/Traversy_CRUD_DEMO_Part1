const express = require('express')
const router = express.Router()
const {ensureAuth, ensureGuest} = require('../middleware/auth')

const Workout = require('../models/Workout')

//@desc Login/landing page
//@route GET /
router.get('/', ensureGuest, (req,res) => {
    res.render('login', {
        layout: 'login',
    })
})

//@desc Dashboard
//@route GET /dashboard
router.get('/dashboard', ensureAuth, (req,res) => {
    console.log(req.user)
    res.render('dashboard', {
        name: req.user.firstName, //adds {{name}} to Dashboard homepage
    })
})

//@desc New workout
//@route GET /new
//@desc Show current workout
//@Route GET /new
router.get('/new', ensureAuth, async (req,res) => {
    try {
        const workouts = await Workout.find({ user: req.user.id }).lean()
        res.render('new', {
            name: req.user.firstName,
            workouts,
        })
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

//@desc Current workout
//@route GET /current
router.get('/current', ensureAuth, (req,res) => {
    console.log(req.user)
    res.render('current')
})

//@desc Review workouts
//@route GET /review
router.get('/review', ensureAuth, (req,res) => {
    console.log(req.user)
    res.render('review')
})

module.exports = router