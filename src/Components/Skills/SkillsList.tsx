import HTML from "../Icons/HTML";
import CSS from "../Icons/CSS";
import JavaScript from "../Icons/JavaScript";
import NodeJS from "../Icons/NodeJS";
import React from "../Icons/React";
import Sass from "../Icons/Sass";
import TailwindCSS from "../Icons/TailwindCSS";
import Boostrap from "../Icons/Boostrap";
import Express from "../Icons/Express";
import TypeScript from "../Icons/TypeScript";
import MongoDB from "../Icons/MongoDB";
import Vite from "../Icons/Vite";
import Photoshop from "../Icons/Photoshop";
import PostgreSQL from "../Icons/PostgreSQL";
import Premiere from "../Icons/Premiere";
import Redux from "../Icons/Redux";
import Vue from "../Icons/Vue";
import NuxtJS from "../Icons/NuxtJS";
import NextJS from "../Icons/NextJS";
import Angular from "../Icons/Angular";

type SkillsType = Array<{
    skill: string;
    icon: JSX.Element;
    bgColor: string;
    experience: string;
    level: 1 | 2 | 3 | 4 | 5;
    description: {
        Es: string;
        En: string;
    };
}>;

type SkillToLearnType = Array<{
    skill: string;
    icon: JSX.Element;
    bgColor: string;
    comment: { Es: string; En: string };
}>;

export const Levels = {
    En: {
        1: "In learning",
        2: "Low",
        3: "Regular",
        4: "Good",
        5: "Advanced",
    },
    Es: {
        1: "En aprendizaje",
        2: "Bajo",
        3: "Regular",
        4: "Bueno",
        5: "Avanzado",
    },
};

