const express = require("express");
const mongoose = require("mongoose");
const hospitalRouter = require('./hospitalRoutes')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb://0.0.0.0:27017/hospital",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (!err) {
      console.log("DB Success...");
    } else {
      console.log(err);
    }
  }
);

const port = 3333;
app.listen(port, () => {
  console.log(`App Running in port ${port}`);
});

app.use('/api/v1/hospitals', hospitalRouter);
