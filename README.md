# Movie API

### About The Project
Restful API backed by MongoDB provides information about the movies like Title, Genre, Director and Description,
and information about the users like Name and Favorite Movies.
 
### Tools
##### Language
- JavaScript
##### Database
- MongoDB
##### Dependencies
- express
- mongoose
- bcrypt

### Models

##### Movie
```
{
  _id: String,
  Title: String,
  Description: String,
  Genre: {
    Name: String,
    Description: String
  },
  Director: {
    Name: String,
    Bio: String
  },
  ImagePath: String
}
```

##### User
```
{
  Username: String,
  Password: String,
  Email: String,
  Birthday: Date,
  FavoriteMovies: [String]
}
```

### API endpoints

##### Movies
|Request|Method|URL|Request Body|Response|
|-|-|-|-|-|
|Get list of all movies|GET|/movies|N/A|List of all movies|
|Get movie by Title|GET|/movies/:Title|N/A|Single movie|
|Get info about Genre by Name|GET|/movies/genres/:Name|N/A|Information about Genre|
|Get info about Director by Name|GET|/movies/director/:Name|N/A|Information about Director|

##### Users
|Request|Method|URL|Request Body|Response|
|-|-|-|-|-|
|Register new user|POST|/users|JSON object holding data about new user|JSON object holding data about newly registered user|
|Get all users|GET|/users|N/A|List of all users|
|Get user by Username|GET|/users/:Username|N/A|Single user|
|Update user|PUT|/users/:Username|JSON object holding new info about the user|JSON object with updated user info|
|Delete user|DELETE|/users/:Username|N/A|Status message|
|Add movie to favorites|POST|/users/:Username/favorites/:MovieID|N/A|Updated list of favorite movies|
|Remove movie from favorites|DELETE|/users/:Username/favorites/:MovieID|N/A|Updated list of favorite movies|
