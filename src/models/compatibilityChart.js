import { model, Schema} from 'mongoose'

const compatibilityChartSchema = new Schema({
    family: String,
    compatible: [String],
    notCompatible: [String],
    cautionRequired: [String]
})

export default model('CompatibilityChart', compatibilityChartSchema)