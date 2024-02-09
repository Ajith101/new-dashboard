import DashboardLogo from "../assets/Circled Menu.png";
import SupportImg from "../assets/Support.png";
import plugIn from "../assets/Puzzle.png";
import help from "../assets/Help.png";

export interface NavLinksType {
  title: string;
  url: string;
  img: string;
}

export const navLinks: NavLinksType[] = [
  {
    title: "Dashboard",
    url: "/",
    img: DashboardLogo,
  },
  {
    title: "Support",
    url: "/support",
    img: SupportImg,
  },
  {
    title: "PLugins",
    url: "/plugins",
    img: plugIn,
  },
  {
    title: "Help",
    url: "/help",
    img: help,
  },
];
