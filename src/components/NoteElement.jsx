import { RiDeleteBinLine } from "react-icons/ri";
import "../App.css";

const NoteElements = ({ note, currentNote, deleteNote, setCurrentNoteId }) => {
  return (
    <>
      <div
        className={`title overflow-hidden w-full cursor-pointer flex justify-between items-center my-2  ${
          note.id === currentNote.id && "selected-note bg-[#4A4E74]"
        } `}
        onClick={() => setCurrentNoteId(note.id)}
      >
        <h4
          className={` font-normal text-[#4A4E74]  ${
            note.id === currentNote.id && "text-white"
          }`}
        >
          {note.body.split("\n")[0]}
        </h4>
        <RiDeleteBinLine
          className="delete-btn"
          onClick={(event) => deleteNote(event, note.id)}
        />
      </div>
    </>
  );
};

export default NoteElements;
