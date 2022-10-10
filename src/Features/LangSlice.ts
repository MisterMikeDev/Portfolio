import { createSlice } from "@reduxjs/toolkit";
const initialState: {
    lang: keyof {
        español: string;
        english: string;
    };
} = {
    lang: "español",
};

export const counterSlice = createSlice({
    name: "lang",
    initialState,
    reducers: {
        setLang: (state, action) => {
            state.lang = action.payload;
            globalThis.localStorage.setItem("lang", action.payload);
        },
        toggleLang: (state) => {
            if (state.lang === "español") {
                state.lang = "english";
            } else {
                state.lang = "español";
            }
            globalThis.localStorage.setItem("lang", state.lang);
        },
    },
});

export const { setLang, toggleLang } = counterSlice.actions;

export default counterSlice.reducer;
