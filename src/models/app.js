import { Schema, model, models } from 'mongoose'

const AppSchema = new Schema({
    name: String,
    practices: String,
    tec: String,
    server: String,
    url: String,
    git: String,
    desc: String
})

export default models.App || model("App", AppSchema);