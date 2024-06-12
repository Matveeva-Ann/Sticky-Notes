import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { backgroundReducer } from "./backgroundSlice";
import { notesSliceReducer } from "./notesSlica";
import { filterDataReducer } from "./filterDataSlice";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  background: backgroundReducer,
  notes: notesSliceReducer,
  filter: filterDataReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
