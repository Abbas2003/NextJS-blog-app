import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-around p-24">
      <h1 className="text-3xl font-bold">Hello World</h1>
      <Link href={"/blogs"}>Blogs</Link>
    </main>
  );
}
