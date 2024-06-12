import { Note } from "./note";

export interface FilterState {
  colors: Array<string>,
  isFavorite: boolean | null 
}
export interface RootState {
    reducer: {
      background: string;
      notes: Note[];
      filter: FilterState;
    };
  }