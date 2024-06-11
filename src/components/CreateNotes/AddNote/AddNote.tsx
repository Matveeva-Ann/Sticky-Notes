import { CiSquarePlus } from "react-icons/ci";
import "./AddNote.scss";
import { useDispatch } from "react-redux";
import { Note } from "../../../types/note";
import { addNote } from "../../../redux/notesSlica";
import { useState } from "react";
import ModalCreateNote from "../../Modal/Modals/ModalCreateNote";

interface AddNoteProps {
  noteColor: string;
}

export default function AddNote({ noteColor }: AddNoteProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  function addNewNote(e: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);

    const newNote: Note = {
      color: noteColor,
      text: formData.get("text") ? (formData.get("text") as string) : "Note Text",
      isFavorite: false,
      title: formData.get("title") ? (formData.get("title") as string) : 'Title',
      id: Math.round(Math.random() * 100000),
    };
    dispatch(addNote(newNote));
    setIsModalOpen(false);
  }
  return (
    <>
      <div
        className={`addNote ${noteColor}`}
        onClick={() => setIsModalOpen(true)}
      >
        <CiSquarePlus className="addNote__plus" />
      </div>
      {isModalOpen && <ModalCreateNote closeModal={()=>setIsModalOpen(false)} addNewNote={(e)=>addNewNote(e)}></ModalCreateNote>}
    </>
  );
}
