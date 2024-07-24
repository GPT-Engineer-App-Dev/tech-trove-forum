import { Home, Cpu, Code, Network } from "lucide-react";
import Index from "./pages/Index.jsx";
import General from "./pages/General.jsx";
import Hardware from "./pages/Hardware.jsx";
import Software from "./pages/Software.jsx";
import Networking from "./pages/Networking.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "General",
    to: "/general",
    icon: <Cpu className="h-4 w-4" />,
    page: <General />,
  },
  {
    title: "Hardware",
    to: "/hardware",
    icon: <Cpu className="h-4 w-4" />,
    page: <Hardware />,
  },
  {
    title: "Software",
    to: "/software",
    icon: <Code className="h-4 w-4" />,
    page: <Software />,
  },
  {
    title: "Networking",
    to: "/networking",
    icon: <Network className="h-4 w-4" />,
    page: <Networking />,
  },
];