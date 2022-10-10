import Twitter from "../Icons/Twitter";
import Discord from "../Icons/Discord";
import Spotify from "../Icons/Spotify";
import StackOverflow from "../Icons/StackOverflow";
import Github from "../Icons/Github";
import Linkedin from "../Icons/Linkedin";
import TikTok from "../Icons/TikTok";
export const SocialMedias: Array<{
    name: string;
    link: string;
    bg: string;
    icon: JSX.Element;
    delay: number;
}> = [
    {
        name: "Twitter",
        link: "https://www.twitter.com/MrMike_Official",
        bg: "#1c9cec",
        icon: <Twitter />,
        delay: 0.20
    },
    {
        name: "StackOverflow",
        link: "https://www.stackoverflow.com/users/17969063/mrmikedev",
        bg: "#f3f3f3",
        icon: <StackOverflow />,
        delay: 0.30
    },
    {
        name: "Discord",
        link: "https://www.discord.com/users/437308398845952001",
        bg: "#404eed",
        icon: <Discord />,
        delay: 0.40
    },
    {
        name: "Linkedin",
        link: "https://www.linkedin.com/in/diego-emmanuel-626259237/",
        bg: "#f3f3f3",
        icon: <Linkedin />,
        delay: 0.50
    },
    {
        name: "Spotify",
        link: "https://open.spotify.com/user/1r9hhvfixfvb4d9q6sic86i0i",
        bg: "#001e2b",
        icon: <Spotify />,
        delay: 0.60
    },
    {
        name: "Github",
        link: "https://www.github.com/MisterMikeDev",
        bg: "#f3f3f3",
        icon: <Github />,
        delay: 0.70
    },
    {
        name: "TikTok",
        link: "https://www.tiktok.com/@mrmikedev",
        bg: "#f3f3f3",
        icon: <TikTok />,
        delay: 0.80
    },
];