export const Skills: SkillsType = [
    {
        skill: "HTML",
        icon: <HTML />,
        bgColor: "#96331a",
        experience: "2021/10/16",
        level: 5,
        description: {
            Es: "No tengo mucho que decir de HTML, lo aprendi en 2 dias. 😂",
            En: "I don't have much to say about HTML, I learned it in 2 days. 😂",
        },
    },
    {
        skill: "CSS",
        icon: <CSS />,
        bgColor: "#125587",
        experience: "2021/10/16",
        level: 4,
        description: {
            Es: "A pesar de que tengo mucho tiempo de experiencia con CSS siempre aprendo algo nuevo cada dia.",
            En: "Even though I have a lot of experience with CSS I always learn something new every day.",
        },
    },
    {
        skill: "JavaScript",
        icon: <JavaScript />,
        bgColor: "#b5a118",
        experience: "2021/09/07",
        level: 4,
        description: {
            Es: "JavaScript es el primer lenguaje de programación que aprendí y le tengo mucho cariño.",
            En: "JavaScript is the first programming language I learned and I'm very fond of it.",
        },
    },
    {
        skill: "TypeScript",
        icon: <TypeScript />,
        bgColor: "#05446e",
        experience: "2022/09/07",
        level: 4,
        description: {
            Es: "A pesar de que JavaScript me gusta, TypeScript me encanta.",
            En: "Although I like JavaScript, I love TypeScript.",
        },
    },
    {
        skill: "NodeJS",
        icon: <NodeJS />,
        bgColor: "#276601",
        experience: "2021/11/07",
        level: 4,
        description: {
            Es: "Aún me falta para dominarlo al 100%.",
            En: "I still need to master it 100%.",
        },
    },
    {
        skill: "TailwindCSS",
        icon: <TailwindCSS />,
        bgColor: "#1c6662",
        experience: "2022/09/19",
        level: 3,
        description: {
            Es: "Me encanta TailwindCSS, me parece muy practico y facil de usar.",
            En: "I love TailwindCSS, I find it very practical and easy to use.",
        },
    },
    {
        skill: "Sass",
        icon: <Sass />,
        bgColor: "#872b5a",
        experience: "2022/05/28",
        level: 4,
        description: {
            Es: "Agradezco mucho la anidación y el parent selector de Sass.",
            En: "I really appreciate the Sass nesting and parent selector.",
        },
    },
    {
        skill: "Boostrap",
        icon: <Boostrap />,
        bgColor: "#482a73",
        experience: "2022/10/02",
        level: 2,
        description: {
            Es: "Me gusta boostrap para prototipar pequeños proyectos.",
            En: "I like bootrap to prototype small projects.",
        },
    },
    {
        skill: "Express",
        icon: <Express />,
        bgColor: "#f3f3f3",
        experience: "2022/06/18",
        level: 3,
        description: {
            Es: "El unico framework backend que se usar medianamente bien. jaja",
            En: "The only backend framework that can be used fairly well. haha",
        },
    },
    {
        skill: "React",
        icon: <React />,
        bgColor: "#2b7d94",
        experience: "2022/01/24",
        level: 4,
        description: {
            Es: "Sin duda alguna mi framework frontend favorito.",
            En: "Without a doubt my favorite frontend framework.",
        },
    },
    {
        skill: "Redux",
        icon: <Redux />,
        bgColor: "#8d56e3",
        experience: "2022/09/27",
        level: 3,
        description: {
            Es: "Una gran herramienta que me facilita mucho con el manejo de estados.",
            En: "A great tool that makes it very easy for me to manage states.",
        },
    },
    {
        skill: "MongoDB",
        icon: <MongoDB />,
        bgColor: "#001e2b",
        experience: "2022/05/28",
        level: 3,
        description: {
            Es: "Me encanta esta base de datos, a pesar de que aún no la conozco al 100% me gusta mucho trabajar con MongoDB.",
            En: "I love this database, even though I still don't know it 100%, I really like working with MongoDB.",
        },
    },
    {
        skill: "PostgreSQL",
        icon: <PostgreSQL />,
        bgColor: "#f3f3f3",
        experience: "2022/10/05",
        level: 2,
        description: {
            Es: "No soy muy fan de las bases de datos SQL pero PostgreSQL me llamo mucho la atención.",
            En: "I'm not a big fan of SQL databases but PostgreSQL caught my attention.",
        },
    },
    {
        skill: "Vite",
        icon: <Vite />,
        bgColor: "#3a3a3a",
        experience: "2022/01/24",
        level: 3,
        description: {
            Es: "En todos los proyectos web que hago uso Vite, es una herramienta genial e incluso lo prefiero más que Webpack.",
            En: "In all the web projects I do I use Vite, it's a great tool and I even prefer it more than Webpack.",
        },
    },
    {
        skill: "Photoshop",
        icon: <Photoshop />,
        bgColor: "#2daaff",
        experience: "2020/03/13",
        level: 5,
        description: {
            Es: "Me manejo bastante bien con Photoshop, por lo general lo uso para hacer iconos o banners que requiero.",
            En: "I'm pretty good with Photoshop, I usually use it to make icons or banners that I need.",
        },
    },
    {
        skill: "Premiere",
        icon: <Premiere />,
        bgColor: "#9a9aff",
        experience: "2020/12/08",
        level: 4,
        description: {
            Es: "Tengo algo de experiencia con este editor de video, he hecho algunos proyectos no muy grandes.",
            En: "I have some experience with this video editor, I have done some not very big projects.",
        },
    },
];

export const SkillsToLearn: SkillToLearnType = [
    {
        skill: "Vue",
        icon: <Vue />,
        bgColor: "#c5facc",
        comment: {
            Es: "A pesar de que ya se React lo quisiera aprender por tener más conocimientos.",
            En: "Although I already know React, I would like to learn it for having more knowledge.",
        },
    },
    {
        skill: "Angular",
        icon: <Angular />,
        bgColor: "#293640",
        comment: {
            Es: "Me parece interesante, ademas que usa TypeScript.",
            En: "I find it interesting, besides that it uses TypeScript.",
        },
    },
    {
        skill: "NuxtJS",
        icon: <NuxtJS />,
        bgColor: "#c5facc",
        comment: {
            Es: "Vue con Server Site Rendering? Suena interesante.",
            En: "Vue with Server Site Rendering? Sounds interesting.",
        },
    },
    {
        skill: "NextJS",
        icon: <NextJS />,
        bgColor: "#f3f3f3",
        comment: {
            Es: "Me interesa bastante el Server Site Rendering.",
            En: "I am quite interested in Server Site Rendering.",
        },
    },
];
