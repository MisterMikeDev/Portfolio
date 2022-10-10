import { setTheme } from "../Features/ThemeSlice";
import { useDispatch } from "react-redux";
import { setLang } from "../Features/LangSlice";
export const useLocalConfigs = () => {
    const localLang = globalThis.localStorage.getItem("lang");
    const localSession = globalThis.localStorage.getItem("theme");
    const theme = localSession ? `${localSession}` : "light";
    const lang = localSession ? `${localLang}` : "español";
    const dispatch = useDispatch();
    dispatch(setTheme(theme));
    dispatch(setLang(lang));
};
