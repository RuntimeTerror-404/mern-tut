const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/getRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => console.log(`server is set at ${port}`));
