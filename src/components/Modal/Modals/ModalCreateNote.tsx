import Modal from "../Modal";

interface ModalCreateNoteProps {
  closeModal: () => void;
  addNewNote: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function ModalCreateNote({ closeModal, addNewNote }: ModalCreateNoteProps) {
  return (
    <Modal close={closeModal}>
      <h3>Create note</h3>
      <form onSubmit={addNewNote}>
        <label htmlFor="title">
          Title
          <input type="text" name="title" id='title' />
        </label>
        <label htmlFor="text">
          Description
          <textarea id="text" name="text"></textarea>
        </label>
        <button type="submit">Save</button>
      </form>
    </Modal>
  );
}
