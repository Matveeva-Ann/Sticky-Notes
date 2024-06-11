import AddNote from "./AddNote/AddNote";
import "./CreateNotes.scss";

interface CreateNotesProps {
  setIsShownSection: () => void;
}

export default function CreateNotes({ setIsShownSection }: CreateNotesProps) {
    const colorsArr = ['lightSalad', 'lightBlue', 'lightPeach', 'lightLavender', 'lightPurple', 'lightGray', 'lightPink', 'lightCoral']
  return (
    <ul className="createNotes__list">
        {colorsArr.map((color, item) => (
            <li key={item}>
                 <AddNote noteColor={color} setIsShownSection={setIsShownSection}></AddNote>
            </li>
        ))}
    </ul>
  );
}
