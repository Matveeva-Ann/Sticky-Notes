import { Note } from "../../types/note";

export function findInArray(notes: Note[], filterArr: string[]) {
  return notes.filter((note: Note) =>
    filterArr.length !== 0
      ? (filterArr as string[]).includes(note.color)
      : notes
  );
}
