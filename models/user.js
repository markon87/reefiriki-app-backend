import { model, Schema } from 'mongoose';

const userSchema = new Schema({
  name: String,
  email: String,
  username: String,
  password: String,
  tanks: [String]
})



export default model('User', userSchema);