import { model, Schema } from 'mongoose';

const fishSchema = new Schema({
    name: String,
    family: String,
    careLevel: String,
    temperament: String,
    diet: String,
    reefCompatibility: Boolean,
    maxSize: Number,
    minTankSize: Number,
    imageUrl: String
})



export default model('Fish', fishSchema);