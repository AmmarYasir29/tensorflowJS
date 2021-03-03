let express = require("express");
let cors = require('cors')
let app = express();

app.use(cors())
app.use(function (req, res, next) {
  console.log(`${new Date()} - ${req.method} request for ${req.url}`);
  next();
});

app.use(express.static("../static"));

app.listen(3000, function () {
  console.log("server static on 81");
});
