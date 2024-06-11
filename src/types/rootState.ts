import { Note } from "./note";

export interface RootState {
    reducer: {
      background: string;
      notes: Note[];
    };
  }