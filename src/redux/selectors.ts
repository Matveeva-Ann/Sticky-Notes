import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../types/rootState";
import { findInArray } from "../utils/filters/findInArray";
import { handleFlag } from "../utils/filters/handleFlag";

export const filterSelector = (state: RootState) => state.reducer.filter;
export const notesSelector = (state: RootState) => state.reducer.notes;

export const selectNotesByFilter = createSelector(
  [notesSelector, filterSelector],
  (notes, filter) => {
    const filteredColorNotes = findInArray(notes, filter.colors);
    return handleFlag(filteredColorNotes, filter.isFavorite);
  }
);
