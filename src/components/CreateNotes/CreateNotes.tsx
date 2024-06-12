import { useState } from "react";
import NoteSquareAll from "../NoteSquareAll/NoteSquareAll";
import "./CreateNotes.scss";
import ModalNote from "../Modal/ModalNote/ModalNote";
import { addNote } from "../../redux/notesSlica";
import { useDispatch } from "react-redux";
import { Note } from "../../types/note";

interface CreateNotesProps {
  setIsShownSection: () => void;
}

export default function CreateNotes({ setIsShownSection }: CreateNotesProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [noteColor, setNoteColor] = useState('');
  
  const dispatch = useDispatch();

  function addNewNote(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);

    const newNote: Note = {
      color: noteColor,
      text: formData.get("text")
        ? (formData.get("text") as string)
        : "Note Text",
      isFavorite: false,
      title: formData.get("title")
        ? (formData.get("title") as string)
        : "Title",
      id: Math.round(Math.random() * 100000),
    };
    dispatch(addNote(newNote));
    setIsModalOpen(false);
    setIsShownSection();
  }

  function handleClickSquare (color: string) {
    setIsModalOpen(true);
    setNoteColor(color);    
  }

  return (
    <>
      <NoteSquareAll
        handleClickSquare={handleClickSquare}
      ></NoteSquareAll>
      {isModalOpen && (
        <ModalNote
          noteColor={noteColor}
          setNoteColor={setNoteColor}
          modalTitle="Create note"
          closeModal={() => setIsModalOpen(false)}
          addNewNote={(e) => addNewNote(e)}
        ></ModalNote>
      )}
    </>
  );
}
