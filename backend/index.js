const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const colors = require("colors");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const announcementRouter = require("./routes/announcement");
const incidentRouter = require("./routes/incidence");
const clientRouter = require("./routes/client");
const shiftRouter = require("./routes/shift");
const { verifyToken } = require("./Middlewares/verifyToken");

dotenv.config();

const app = express();

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/announcements", announcementRouter);
app.use("/api/v1/incidence", incidentRouter);
app.use("/api/v1/clients", clientRouter);
app.use("/api/v1/shifts", shiftRouter);

// test route
app.get("/test", (req, res) => {
  res.status(200).json("test is OK!!~~~");
});

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("DB connection is success.!!".bgCyan);
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}!!`.bgMagenta);
});
