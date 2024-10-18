import BlogModel from "@/app/lib/BlogModel";
import { connectDB } from "@/app/lib/dbConnection";


export async function GET(request){
    await connectDB();
    const blogs = BlogModel.find();
    console.log("Blogs from DB ->", blogs)
    return Response.json({
        data: blogs,
        msg: "Blogs fetched Successfully",
    })
}


export async function POST(request){
    await connectDB();
    const blog = request.json()
    console.log("Blog from DB ->", blog)
    return Response.json({
        data: blog,
        msg: "Blogs fetched Successfully",
    })
}