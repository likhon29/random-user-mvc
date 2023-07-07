const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const usersRoutes = require("./routes/v1/users.route.js");
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/api/v1/user", usersRoutes);

app.get("/", (req, res) => {
  res.send("Random server running");
});

app.all("*", (req, res) => {
  res.send("No route found!");
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on port ${5000}`);
});
