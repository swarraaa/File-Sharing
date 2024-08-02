const express = require("express");
const app = express();
const router = require("./routes/routes");
const cors = require("cors");
const { connectDB } = require("./database/db");
const upload = require("./utils/upload");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/", router);

const port = process.env.PORT || 8000;

const start = () => {
  try {
    connectDB();
    app.listen(port, () => {
      console.log("App listening on port 8000");
    });
  } catch (error) {
    console.log("Internal server error");
  }
};

start();
