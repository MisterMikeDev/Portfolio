import { useSelector } from "react-redux";
import { RootState } from "../Store";
export const useTheme = () => {
    const theme = useSelector((state: RootState) => state.ThemeSlice.theme);
    let [
        Transition,
        BackgroundColor,
        TextColor,
        IconColor,
        BackgroundUIElement,
        BackgroundUIElement2,
        BorderNav,
        Shadow0,
        Shadow1,
        Shadow2,
    ] = ["transition duration-500", "", "", "", "", "", "", "", "", ""];
    if (theme === "light") {
        BackgroundColor = "bg-gray-200";
        TextColor = "text-slate-800";
        IconColor = "text-black";
        BackgroundUIElement = "bg-gray-300";
        BackgroundUIElement2 = "bg-gray-400";
        BorderNav = "border-gray-400";
        Shadow0 = "shadow-rounded_light_0";
        Shadow1 = "shadow-rounded_light_1";
        Shadow2 = "shadow-rounded_light_2";
    } else if (theme === "dark") {
        BackgroundColor = "bg-slate-800";
        TextColor = "text-white";
        IconColor = "text-white";
        BackgroundUIElement = "bg-slate-700";
        BackgroundUIElement2 = "bg-slate-600";
        BorderNav = "border-gray-900";
        Shadow0 = "shadow-rounded_dark_0";
        Shadow1 = "shadow-rounded_dark_1";
        Shadow2 = "shadow-rounded_dark_2";
    }
    return {
        theme,
        Transition,
        BackgroundColor,
        TextColor,
        IconColor,
        BackgroundUIElement,
        BackgroundUIElement2,
        BorderNav,
        Shadow0,
        Shadow1,
        Shadow2,
    };
};
