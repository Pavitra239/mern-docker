import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    age: Number,
    email: String,
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model('user', userSchema);
