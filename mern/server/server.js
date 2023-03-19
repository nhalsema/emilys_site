// desc: 
// requiring express and cors to be used. 
// const port process.env.port will access the port variable from the config.env we required.
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.use(require("./routes/user"));
// desc: get driver connection
const dbo = require("./db/conn");
 
app.listen(port, () => {
  // desc: perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});