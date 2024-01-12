

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
// const dotenv = require("dotenv");
const cors = require("cors");
const Routes = require("./routes/routes")

const app = express();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

app.use(bodyParser.json());

const PORT = process.env.PORT || 4000;


// DB connection
mongoose
  .connect("mongodb+srv://rockyranjith223:yzIndYPhNUwZAy4w@cluster0.dfx67zc.mongodb.net/form")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.error("DB Connection Error:", err));

// Routes
app.use("/", Routes);


// Listen
app.listen(PORT,
  console.log(`The server is listening at http://localhost:${PORT}`)
);
