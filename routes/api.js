const express = require('express');
const Workout = require('../models/workout');
const router = express.Router();

//get all workouts
router.get('/workouts', (req, res, next) => {
    Workout.find().sort({date: -1})
    .then(workoutData => {
        res.json(workoutData);
    })
    .catch((err) => {
        res.json(err);
    })
}
);

