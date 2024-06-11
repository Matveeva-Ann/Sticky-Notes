import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import "./HiddenCreateNotes.scss";

interface HiddenCreateNotesProps {
  onClick: () => void;
}

export default function HiddenCreateNotes({ onClick }: HiddenCreateNotesProps) {
  return (
    <div className="hiddenCreateNotes" onClick={onClick}>
      <HiOutlineArrowNarrowLeft className="hiddenCreateNotes__arrow" />
      <p className="hiddenCreateNotes__text">Open Create Notes</p>
    </div>
  );
}
