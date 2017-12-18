import React from "react";

const NoteList = props => {
  const mappedNoteArray = props.noteArray.map(note => (
    <button
      onClick={props.singleSelect}
      name={note.name}
      id={note.id}
      key={<note className="id" />}
      description={note.description}
    >
      {note.name}
    </button>
  ));
  return <div> {mappedNoteArray} </div>;
};

export default NoteList;
