const jwtSecret = "your_jwt_secret"; //the same as used in JWTStrategy

const jwt = require("jsonwebtoken");
const passport = require("passport");

require("./passport"); //local passport file

let generateJWTToken = user => {
  return jwt.sign(user, jwtSecret, {
    subject: user.Username, //username beeing encoded in JWT
    expiresIn: "7d", //token will expire in 7 days
    algorithm: "HS256" //algorithm used to 'sign' or encode the values of the JWT
  });
};

/*POST login.*/

module.exports = router => {
  router.post("/login", (req, res) => {
    passport.authenticate("local", { session: false }, (error, user, info) => {
      if (error || !user) {
        return res.status(401).json({
          message: info.message,
          user: user
        });
      }
      req.login(user, { session: false }, error => {
        if (error) {
          res.send(error);
        }
        let token = generateJWTToken(user.toJSON());
        return res.json({ user, token });
      });
    })(req, res);
  });
};
