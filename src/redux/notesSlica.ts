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
    toggleFavorite(state, { payload }) {
      const note = state.find(note => note.id === payload);
      console.log(note);
      
      if (note) {
        note.isFavorite = !note.isFavorite;
      }
    },
    changeNote(state, { payload }) {
      console.log(payload);
      
      const { id, title, text, color } = payload;
      const note = state.find(note => note.id === id);
      if (note) {
        note.title = title;
        note.text = text;
        note.color = color;
      }
    },
  },
});

export const { addNote, deleteNote, toggleFavorite, changeNote } = notesSlice.actions;
export const notesSliceReducer = notesSlice.reducer;
