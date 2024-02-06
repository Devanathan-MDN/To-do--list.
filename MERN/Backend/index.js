const express = require("express");
//require("dotenv").config();
const mongoose = require("mongoose");
const app = express();
const taskRoutes = require("./routes/taskRoute");
const cors = require('cors');



//Middleware
app.use((req, res, next) => {
  console.log("path " + req.path + " method " + req.method);
  next();
});

app.use(cors());

app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });

// DB connection
mongoose.connect('mongodb+srv://admin:admin@mern.3qrgf5s.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(
        "DB connected Successfully and listening to " + process.env.PORT
      );
    });
  })
  .catch((error) => console.log(error));

app.use("/api/tasks", taskRoutes);
