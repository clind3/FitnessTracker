const express = require('express');
const db = require('../models/workout.js');
const router = express.Router();

//function to get total duration of time spent for a workout
totalDuration = (workoutsdata) => {
const allData = [];
workoutsdata.forEach(workout => {
    let duration = 0;
    let exData = JSON.stringify(workout);
    exData = JSON.parse(exData);

    (exData.exercises).forEach(element => {
        duration += element.duration;
        // console.log(duration);
    });

    exData.totalDuration = duration;
    // console.log('EXDATA: '+ exData.totalDuration);
    allData.push(exData);
});
return allData;
}

//get all workouts
router.get('/workouts', (req, res, next) => {
    db.find().sort({date: -1})
    .then(workoutData => {
        const workouts = totalDuration(workoutData);
        res.status(200).json(workouts);
    })
    .catch((err) => {
        res.json(err);
    })
}
);

//create workout
router.post('/workouts', (req,res) => {
    db.create({}).then(data => {
        res.json(data);
    }).catch((err) => {
        res.json(err);
    });
});

//find workouts within range on stats page
router.get('/workouts/range', (req,res) => {
    db.find()
    .then(data => {
        res.json(data);
    })
    .catch((err) => {
        res.json(err);
    });
});

//adding exercise to workout
router.put("/workouts/:id", (req,res) => {
    db.findByIdAndUpdate(req.params.id,
        {$push: {exercises: req.body}}
    )
    .then(data => res.json(data))
    .catch(err => {
        res.json(err);
    });
});


module.exports = router;
