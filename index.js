const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.static(__dirname + "/client"));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname + "/client/index.html"));
// });

const PORT = process.env.PORT || 3000;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  console.log(`App is listening on... ${PORT}`);
});
