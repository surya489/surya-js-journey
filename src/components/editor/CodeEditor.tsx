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
  const editorHeight = useMemo(() => {
    const lines = Math.max(code.split("\n").length, 6);
    return `${Math.min(Math.max(lines * 24 + 48, 220), 340)}px`;
  }, [code]);

  const options = useMemo(
    () => ({
      minimap: { enabled: false },
      fontSize: 14,
      lineHeight: 22,
      wordWrap: "on" as const,
      scrollBeyondLastLine: false,
      lineNumbersMinChars: 3,
      roundedSelection: false,
      automaticLayout: true,
      padding: { top: 10, bottom: 10 },
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
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 px-3 py-3 text-[11px] text-stone-400 sm:gap-3 sm:px-4 sm:text-xs">
        <span>{title}</span>
        <div className="flex items-center gap-3">
          <span>{code.split("\n").length} lines</span>
          <span>Monaco Editor</span>
        </div>
      </div>
      <div className="min-h-56">
        <Editor
          height={editorHeight}
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
