const express = require("express");
const mongoose = require("mongoose");
const authRoute = require("./routes/routes.auth.js");
const updateRoute = require("./routes/routes.update.js");
const getUserRoute = require("./routes/routes.getUser.js");
const app = express();
mongoose
  .connect("mongodb://localhost:27017/testdb")
  .then(() => console.log("mongodb connection successfull..."))
  .catch((err) => console.log("mongodb connetion error : " + err));

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/update", updateRoute);
app.use("/api/user", getUserRoute);

app.listen(8000, () => {
  console.log("Backend is running at port: 8000");
});
