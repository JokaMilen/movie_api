const express = require("express");
const morgan = require("morgan");
const app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");

app.use(morgan("common"));

app.use(express.static("public"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());
app.use(methodOverride());

let topMovies = [
  {
    title: "Mystic River",
    director: "Clint Eastwood"
  },
  {
    title: "Donnie Darko",
    director: "Richard Kelly"
  },
  {
    title: "The Shining",
    director: "Stanley Kubrick"
  },
  {
    title: "A Clockwork Orange",
    director: "Stanley Kubrick"
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont"
  }
];

// GET requests
app.get("/movies", (req, res) => {
  res.json(topMovies);
});

app.get("/", (req, res) => {
  asd.get();
  res.send("Welcome to my favorite movies!");
});

app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname });
});

// listen for requests
app.listen(8080, () => {
  console.log("Your app is listening on port 8080.");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
