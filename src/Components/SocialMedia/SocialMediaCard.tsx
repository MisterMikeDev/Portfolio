import { useTheme } from "../../Hooks/useTheme";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
import { motion } from "framer-motion";
export default function SocialMediaCard({
    name,
    link,
    bg,
    icon,
    delay,
}: {
    name: string;
    link: string;
    bg: string;
    icon: JSX.Element;
    delay: number;
}) {
    const { BackgroundUIElement2, Transition, TextColor } = useTheme();
    const lang = useSelector((state: RootState) => state.LangSlice.lang);
    return (
        <motion.article
            transition={{
                duration: 0.75,
                delay: delay,
            }}
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            className="cursor-default mx-auto my-5"
        >
            <h1
                className={`text-4xl text-center ${Transition} ${TextColor} font-bold px-1`}
            >
                {name}
            </h1>
            <a href={link} target="blank_">
                <div
                    className={`w-[28rem] h-[14rem] grid place-content-center px-10 py-8 mx-auto mt-4 text-center rounded-2xl md:transform md:hover:translate-y-2 shadow-xl hover:shadow-2xl transition ${BackgroundUIElement2} ${Transition}`}
                    style={{ backgroundColor: `${bg}` }}
                >
                    {icon}
                </div>
            </a>
        </motion.article>
    );
}
