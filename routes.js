const db = require("./models");

String.prototype.toObjectId = function () {
  var ObjectId = (require('mongoose').Types.ObjectId);
  return new ObjectId(this.toString());
};

module.exports = function (app) {
  // ****************************************************
  // HTML ROUTES
  // ****************************************************
  app.get("/", (req, res) => {
    res.sendFile("index.html", { root: "public" });
  });

  app.get("/exercise", (req, res) => {
    res.sendFile("exercise.html", { root: "public" });
  });

  app.get("/stats", (req, res) => {
    res.sendFile("stats.html", { root: "public" });
  });

  // ****************************************************
  // API ROUTES
  // ****************************************************

  // GET /api/workouts
  app.get("/api/workouts", async (req, res) => {
    const data = await db.Workout.find({}).sort({ 'day': 1 });
    res.json(data);
  });

  // POST /api/workouts
  app.post("/api/workouts", async (req, res) => {
    const workout = new db.Workout();
    const data = await db.Workout.create(workout);
    res.json(data);
  });

  // PUT /api/workouts/:id
  app.put("/api/workouts/:id", async (req, res) => {
    const data = await db.Workout.update(
      {
        _id: req.params.id.toObjectId()
      },
      {
        $push: { exercises: req.body }
      });
    console.log(data);
    res.json(data);
  });

  // GET /api/workouts/range
  app.get("/api/workouts/range", async (req, res) => {
    const data = await db.Workout.find({}).sort({ 'day': 1 }).limit(7);
    res.json(data);
  });
}