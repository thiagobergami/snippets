import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";

interface SnippetEditPagePropos {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetEditPagePropos) {
  const id = parseInt(props.params.id);

  const snippet = await db.snipeet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <SnippetEditForm snippet={snippet}></SnippetEditForm>
    </div>
  );
}
