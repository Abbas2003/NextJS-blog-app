import BlogForm from "@/components/BlogForm";


export default async function Blogs(){
    let res = await fetch(`http://localhost:3000/api/blogs`, {
        "cache": "no-cache"
    });
    res = res.json();
    console.log("res ->", res.data)

    return(
        <main className="container mx-auto my-5">
            {
                res.data?.map((blog) => console.log("blog ->", blog))
            }
            <BlogForm />
        </main>
    )
}