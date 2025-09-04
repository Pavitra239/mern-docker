import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    name: String,
    age: Number,
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model('User', userSchema);
