const express = require("express");
const cors = require("cors");

const app = express();

const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: req + " Welcome to bezkoder application. " });
});

require("./app/routes/usuario.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});