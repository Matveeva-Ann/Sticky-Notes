import "./AllNotesCards.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../types/rootState";
import { useEffect, useState } from "react";
import { Note } from "../../types/note";
import NoteCard from "../NoteCard/NoteCard";
import NoNotes from "./NoNotes";
import { changeNoteChangeOrder } from "../../redux/notesSlice";

interface AllNotesCardsProps {
  isSidebarOpen: boolean;
  isUserToggled: boolean;
}

export default function AllNotesCards({
  isSidebarOpen,
  isUserToggled,
}: AllNotesCardsProps) {
  const [allNotes, setAllNotes] = useState<Note[]>([]);
  const notes: Note[] = useSelector((state: RootState) => state.reducer.notes);
  const filterParams = useSelector((state: RootState) => state.reducer.filter);
  const dispatch = useDispatch();

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

  const moveCard = (dragIndex: number, hoverIndex: number) => {
    const updatedNotes = [...notes];
    const [movedNote] = updatedNotes.splice(dragIndex, 1);
    updatedNotes.splice(hoverIndex, 0, movedNote);
    
    dispatch(changeNoteChangeOrder(updatedNotes));
  };

  return (
    <>
      {allNotes.length !== 0 ? (
        <ul
          className={`allNotesCards ${
            isUserToggled
              ? isSidebarOpen
                ? "allNotes__open"
                : "allNotes__close"
              : ""
          }`}
        >
          {allNotes.map((item: Note, index) => (
            <NoteCard
              data={item}
              key={index}
              index={index}
              moveCard={moveCard}
            ></NoteCard>
          ))}
        </ul>
      ) : (
        <NoNotes></NoNotes>
      )}
    </>
  );
}
