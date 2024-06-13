import Modal from "../Modal";
import "./ModalNote.scss";
import { Note } from "../../../types/note";
import { useState } from "react";
import NoteSquareAll from "../../NoteSquareAll/NoteSquareAll";

interface ModalNoteProps {
  closeModal: () => void;
  addNewNote?: (e: React.FormEvent<HTMLFormElement>) => void;
  noteColor?: string;
  data?: Note;
  updateNote?: (e: React.FormEvent<HTMLFormElement>) => void;
  modalTitle: string;
  setNoteColor: (color:string) => void;
}

export default function ModalNote({
  closeModal,
  addNewNote,
  noteColor = "",
  data,
  updateNote,
  modalTitle,
  setNoteColor,
}: ModalNoteProps) {
  const [title, setTitle] = useState(data ? data.title : "");
  const [text, setText] = useState(data ? data.text : "");
  const [color, setColor] = useState(data ? data.color : noteColor);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  function handleClickSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    addNewNote && addNewNote(e);
    updateNote && updateNote(e);
  }

  function handleClickSquare (color: string) {
    setColor(color);
    setNoteColor(color)
  }

  return (
    <Modal close={closeModal} color={color}>
      <h3 className="modalCreateNote__title">{modalTitle}</h3>
      <form
        className="modalCreateNote__form"
        onSubmit={(e) => handleClickSubmit(e)}
      >
        <label className="modalCreateNote__label" htmlFor="title">
          Title
        </label>
        <input
          className="modalCreateNote__field"
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitleChange}
        />

        <label className="modalCreateNote__label" htmlFor="text">
          Description
        </label>
        <textarea
          className="modalCreateNote__textarea modalCreateNote__field"
          id="text"
          name="text"
          value={text}
          onChange={handleTextChange}
        ></textarea>

      <div className="modalNote__NoteSquareWrapper">
      <NoteSquareAll handleClickSquare={handleClickSquare}></NoteSquareAll>

      </div>

        <button className="modalCreateNote__btnSave" type="submit">
          Save
        </button>
      </form>
    </Modal>
  );
}
