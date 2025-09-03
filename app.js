import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './routes/user.js';
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

const port = process.env.PORT;
const mongouri = process.env.MONGODB_URI;

mongoose
  .connect(mongouri)
  .then(() => {
    console.log('DB Connected');

    app.listen(port, () => {
      console.log(`server running on ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
