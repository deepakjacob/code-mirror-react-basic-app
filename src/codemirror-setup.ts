import { bracketMatching, defaultHighlightStyle, foldGutter, foldKeymap, indentOnInput, syntaxHighlighting } from "@codemirror/language";
import { EditorState, Extension } from "@codemirror/state";
import { crosshairCursor, drawSelection, dropCursor, highlightActiveLine, highlightActiveLineGutter, highlightSpecialChars, keymap, lineNumbers, rectangularSelection } from "@codemirror/view";
import { defaultKeymap, history, historyKeymap } from "@codemirror/commands";
import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap } from "@codemirror/autocomplete";
import { highlightSelectionMatches, searchKeymap } from "@codemirror/search";
import { lintKeymap } from "@codemirror/lint";
import { javascript } from "@codemirror/lang-javascript";

export const editorSetup: Extension = (() => [
  lineNumbers(),
  highlightActiveLineGutter(),
  highlightSpecialChars(),
  history(),
  foldGutter(),
  drawSelection(),
  dropCursor(),
  EditorState.allowMultipleSelections.of(true),
  indentOnInput(),
  syntaxHighlighting(defaultHighlightStyle, { fallback: true }),
  bracketMatching(),
  closeBrackets(),
  autocompletion(),
  rectangularSelection(),
  crosshairCursor(),
  highlightActiveLine(),
  highlightSelectionMatches(),
  javascript(),
  keymap.of([
    ...closeBracketsKeymap,
    ...defaultKeymap,
    ...searchKeymap,
    ...historyKeymap,
    ...foldKeymap,
    ...completionKeymap,
    ...lintKeymap,
  ])
])();

export { EditorView } from "@codemirror/view";
export { EditorState } from "@codemirror/state";
export type { Extension } from "@codemirror/state";
