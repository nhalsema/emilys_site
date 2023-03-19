const express = require("express");

// desc: userRoutes is an instance of the express router.
// desc: We use it to define our routes.
// desc: The router will be added as a middleware and will take control of requests starting with path /user.
const userRoutes = express.Router();

// desc: This will connect us to the database
const dbo = require("../db/conn");

// desc: This convertS the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;

// desc: This section will help you get a list of all the users. GET ALL.
userRoutes.route("/users").get(function (req, res) {
    let db_connect = dbo.getDb("user_profiles");
    db_connect
        .collection("users")
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// desc: This section will help you get a single user by id. GET SINGLE.
// userRoutes.route("/user/:id").get(function (req, res) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect
//     .collection("users")
//     .findOne(myquery, function (err, result) {
//       if (err) throw err;
//       res.json(result);
//     });
// });

// desc: This section will help you CREATE a new user.
// userRoutes.route("/users/add").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myobj = {
//     username: req.body.username,
//     password: req.body.password,
//   };

//   db_connect.collection("users").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     response.json(res);
//   });
// });

// desc: This section will help you EDIT a user by id.
// userRoutes.route("/update/:id").post(function (req, response) {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   let newvalues = {
//     $set: {
//       username: req.body.username,
//       password: req.body.password,
//     },
//   };

//   console.log("user.js name:" , req.body.username);
//   console.log("user.js password:" , req.body.password);

//   db_connect
//     .collection("users")
//     .updateOne(myquery, newvalues, function (err, res) {
//       if (err) throw err;
//       console.log("1 document updated");
//       response.json(res);
//     });
// });

// desc: This section will help you DELETE a user
// userRoutes.route("/:id").delete((req, response) => {
//   let db_connect = dbo.getDb();
//   let myquery = { _id: ObjectId(req.params.id) };
//   db_connect.collection("users").deleteOne(myquery, function (err, obj) {
//     if (err) throw err;
//     console.log("1 document deleted");
//     response.json(obj);
//   });
// });

module.exports = userRoutes;