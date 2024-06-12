import { Note } from "./note";

interface FilterState {
  colors: [],
  isFavorite: boolean | null 
}
export interface RootState {
    reducer: {
      background: string;
      notes: Note[];
      filter: FilterState;
    };
  }