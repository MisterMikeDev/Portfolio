import { useTheme } from "../../Hooks/useTheme";
export default function MainBackground({
    children,
}: {
    children: JSX.Element;
}) {
    const { Transition, BackgroundColor } = useTheme();
    return <div className={`${Transition} ${BackgroundColor}`}>{children}</div>;
}
