import { motion } from "framer-motion";
import { useTheme } from "../Hooks/useTheme";
import { useSelector } from "react-redux";
import { RootState } from "../Store";
import SkillCard from "../Components/Skills/SkillCard";
import SkillToLearnCard from "../Components/Skills/SkillToLearnCard";
import {
    Skills as SkillsThatKnow,
    SkillsToLearn,
} from "../Components/Skills/SkillsList";

export default function Skills() {
    const { BackgroundUIElement, Transition, TextColor } = useTheme();
    const lang = useSelector((state: RootState) => state.LangSlice.lang);
    return (
        <motion.div
            transition={{
                duration: 0.75,
            }}
            initial={{ y: "-100%", opacity: 0, position: "absolute" }}
            animate={{ y: 0, opacity: 1, position: "initial" }}
            exit={{ x: "-100%", opacity: 0, position: "absolute" }}
            className="left-12 my-5"
        >
            <motion.div
                transition={{
                    duration: 0.75,
                }}
                initial={{ y: "-100%", opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                exit={{ x: "-100%", opacity: 0}}
                className={`${BackgroundUIElement} ${Transition} mt-16 w-3/4 rounded-2xl px-5 py-3 mx-auto`}
            >
                <motion.p
                    transition={{
                        delay: 0.5,
                        duration: 0.75,
                    }}
                    initial={{ y: "-80%", scale: 0, opacity: 0 }}
                    animate={{ y: 0, scale: 1, opacity: 1 }}
                    exit={{ x: "-80%", scale: 0, opacity: 0 }}
                    className={`text-md md:text-4xl text-center font-semibold ${TextColor} ${Transition}`}
                >
                    {lang === "español"
                        ? "Mis habilidades."
                        : "My skills"}
                </motion.p>
            </motion.div>
            <motion.div
                transition={{
                    duration: 0.75,
                }}
                initial={{ y: "-80%", opacity: 0}}
                animate={{ y: 0, opacity: 1}}
                exit={{ x: "-100%", opacity: 0}}
                className={`${BackgroundUIElement} ${Transition} mt-16 w-3/4 rounded-2xl px-5 py-3 mx-auto`}
            >
                <motion.p
                    transition={{
                        delay: 0.5,
                        duration: 0.75,
                    }}
                    initial={{ x: "80%", scale: 0, opacity: 0 }}
                    animate={{ x: 0, scale: 1, opacity: 1 }}
                    exit={{ x: "-80%", scale: 0, opacity: 0 }}
                    className={`text-md md:text-2xl text-center font-semibold ${TextColor} ${Transition}`}
                >
                    {lang === "español"
                        ? "A lo largo del tiempo que llevo metido en este mundo de la programación he llegado a adquirir algo de conocimiento con distintas tecnologías que me han permitido meterme más a fondo en el desarrollo frontend y backend."
                        : "Throughout the time that I have been involved in this world of programming, I have acquired some knowledge with different technologies that have allowed me to delve deeper into frontend and backend development."}
                </motion.p>
            </motion.div>
            <div
                className="mt-16 rounded-xl md:w-full w-[90%] mx-auto"
            >
                <section>
                    <h1
                        className={`font-bold md:text-5xl text-3xl py-4 text-center ${Transition} ${TextColor}`}
                    >
                        {lang === "español"
                            ? "Tecnologías que uso:"
                            : "Technologies I use:"}
                    </h1>
                    <div className="flex flex-col md:items-center items-start md:overflow-auto overflow-x-scroll snap-x snap-mandatory">
                        <div className="md:container p-5 flex md:flex-wrap md:items-start gap-5">
                            {SkillsThatKnow.map((skill, i) => {
                                return (
                                    <SkillCard
                                        key={skill.skill}
                                        skill={skill.skill}
                                        icon={skill.icon}
                                        bgColor={skill.bgColor}
                                        experience={skill.experience}
                                        level={skill.level}
                                        description={skill.description}
                                        delay={i/8}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
                <section>
                    <h1
                        className={`font-bold md:text-5xl text-3xl py-4 text-center ${Transition} ${TextColor}`}
                    >
                        {lang === "español"
                            ? "Tecnologias que quiero aprender:"
                            : "Technologies I want to learn:"}
                    </h1>
                    <div className="flex flex-col md:items-center items-start md:overflow-auto overflow-x-scroll snap-x snap-mandatory">
                        <div className="md:container p-5 flex md:flex-wrap md:items-start gap-5">
                            {SkillsToLearn.map((skill, i) => {
                                return (
                                    <SkillToLearnCard
                                        key={skill.skill}
                                        skill={skill.skill}
                                        icon={skill.icon}
                                        bgColor={skill.bgColor}
                                        comment={skill.comment}
                                        delay={i/8}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </motion.div>
    );
}
