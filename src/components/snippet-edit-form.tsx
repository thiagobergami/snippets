/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Editor } from "@monaco-editor/react";
import type { Snipeet } from "@prisma/client";
import { useState } from "react";

interface SnippetEditFormProps {
  snippet: Snipeet;
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
    const [code, setCode] = useState(snippet.code)

  const handleEditorChange = (value: string = "") => {
    setCode(value)
  };

  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
}
