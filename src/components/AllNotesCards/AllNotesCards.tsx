import "./AllNotesCards.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../types/rootState";
import { useEffect, useState } from "react";
import { Note } from "../../types/note";
import NoteCard from "../NoteCard/NoteCard";
import NoNotes from "./NoNotes";

interface AllNotesCardsProps {
  isSidebarOpen: boolean;
  isUserToggled: boolean;
}

export default function AllNotesCards({isSidebarOpen, isUserToggled }: AllNotesCardsProps) {
  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const notes: Note[] = useSelector((state: RootState) => state.reducer.notes);
  const filterParams = useSelector((state: RootState) => state.reducer.filter);

  useEffect(() => {    
    setAllNotes(notes);
  }, [notes]);

  useEffect(() => {
    if (notes.length !== 0) {
      const filteredColorNotes = notes.filter((note: Note) =>
        filterParams.colors.length !== 0
          ? (filterParams.colors as string[]).includes(note.color)
          : note
      );
      const filteredFavoriteNote = filteredColorNotes.filter((note) => {
        if (filterParams.isFavorite === null) {
          return note;
        } else {
          return filterParams.isFavorite === note.isFavorite;
        }
      });

      setAllNotes(filteredFavoriteNote);
    }
  }, [filterParams, notes]);

  return (
    <div className={`allNotesCards ${isUserToggled ? (isSidebarOpen ? 'allNotes__open' : 'allNotes__close') : ''}`}>
      {allNotes.length !== 0 ? (
        allNotes.map((item: Note, index) => (
          <NoteCard data={item} key={index}></NoteCard>
        ))
      ) : (
        <NoNotes></NoNotes>
      )}
    </div>
  );
}
