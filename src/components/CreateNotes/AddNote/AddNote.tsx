import { CiSquarePlus } from "react-icons/ci";
import "./AddNote.scss";
import { useDispatch } from "react-redux";
import { Note } from "../../../types/note";
import { addNote } from "../../../redux/notesSlica";
import { useState } from "react";
import ModalCreateNote from "../../Modal/ModalCreateNote/ModalCreateNote";

interface AddNoteProps {
  noteColor: string;
  setIsShownSection: ()=>void;
}

export default function AddNote({ noteColor, setIsShownSection }: AddNoteProps) {
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
    setIsShownSection();
  }
  return (
    <>
      <div
        className={`addNote ${noteColor}`}
        onClick={() => setIsModalOpen(true)}
      >
        <CiSquarePlus className="addNote__plus" />
      </div>
      {isModalOpen && <ModalCreateNote noteColor={noteColor} closeModal={()=>setIsModalOpen(false)} addNewNote={(e)=>addNewNote(e)}></ModalCreateNote>}
    </>
  );
}
