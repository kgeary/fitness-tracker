const express = require("express");
const PORT = process.env.PORT || 8080;

app = express();

// Configure App
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Setup Routing
require("./routes")(app);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT} at http://localhost:${PORT}`);
});