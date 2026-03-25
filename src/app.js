// app.js

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/poll", require("./routes/votingRoutes"));
app.use("/api/extras", require("./routes/extrasRoutes"));
app.use("/api/rebate", require("./routes/rebateRoutes"));
app.use("/api/feedback", require("./routes/feedbackRoutes"));
app.use("/api/menu", require("./routes/menuRoutes"));
app.use("/api/students", require("./routes/studentRoutes"));

module.exports = app;