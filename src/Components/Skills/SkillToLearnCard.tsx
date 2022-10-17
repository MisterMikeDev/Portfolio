import { useTheme } from "../../Hooks/useTheme";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { motion } from "framer-motion";
export default function SkillCardToLearn({
    skill,
    icon,
    bgColor,
    comment,
    delay,
}: {
    skill: string;
    icon: JSX.Element;
    bgColor: string;
    delay: number;
    comment: {
        En: string;
        Es: string;
    };
}) {
    const { BackgroundUIElement2, Transition, TextColor } = useTheme();
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
            className={`w-[20rem] h-[25rem] mx-auto text-center snap-center rounded-2xl cursor-default md:transform md:hover:translate-y-2 hover:shadow-2xl transition ${BackgroundUIElement2} ${Transition}`}
        >
            <div
                className="h-2/5 rounded-t-2xl"
                style={{ backgroundColor: `${bgColor}` }}
            >
                {icon}
            </div>
            <section
                className={`h-3/5 grid place-content-center ${TextColor} ${Transition}`}
            >
                <span className="font-bold text-3xl">{skill}</span>
                <span className="text-lg px-4 md:px-2">
                    {lang === "español"
                        ? comment.Es
                        : lang === "english" && comment.En}
                </span>
            </section>
        </motion.div>
    );
}
