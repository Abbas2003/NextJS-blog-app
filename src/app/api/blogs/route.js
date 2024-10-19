import BlogModel from "@/app/lib/BlogModel";
import { connectDB } from "@/app/lib/dbConnection";


export async function GET(request){
    await connectDB();
    const blogs = await BlogModel.find();
    // console.log("Blogs from DB ->", blogs)
    return Response.json({
        blogs,
        msg: "Blogs fetched Successfully",
    })
}


export async function POST(request){
    await connectDB();
    const blog = request.json()

    const blogAdded = await new BlogModel({...blog})
    await blogAdded.save();

    console.log("Blogs Added ->", blogAdded)
    return Response.json({
        data: blogAdded,
        msg: "Blogs Added Successfully",
    })
}