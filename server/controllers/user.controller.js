const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// export an object that is full of methods
module.exports = {
  register(req, res) {
    const user = new User(req.body);

    user
      .save()
      .then(() => {
        res.json({ msg: "success!", user: user });
      })
      .catch((err) => res.status(400).json(err));
  },

  login(req, res) {
    User.findOne({ username: req.body.username })
      .then((user) => {
        if (user === null) {
          res.status(400).json({ msg: "invalid login attempt" });
        } else {
          bcrypt
            .compare(req.body.password, user.password)
            .then((passwordIsValid) => {
              if (passwordIsValid) {
                res
                  .cookie(
                    "usertoken",
                    jwt.sign({ _id: user._id }, process.env.JWT_SECRET),
                    {
                      httpOnly: true,
                    }
                  )
                  .json({ msg: "success!" });
              } else {
                res.status(400).json({ msg: "invalid login attempt" });
              }
            })
            .catch((err) =>
              res.status(400).json({ msg: "invalid login attempt" })
            );
        }
      })
      .catch((err) => res.json(err));
  },

  logout(req, res) {
    res
      .cookie("usertoken", jwt.sign({ _id: "" }, process.env.JWT_SECRET), {
        httpOnly: true,
        maxAge: 0,
      })
      .json({ msg: "ok" });
  },

  logout2(req, res) {
    res.clearCookie("usertoken");
    res.json({ msg: "usertoken cookie cleared" });
  },

  getLoggedInUser(req, res) {
    const decodedJWT = jwt.decode(req.cookies.usertoken, { complete: true });

    User.findById(decodedJWT.payload._id)
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },

  getAll(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.json(err));
  },

  getOne(req, res) {
    User.findOne({ _id: req.params.id })
      .then((user) => res.json(user))
      .catch((err) => res.json(err));
  },
};
