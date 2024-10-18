import BlogForm from "@/components/BlogForm";


export default async function Blogs(){
    let res = await fetch(`http://localhost:3000/api/blogs`);
    res = res.json();

    return(
        <main className="container mx-auto my-5">
            {
                res.formData?.map((blog) => <div key={blog._id} className="border p-2 my-1">
                    <h1 className="font-bold text-3xl">{blog.title}</h1>
                </div>)
            }

            <BlogForm />
        </main>
    )
}