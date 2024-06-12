import { colorsArr } from "../CreateNotes/colorsArr";
import NoteSquare from "../NoteSquare/NoteSquare";
import "./NoteSquareAll.scss";

interface NoteSquareAllProps {
  handleClickSquare: (color: string) => void;
}

export default function NoteSquareAll({
  handleClickSquare,
}: NoteSquareAllProps) {
  return (
    <ul className="createNotes__list">
      {colorsArr.map((color, item) => (
        <li key={item}>
          <NoteSquare
            noteColor={color}
            handleClickSquare={() => handleClickSquare(color)}
          ></NoteSquare>
        </li>
      ))}
    </ul>
  );
}
