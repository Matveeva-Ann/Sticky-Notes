import "./AllNotesCards.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../types/rootState";
import { useEffect, useState } from "react";
import { Note } from "../../types/note";
import NoteCard from "../NoteCard/NoteCard";

export default function AllNotesCards() {
  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const notes: Note[] = useSelector((state: RootState) => state.reducer.notes);

  useEffect(() => {
    setAllNotes(notes);
    console.log(notes);
    
  }, [notes]);

  return (
    <div className="allNotesCards">
      {allNotes.length !== 0 &&
        allNotes.map((item: Note, index) => (
          <NoteCard data={item} key={index}></NoteCard>
        ))}
    </div>
  );
}
