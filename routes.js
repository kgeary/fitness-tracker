module.exports = function (app) {

  app.get("/", (req, res) => {
    res.sendFile(path.resolve("public/index.html"));
  });

  app.post("/api/start", (req, res) => {
    console.log("START");
    res.json("OK");
  });

  app.post("/api/continue", (req, res) => {
    console.log("CONTINUE");
    res.json("OK");
  });
}