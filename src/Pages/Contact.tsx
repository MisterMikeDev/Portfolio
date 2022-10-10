import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useTheme } from "../Hooks/useTheme";
import { RootState } from "../Store";
export default function SocialNetworks() {
    const { Transition, TextColor, BackgroundUIElement } = useTheme();
    const lang = useSelector((state: RootState) => state.LangSlice.lang);
    return (
        <motion.div
            transition={{
                duration: 0.5,
            }}
            initial={{ y: "-100%", opacity: 0, position: "absolute" }}
            animate={{ y: 0, opacity: 1, position: "initial" }}
            exit={{ y: "-100%", opacity: 0, position: "absolute" }}
            className={`${BackgroundUIElement} ${Transition} transition-colors mt-5 w-1/2 rounded-2xl px-5 py-3 mx-auto absolute left-1/4`}
        >
            <p
                className={`text-2xl text-center ${Transition} ${TextColor} font-medium`}
            >
                {lang === "español" ? "Proximamente..." : "Comming soon..."}
            </p>
        </motion.div>
    );
}
