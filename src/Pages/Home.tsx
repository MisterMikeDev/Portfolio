import { useTheme } from "../Hooks/useTheme";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { RootState } from "../Store";
export default function Home() {
    const { Transition, TextColor, BackgroundUIElement } = useTheme();
    const lang = useSelector((state: RootState) => state.LangSlice.lang);
    return (
        <motion.main
            transition={{
                duration: 0.75,
            }}
            initial={{ opacity: 0, position: "absolute" }}
            animate={{ opacity: 1, position: "initial" }}
            exit={{ opacity: 0, position: "absolute" }}
        >
            <motion.div
                transition={{
                    duration: 0.75,
                }}
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ x: "-100%" }}
                className="container mt-7 mx-auto flex flex-wrap items-center justify-center left-12"
            >
                <div className="px-10 py-8">
                    <h1
                        className={`${Transition} ${TextColor} text-center text-5xl font-bold`}
                    >
                        {lang === "english" ? "Hello there, I am" : "Hola, soy"}
                    </h1>
                    <span className="block text-white text-center text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
                        MrMikeDev
                    </span>
                    <img
                        className="mx-auto w-40 h-40"
                        src="/HandWave.gif"
                        alt="Holaaaa"
                        loading="lazy"
                    />
                </div>
                <div className="px-10 py-8 relative">
                    <img
                        className={`mx-auto w-80 h-80 ${Transition} ${BackgroundUIElement} border-2 border-black rounded-full shadow-2xl`}
                        src="/MrMikeDev.png"
                        alt="MrMikeDev"
                        loading="lazy"
                    />
                    <span
                        className={`w-20 h-20 absolute grid place-content-center bottom-8 right-14 text-5xl ${Transition} ${BackgroundUIElement} border-2 border-black rounded-full shadow-2xl`}
                    >
                        🌸
                    </span>
                </div>
            </motion.div>
            <motion.div
                transition={{
                    duration: 1.5,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, x: "-100%" }}
                className="left-[10rem]"
            >
                <section className="md:w-2/5 w-3/4 mx-auto my-8">
                    <motion.div
                        transition={{
                            delay: 0.5,
                            duration: 0.5,
                            type: "tween",
                        }}
                        initial={{ y: "-100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ x: "-100%", opacity: 0 }}
                        className={`${BackgroundUIElement} ${Transition} mt-5 w-full rounded-2xl px-5 py-3 mx-auto`}
                    >
                        <p
                            className={`text-2xl text-center ${Transition} ${TextColor} font-medium`}
                        >
                            Hola, soy{" "}
                            <span className="font-bold">
                                Diego Emmanuel Rodriguez Ruvalcaba
                            </span>{" "}
                            pero me puedes decir{" "}
                            <span className="font-bold">MrMikeDev</span>.
                        </p>
                    </motion.div>
                </section>
            </motion.div>
        </motion.main>
    );
}
