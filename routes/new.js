const express = require('express')
const router = express.Router()
const {ensureAuth} = require('../middleware/auth')

const Workout = require('../models/Workout')

//@desc Process add form
//@Route POST /new
router.post('/', ensureAuth, async (req,res) => {
    try {
        req.body.user = req.user.id
        await Workout.create(req.body)
        res.redirect('/new')
    } catch (err) {
        console.error(err)
        res.render('error/500')
    }
})

// //@desc Show current workout
// //@Route GET /new
// router.get('/new', ensureAuth, async (req,res) => {
//     try {
//         const workouts = await Workout.find({ user: req.user.id }).lean()
//         res.render('new', {
//             name: req.user.firstName,
//             workouts,
//         })
//         console.log(workouts)
//     } catch (err) {
//         console.error(err)
//         res.render('error/500')
//     }
// })


module.exports = router