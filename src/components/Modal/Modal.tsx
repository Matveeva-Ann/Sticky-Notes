import { createPortal } from "react-dom";
import "./Modal.scss";
import { ReactNode } from "react";

interface ModalProps {
  children: ReactNode;
  close: () => void;
}

export default function Modal({ children, close }: ModalProps) {
  const modalRoot = document.getElementById("modal-root");

  function closeModal(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.target === e.currentTarget && close();
  }

  return createPortal(
    <div className="modalBG" onClick={(e) => closeModal(e)}>
      <div className="modalContent">
        {children}
      </div>
    </div>,
    modalRoot as Element
  );
}
