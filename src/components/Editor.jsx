import ReactMde from "react-mde";
import Showdown from "showdown";
import { useState } from "react";
import "react-mde/lib/styles/css/react-mde-all.css";

const Editor = ({ currentNote, updateNote }) => {
  const [selectedTab, setSelectedTab] = useState("write");

  const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true,
  });

  return (
    <section className="pane editor  overflow-y-auto w-[80%] h-[100vh]">
      <ReactMde
        value={currentNote.body}
        onChange={updateNote}
        selectedTab={selectedTab}
        onTabChange={setSelectedTab}
        generateMarkdownPreview={(markdown) => async () =>
          converter.makeHtml(markdown)}
        minEditorHeight={80}
        heightUnits="vh"
      />
    </section>
  );
};

export default Editor;
