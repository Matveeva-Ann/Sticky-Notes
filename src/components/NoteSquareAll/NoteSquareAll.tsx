import { colorsArr } from "../../utils/colorsArr";
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
            noteColor={color.value}
            handleClickSquare={() => handleClickSquare(color.value)}
          ></NoteSquare>
        </li>
      ))}
    </ul>
  );
}
