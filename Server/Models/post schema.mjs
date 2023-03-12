import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
    name: { type: String, required: true },
    post: { type: String, required: true },
})
const PostModel = new mongoose.model("posts", PostSchema)
export default PostModel;