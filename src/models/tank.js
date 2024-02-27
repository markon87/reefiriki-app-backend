import { model, Schema } from 'mongoose';

const tankSchema = new Schema({
    name: String,
    size: Number,
    owner: String,
    stocking: [String]
})



export default model('Tank', tankSchema);