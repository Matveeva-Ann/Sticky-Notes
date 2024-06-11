import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../types/note";

export const initialState: Note[] = [];

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, { payload }) {
      return [...state, payload];
    },
    deleteNote(state, { payload }) {
      const updatedNotes = state.filter((note) => note.id !== payload);      
      return updatedNotes;
    },
  },
});

export const { addNote, deleteNote } = notesSlice.actions;
export const notesSliceReducer = notesSlice.reducer;
