


export async function addBlog(obj) {
    try {
      await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        body: JSON.stringify(obj),
      });
      revalidatePath("/blogs");
    } catch (err) {
      console.log(err);
    }
  }
  