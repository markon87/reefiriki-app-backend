import { model, Schema} from 'mongoose'

const fishFamilySchema = new Schema({
    name: String,
    fish:[String]
})

export default model('FishFamily', fishFamilySchema)