import { useState, useEffect, useCallback } from "react";
import { EditorView, EditorState, Extension, editorSetup } from "./codemirror-setup"


export default function useCodeMirror(_: Extension[]) {
  const [element, setElement] = useState<HTMLElement>();

  const ref = useCallback((node: HTMLElement | null) => {
    if (!node) return;

    setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const view = new EditorView({
      state: EditorState.create({
        extensions: [
          editorSetup
        ]
      }),
      parent: element
    });

    return () => view?.destroy();
  }, [element]);

  return { ref };
}