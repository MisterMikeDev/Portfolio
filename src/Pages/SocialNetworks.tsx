import SocialMediaCard from "../Components/SocialMedia/SocialMediaCard";
import { SocialMedias } from "../Components/SocialMedia/SocialMediaList";
import { useTheme } from "../Hooks/useTheme";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { RootState } from "../Store";
export default function SocialNetworks() {
    const { Transition, TextColor, BackgroundUIElement } = useTheme();
    const lang = useSelector((state: RootState) => state.LangSlice.lang);
    return (
        <motion.div
            transition={{
                duration: 0.75,
            }}
            initial={{ y: "-100%", opacity: 0, position: "absolute" }}
            animate={{ y: 0, opacity: 1, position: "initial" }}
            exit={{ x: "-100%", opacity: 0, position: "absolute" }}
            className="mt-16 cursor-default"
        >
            <motion.section
                transition={{
                    duration: 0.75,
                    delay: 0.1,
                }}
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ x: "-100%", opacity: 0 }}
                className={`${BackgroundUIElement} ${TextColor} ${Transition} font-bold text-center px-5 py-3 rounded-2xl grid w-[65%] mx-auto shadow-xl hover:shadow-2xl`}
            >
                <h1 className="text-4xl my-2">
                    {lang === "español"
                        ? "Sigueme en mis redes sociales 😁"
                        : "Follow me on my social networks 😁"}
                </h1>
                <p className="text-2xl my-2">
                    {lang === "español"
                        ? "Puedes encontrarme en..."
                        : "You can find me at... "}
                </p>
            </motion.section>
            <section className="flex flex-col items-center">
                <main className="py-5 flex flex-wrap items-center">
                    {SocialMedias.map(({ name, link, bg, icon, delay }) => {
                        return (
                            <SocialMediaCard
                                name={name}
                                link={link}
                                bg={bg}
                                icon={icon}
                                delay={delay}
                            />
                        );
                    })}
                </main>
            </section>
        </motion.div>
    );
}
