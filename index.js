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

let movies = [
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

// GET all movies
app.get("/movies", (req, res) => {
  res.json(movies);
});
//Get the data about single movie
app.get("/movies/:title", (req, res) => {
  res.send(
    "Successful GET request returning data on single movie by title: " +
      req.params.title
  );
});
//Get data about a genre
app.get("/movies/genre/:name", (req, res) => {
  res.send("Successful GET request returning data on genre by name");
});
//Get data about a director
app.get("/movies/directors/:name", (req, res) => {
  res.send("Successful GET request returning data about the director");
});
//Allow new users to register
app.post("/users/:username", (req, res) => {
  res.send("New user was registred");
});
//Allow users to update their user info
app.put("/users/:userID", (req, res) => {
  res.send("User info was updated");
});
//Allow users to add a movie to their list of favorites
app.post("/users/:userID/favorites/:movieID", (req, res) => {
  res.send("Movie was added to favorites");
});
//Allow users to remove a movie from their list of favorites
app.delete("/users/:userID/favorites/:movieID", (req, res) => {
  res.send("Movie was removed from favorites");
});
//Allow existing users to deregister
app.delete("/users/:userID", (req, res) => {
  res.send("User was removed");
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
