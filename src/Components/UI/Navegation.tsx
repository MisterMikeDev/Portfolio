import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../Hooks/useTheme";
import { useEffect, useState } from "react";
import IonIcon from "@reacticons/ionicons";
import { useSelector } from "react-redux";
import { RootState } from "../../Store";
export default function Navegation() {
    const {
        theme,
        Transition,
        TextColor,
        IconColor,
        BackgroundUIElement,
        BorderNav,
        Shadow0,
        Shadow1,
        Shadow2,
    } = useTheme();
    const lang = useSelector((state: RootState) => state.LangSlice.lang);
    const Menus = [
        {
            name: lang ? "Principal" : "Home",
            link: "/",
            icon: "home-outline",
            dis: "translate-x-0",
        },
        {
            name: "Skills",
            link: "/skills",
            icon: "rocket-outline",
            dis: "translate-x-16",
        },
        {
            name: lang ? "Redes" : "Socials",
            link: "/redes",
            icon: "share-social-outline",
            dis: "translate-x-32",
        },
        {
            name: lang ? "Proyectos" : "Projects",
            link: "/projects",
            icon: "code-outline",
            dis: "translate-x-48",
        },
        {
            name: lang ? "Contacto" : "Contact",
            link: "/contact",
            icon: "person-outline",
            dis: "translate-x-64",
        },
    ];
    const [active, setActive] = useState(0);
    const { pathname } = useLocation();
    useEffect(() => {
        setActive(
            pathname === "/"
                ? 0
                : pathname.includes("/skills")
                ? 1
                : pathname.includes("/redes")
                ? 2
                : pathname.includes("/projects")
                ? 3
                : pathname.includes("/contact")
                ? 4
                : 404
        );
    }, [pathname]);
    return (
        <div
            className={`${Transition} ${BackgroundUIElement} ${Shadow0} max-h-[4.4rem] px-6 rounded-t-xl transform fixed bottom-0 left-1/2 -translate-x-1/2`}
        >
            <ul className="flex relative">
                {active !== 404 && (
                    <span
                        className={`bg-purple-600 ${Transition} ${Menus[active].dis} border-4 ${BorderNav} h-16 w-16 absolute -top-5 rounded-full`}
                    >
                        <span
                            className={`w-3.5 h-3.5 bg-transparent absolute top-4 -left-[18px] rounded-tr-[11px] ${Transition} ${Shadow1}`}
                        ></span>
                        <span
                            className={`w-3.5 h-3.5 bg-transparent absolute top-4 -right-[18px] rounded-tl-[11px] ${Transition} ${Shadow2}`}
                        ></span>
                    </span>
                )}
                {Menus.map((menu, index) => (
                    <li key={index} className="w-16 relative">
                        <Link
                            to={menu.link}
                            className="flex flex-col text-center pt-6"
                            onClick={() => setActive(index)}
                        >
                            <span
                                className={`text-2xl cursor-pointer duration-500 
                                ${
                                    index === active &&
                                    "-mt-6 z-[2] text-white animate-bounce-100"
                                }
                                ${theme === "dark" && `${IconColor}`}`}
                            >
                                <IonIcon name={menu.icon as any}></IonIcon>
                            </span>
                            <span
                                className={`font-bold ${Transition} ${TextColor} ${
                                    active === index
                                        ? "translate-y-3 duration-700 opacity-100"
                                        : "opacity-0 translate-y-10"
                                } `}
                            >
                                {menu.name}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
