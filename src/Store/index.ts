import { configureStore } from "@reduxjs/toolkit";
import ThemeSlice from "../Features/ThemeSlice";
import LangSlice from "../Features/LangSlice";

export const store = configureStore({
    reducer: {
        ThemeSlice,
        LangSlice
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;