import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snipeet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return(
      <div key={snippet.id}>
        {snippet.title}
      </div>
    )
  })

  return (
    <div>{renderedSnippets}</div>
  );
}
