import NoteElements from "./NoteElement";
import "../App.css";

const Sidebar = (props) => {
  return (
    <section className="pane sidebar  w-[20%] h-[100vh] overflow-y-auto ">
      <div className="sidebar--header  flex justify-between items-center">
        <h3 className="text-[1.75rem]">Notes</h3>
        <button
          className="cursor-pointer bg-[#4a4e74] text-white rounded-sm h-7 w-7 new-note "
          onClick={props.newNote}
        >
          +
        </button>
      </div>
      {props.notes.map((note) => (
        <NoteElements
          note={note}
          key={note.id}
          deleteNote={props.deleteNote}
          setCurrentNoteId={props.setCurrentNoteId}
          currentNote={props.currentNote}
        />
      ))}
    </section>
  );
};

export default Sidebar;

// {
//   newNote,
//   notes,
//   deleteNote,
//   setCurrentNoteId,
//   currentNote,
// }
