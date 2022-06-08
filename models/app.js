import mongoose from "mongoose"

const AppSchema = new mongoose.Schema({
    name: String,
    practices: String,
    tec: String,
    server: String,
    url: String,
    git: String,
    desc: String
})

export default mongoose.models.App || mongoose.model("App", AppSchema);