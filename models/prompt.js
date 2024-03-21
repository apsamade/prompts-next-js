import mongoose, { Schema, model, models } from 'mongoose'

const PromptSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    prompt: {
        type:String,
        required: [true, 'Prompt est obligatoire.']
    },
    tag: {
        type: String,
        required : [true, 'Un Tag est obligatoire.']
    }
})

const Prompt = models.Prompt || model('Prompt', PromptSchema)

export default Prompt;