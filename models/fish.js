import { model, Schema } from 'mongoose';

const fishSchema = new Schema({
    name: String,
    careLevel: String,
    temperament: String,
    diet: String,
    reefCompatibility: Boolean,
    maxSize: Number,
    minTankSize: Number
})



export default model('Fish', fishSchema);