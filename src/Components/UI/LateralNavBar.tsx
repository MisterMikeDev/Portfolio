import IonIcon from "@reacticons/ionicons";
import toast from "react-hot-toast";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../Features/ThemeSlice";
import { toggleLang } from "../../Features/LangSlice";
import { useTheme } from "../../Hooks/useTheme";
import { RootState } from "../../Store";
export default function LateralNavBar() {
    const [open, setOpen] = useState(true);
    const lang = useSelector((state: RootState) => state.LangSlice.lang);
    const dispatch = useDispatch();
    const {
        theme,
        BackgroundUIElement,
        BackgroundUIElement2,
        Transition,
        TextColor,
    } = useTheme();
    return (
        <aside
            className={`${Transition} fixed z-10 flex items-center top-2 right-2 transform ${
                open && "translate-x-[4.5rem]"
            }`}
        >
            {open ? (
                <IonIcon
                    className="w-16 h-16 rounded-full text-5xl text-center place-content-center text-purple-600 cursor-pointer hover:text-purple-800"
                    name="chevron-forward-circle"
                    onClick={() => setOpen(!open)}
                />
            ) : (
                <IonIcon
                    className="w-16 h-16 rounded-full text-5xl text-center place-content-center text-purple-600 cursor-pointer hover:text-purple-800"
                    name="chevron-back-circle"
                    onClick={() => setOpen(!open)}
                />
            )}
            <section
                className={`${BackgroundUIElement2} rounded-xl p-2 flex flex-col gap-2 transition-all ${Transition}`}
            >
                <button
                    onClick={() => dispatch(toggleTheme())}
                    className={`w-12 h-12 rounded-full text-3xl text-center border-2 place-content-center border-gray-700 text-purple-600 ${Transition} ${BackgroundUIElement} filter hover:brightness-90 hover:text-purple-800`}
                >
                    {theme === "light" && <IonIcon name="sunny" />}
                    {theme === "dark" && <IonIcon name="moon" />}
                </button>
                <button
                    className={`
                 w-12 h-12 rounded-full text-3xl text-center border-2 place-content-center top-16 right-2 border-gray-700 text-purple-600 ${Transition} ${BackgroundUIElement} filter hover:brightness-90 hover:text-purple-800
            `}
                >
                    <IonIcon
                        name="language"
                        onClick={() => {
                            dispatch(toggleLang());
                            toast.custom((t) => (
                                <div
                                    className={`${
                                        t.visible
                                            ? "animate-enter"
                                            : "animate-leave"
                                    } max-w-xs w-full ${BackgroundUIElement} ${Transition} ${TextColor} shadow-2xl rounded-xl cursor-default flex`}
                                >
                                    <div className="flex-1 w-3/4 p-4">
                                        <div className="flex items-center justify-center">
                                            <p
                                                className={`text-sm font-medium ${TextColor}`}
                                            >
                                                {lang === "english"
                                                    ? "Se cambio el lenguaje a Español."
                                                    : "Language set on English."}
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="w-1/4 flex items-center justify-center text-center"
                                    >
                                        <button
                                            onClick={() => toast.dismiss(t.id)}
                                            className={`p-4 text-sm ${TextColor} filter hover:brightness-75`}
                                        >
                                            {lang === "english"
                                                ? "Cerrar"
                                                : "Close"}
                                        </button>
                                    </div>
                                    
                                </div>
                            ));
                        }}
                    />
                </button>
            </section>
        </aside>
    );
}
