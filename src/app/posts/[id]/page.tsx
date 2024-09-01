export default async function Page(
  { params }: { params: { id: string } } // params is an object with an id property
) {
  const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
  const post = await response.json();
  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl mb-7 font-semibold">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  );
}
