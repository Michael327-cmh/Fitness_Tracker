const router = require("express").Router();
const Exercise = require("../models/Exercise.js");
const path = require("path");

router.post("/api/Exercise", ({ body }, res) => {
  Exercise.create(body)
    .then(Exercise => {
      res.json(Exercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/Exercise/bulk", ({ body }, res) => {
  Exercise.insertMany(body)
    .then(Exercise => {
      res.json(Exercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/Exercise", (req, res) => {
  Exercise.find({})
    .sort({ date: -1 })
    .then(Exercise => {
      res.send(Exercise);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/Exercise/:id", (req, res) => {
  Exercise.findById(req.params.id, function (err, workoutById) {
    const allExercises = workoutById.exercises
    allExercises.push(req.body)

    try {
      const added = workoutById.save();
      return res.status(200).send(added)
    }
    catch (err) {
      return res.status(500).send(err)
    }
  })
})

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/exercise.html"));
})

router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname + "/../public/stats.html"));
})

module.exports = router;
