import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./components/rootReducer";

export const setupStore = (initialState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });
};
