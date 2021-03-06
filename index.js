
const express = require("express");
const mongoose = require("mongoose");
const auth = require("./Route/api/auth");
const users = require("./Route/api/users");
const app = express();


app.use(express.json());
app.use("/api/users", users);
app.use("/api/auth", auth);


//connecting to the dataBase
mongoose
  .connect("mongodb://localhost/profile", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("connected to mongo DB"))
  .catch(() => console.error(error));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Listening to PORT ${PORT}`));