"use server";
import { revalidatePath } from "next/cache";



export async function addBlog(obj) {
    try {
      let res = await fetch("http://localhost:3000/api/blogs", {
        method: "POST",
        body: JSON.stringify(obj),
      });
    //   console.log(res);
      revalidatePath("/");
    } catch (err) {
      console.log(err);
    }
  }
  