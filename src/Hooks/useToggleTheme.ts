import { toggleTheme } from "../Features/ThemeSlice";
import { useDispatch } from "react-redux";
export const useToggleTheme = () => {
    const dispatch = useDispatch();
    dispatch(toggleTheme());
};
