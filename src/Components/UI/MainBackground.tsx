import { useTheme } from "../../Hooks/useTheme";
import {
    Angular,
    CSS,
    GitHub,
    HTML,
    JavaScript,
    NextJS,
    NodeJS,
    Preact,
    React,
    Twitter,
    TypeScript,
    VSCode,
    Vite,
    Vue,
} from "../Icons/BG";
export default function MainBackground({
    children,
}: {
    children: JSX.Element;
}) {
    const { Transition, BackgroundColor } = useTheme();
    
    const BASE_STYLES = "floating black-and-white w-16 h-16 fixed";
    return (
        <div className={`${BackgroundColor} ${Transition} relative`}>
            <Angular
                className={`${BASE_STYLES}`}
                style={{ top: "37%", left: "83%" }}
            />
            <CSS
                className={`${BASE_STYLES}`}
                style={{ top: "68%", left: "23%" }}
            />
            <GitHub
                className={`${BASE_STYLES}`}
                style={{ top: "6%", left: "35%" }}
            />
            <HTML
                className={`${BASE_STYLES}`}
                style={{ top: "40%", left: "33%" }}
            />
            <JavaScript
                className={`${BASE_STYLES}`}
                style={{ top: "43%", left: "54%" }}
            />
            <NextJS
                className={`${BASE_STYLES}`}
                style={{ top: "19%", left: "49%" }}
            />
            <NodeJS
                className={`${BASE_STYLES}`}
                style={{ top: "52%", left: "64%" }}
            />
            <Preact
                className={`${BASE_STYLES}`}
                style={{ top: "67%", left: "52%" }}
            />
            <React
                className={`${BASE_STYLES}`}
                style={{ top: "13%", left: "64%" }}
            />
            <Twitter
                className={`${BASE_STYLES}`}
                style={{ top: "36%", left: "16%" }}
            />
            <TypeScript
                className={`${BASE_STYLES}`}
                style={{ top: "27%", left: "71%" }}
            />
            <VSCode
                className={`${BASE_STYLES}`}
                style={{ top: "54%", left: "77%" }}
            />
            <Vite
                className={`${BASE_STYLES}`}
                style={{ top: "14%", left: "24%" }}
            />
            <Vue
                className={`${BASE_STYLES}`}
                style={{ top: "58%", left: "41%" }}
            />
            {children}
        </div>
    );
}
