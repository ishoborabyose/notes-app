import NoteElements from "./NoteElement";
import "../App.css";

const Sidebar = ({
  newNote,
  notes,
  deleteNote,
  setCurrentNoteId,
  currentNote,
}) => {
  return (
    <section className="pane sidebar  w-[20%] h-[100vh] overflow-y-auto ">
      <div className="sidebar--header  flex justify-between items-center">
        <h3 className="text-[1.75rem]">Notes</h3>
        <button
          className="cursor-pointer bg-[#4a4e74] text-white rounded-sm h-7 w-7 new-note "
          onClick={newNote}
        >
          +
        </button>
      </div>
      {notes.map((note) => (
        <NoteElements
          note={note}
          key={note.id}
          deleteNote={deleteNote}
          setCurrentNoteId={setCurrentNoteId}
          currentNote={currentNote}
        />
      ))}
    </section>
  );
};

export default Sidebar;
