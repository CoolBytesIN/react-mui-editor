import React from "react";
import { MaterialEditor } from "./lib";


function App() {
  // State to store editor html content
  const [editorContent, setEditorContent] = React.useState(undefined);

  return (
    <MaterialEditor
      editorContent={editorContent}
      setEditorContent={setEditorContent}
      placeholder="Time to get some (beep) done..." />
  );
};

export default App;