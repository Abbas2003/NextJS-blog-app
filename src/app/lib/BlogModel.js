
import mongoose from 'mongoose';
const { Schema } = mongoose;

const BlogSchema = new Schema({
    title: { type: String, unique: true },
    author: String,
    body: String,
}, {
    timestamps: true
});

const BlogModel = mongoose.models.Blogs || mongoose.model('Blogs', BlogSchema);

export default BlogModel;