import Button from "@/components/ui/Button/Button";
import { useTheme } from "next-themes";
import { BsFillSunFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

interface DarkModeSwitchProps {}

const DarkModeSwitch = ({}: DarkModeSwitchProps) => {
    const { theme, setTheme } = useTheme();
    return (
        <Button
            loading={false}
            intent={theme === "light" ? "primary" : "outline"}
            className="p-2 rounded-md"
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
            }}
        >
            {theme === "light" ? <MdDarkMode /> : <BsFillSunFill />}
        </Button>
    );
};

export default DarkModeSwitch;
