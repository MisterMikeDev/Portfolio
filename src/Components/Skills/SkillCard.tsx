import { useTheme } from "../../Hooks/useTheme";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { getTimeAgo } from "../../Function";
import { motion } from "framer-motion";
import { Levels } from "./SkillsList";
export default function SkillCard({
    skill,
    icon,
    bgColor,
    experience,
    level,
    description,
    delay,
}: {
    skill: string;
    icon: JSX.Element;
    bgColor: string;
    experience: string;
    level: 1|2|3|4|5
    delay: number;
    description: {
        En: string;
        Es: string;
    };
}) {
    const { BackgroundUIElement2, BackgroundUIElement, Transition, TextColor } = useTheme();
    const lang = useSelector((state: RootState) => state.LangSlice.lang);
    return (
        <motion.div
            transition={{
                duration: 0.5,
                delay: delay,
            }}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            className={`w-[20rem] h-[25rem] mx-auto text-center snap-center rounded-2xl cursor-default transform hover:translate-y-2 hover:shadow-2xl transition ${BackgroundUIElement2} ${Transition}`}
        >
            <div
                className="h-2/5 rounded-t-2xl relative"
                style={{ backgroundColor: `${bgColor}` }}
            >
                <span className={`${BackgroundUIElement} ${TextColor} ${Transition} absolute bottom-2 left-1 px-2 py-1 rounded-2xl font-fold`}>● {Levels[lang === "español" ? "Es" : "En"][level]}</span>
                {icon}
            </div>
            <section
                className={`h-3/5 grid place-content-center ${TextColor} ${Transition}`}
            >
                <span className="italic">
                    {getTimeAgo(
                        lang === "español" ? "es" : "en",
                        Date.parse(experience)
                    )}
                </span>
                <span className="font-bold text-3xl">{skill}</span>
                <span className="text-lg px-4 md:px-2">
                    {lang === "español"
                        ? description.Es
                        : lang === "english" && description.En}
                </span>
            </section>
        </motion.div>
    );
}
