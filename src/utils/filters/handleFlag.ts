import { Note } from "../../types/note";

export function handleFlag(notes: Note[], filterParm: boolean | null) {
  return notes.filter((note) => {
    return filterParm === null ? note : filterParm === note.isFavorite
  });
}
