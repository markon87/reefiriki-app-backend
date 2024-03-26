import { model, Schema } from "mongoose";

const userSchema = new Schema({
  username: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  tanks: { type: Array },
  token: { type: String },
});

export default model("User", userSchema);
