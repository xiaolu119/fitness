const router = require("express").Router();
const Fitness = require("../models/fitness.js");

router.post("/api/workouts", ({ body }, res) => {
    console.log("data", body);
    Fitness.create(body)
    .then(dbWorkouts => {
        console.log("Create",dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    console.log("PutRPute",params.id,body)
    Fitness.findByIdAndUpdate(params.id, 
        { $push: {exercise: body}},{new:true})
    .then(dbWorkouts => {
        console.log("Put route",dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
        console.log(err)
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
    Fitness.find({})
    .then(dbWorkouts => {
        console.log("Get route",dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Fitness.find({}).limit(10)
    .then(dbWorkouts => {
        console.log("Range",dbWorkouts)
      res.json(dbWorkouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});
module.exports = router;
