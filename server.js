const express = require('express');
const mongoose = require('mongoose');

//Route
const hospitalRouter = require('./routes/hospitalRoutes');
const userRouter = require('./routes/userRoutes');
const ratingRouter = require('./routes/ratingRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  'mongodb://0.0.0.0:27017/hospital',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (!err) {
      console.log('DB Success...');
    } else {
      console.log(err);
    }
  }
);

app.use('/api/v1/hospitals', hospitalRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/ratings', ratingRouter);

const port = 3333;
app.listen(port, () => {
  console.log(`App Running in port ${port}`);
});
