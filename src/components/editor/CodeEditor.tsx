"use client";

import Editor from "@monaco-editor/react";
import { useMemo } from "react";
import type { editor } from "monaco-editor";

type CodeEditorProps = {
  code: string;
  onChange: (value: string) => void;
  title?: string;
};

function handleEditorMount(monacoEditor: editor.IStandaloneCodeEditor) {
  monacoEditor.focus();
}

export function CodeEditor({
  code,
  onChange,
  title = "editor.js",
}: CodeEditorProps) {
  const options = useMemo(
    () => ({
      minimap: { enabled: false },
      fontSize: 14,
      wordWrap: "on" as const,
      scrollBeyondLastLine: false,
      lineNumbersMinChars: 3,
      roundedSelection: false,
      automaticLayout: true,
      padding: { top: 20, bottom: 20 },
      overviewRulerBorder: false,
      quickSuggestions: {
        other: true,
        comments: false,
        strings: true,
      },
      suggestOnTriggerCharacters: true,
      tabSize: 2,
      insertSpaces: true,
      smoothScrolling: true,
      cursorBlinking: "smooth" as const,
    }),
    [],
  );

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-stone-900/10 bg-stone-950 text-stone-100">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-4 py-3 text-xs text-stone-400">
        <span>{title}</span>
        <div className="flex items-center gap-3">
          <span>{code.split("\n").length} lines</span>
          <span>Monaco Editor</span>
        </div>
      </div>
      <div className="min-h-80">
        <Editor
          height="420px"
          defaultLanguage="javascript"
          language="javascript"
          value={code}
          onChange={(value) => onChange(value ?? "")}
          theme="vs-dark"
          options={options}
          onMount={handleEditorMount}
        />
      </div>
    </div>
  );
}
