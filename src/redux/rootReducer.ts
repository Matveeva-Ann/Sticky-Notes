import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import { backgroundReducer } from "./backgroundSlice";
import { notesSliceReducer } from "./notesSlica";

const persistConfig = {
  key: "root",
  storage,
};

export const rootReducer = combineReducers({
  background: backgroundReducer,
  notes: notesSliceReducer,
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);
