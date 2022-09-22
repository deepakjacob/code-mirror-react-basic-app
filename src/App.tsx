import { FC } from "react";
import useCodeMirror from "./useCodeMirror";

interface CodeMirrorProps {
  extensions: [];
}

const CodeEditor = ({ extensions }: CodeMirrorProps) => {
  const { ref } = useCodeMirror(extensions);
  return <div ref={ref} />;
}


interface AppProps {

}
const App: FC = (_: AppProps) => <CodeEditor extensions={[]} />;

export default App;