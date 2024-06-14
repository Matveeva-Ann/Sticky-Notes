import "./AllNotesCards.scss";
import { useSelector } from "react-redux";
import { Note } from "../../types/note";
import NoteCard from "../NoteCard/NoteCard";
import NoNotes from "./NoNotes";
import { selectNotesByFilter } from "../../redux/selectors";

interface AllNotesCardsProps {
  isSidebarOpen: boolean;
  isUserToggled: boolean;
}

export default function AllNotesCards({
  isSidebarOpen,
  isUserToggled,
}: AllNotesCardsProps) {
  const visibleNotes = useSelector(selectNotesByFilter);

  return (
    <>
      {visibleNotes && visibleNotes.length !== 0 ? (
        <ul
          className={`allNotesCards ${
            isUserToggled
              ? isSidebarOpen
                ? "allNotes__open"
                : "allNotes__close"
              : ""
          }`}
        >
          {visibleNotes.map((item: Note, index) => (
            <NoteCard data={item} key={index}></NoteCard>
          ))}
        </ul>
      ) : (
        <NoNotes></NoNotes>
      )}
    </>
  );
}
