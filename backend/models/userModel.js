import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  id: Number,
  mobile: Number,
  address: String,
});

const User = mongoose.model("User", userSchema);
export { User };
