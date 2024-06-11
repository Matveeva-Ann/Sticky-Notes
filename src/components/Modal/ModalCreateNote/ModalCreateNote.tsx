import { RxCross1 } from "react-icons/rx";
import Modal from "../Modal";
import "./ModalCreateNote.scss";

interface ModalCreateNoteProps {
  closeModal: () => void;
  addNewNote: (e: React.FormEvent<HTMLFormElement>) => void;
  noteColor: string;
}

export default function ModalCreateNote({
  closeModal,
  addNewNote,
  noteColor,
}: ModalCreateNoteProps) {
  return (
    <Modal close={closeModal}>
   
      <div className={`modalCreateNote ${noteColor}`}>
      <button className="modal__btnClose" type="button" onClick={closeModal}>
        <RxCross1 />
      </button>
        <h3 className="modalCreateNote__title">Create note</h3>
        <form className="modalCreateNote__form" onSubmit={addNewNote}>
          <label className="modalCreateNote__label" htmlFor="title">
            Title
          </label>
          <input
            className="modalCreateNote__field"
            type="text"
            name="title"
            id="title"
          />

          <label className="modalCreateNote__label" htmlFor="text">
            Description
          </label>
          <textarea
            className="modalCreateNote__textarea modalCreateNote__field"
            id="text"
            name="text"
          ></textarea>

          <button className="modalCreateNote__btn" type="submit">
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
}
