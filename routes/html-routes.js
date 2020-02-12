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
}