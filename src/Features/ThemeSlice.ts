import { createSlice } from "@reduxjs/toolkit";
const initialState: {
    theme: keyof {
        light: string;
        dark: string;
    };
} = {
    theme: "light",
};

export const counterSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
            globalThis.localStorage.setItem("theme", action.payload);
        },
        toggleTheme: (state) => {
            if (state.theme === "light") {
                state.theme = "dark";
            } else {
                state.theme = "light";
            }
            globalThis.localStorage.setItem("theme", state.theme);
        },
    },
});

export const { setTheme, toggleTheme } = counterSlice.actions;

export default counterSlice.reducer;
