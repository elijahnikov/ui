import Button from "@/components/ui/Button/Button";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsFillSunFill, BsMoon, BsMoonFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";

interface DarkModeSwitchProps {}

const DarkModeSwitch = ({}: DarkModeSwitchProps) => {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState<boolean>(theme === "dark");
    useEffect(() => {
        setIsDark(theme === "dark");
    }, [theme]);

    return (
        <Button
            loading={false}
            intent={theme === "light" ? "secondary" : "outline"}
            className="p-2 rounded-md"
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
            }}
        >
            {!isDark ? <BsMoonFill /> : <BsFillSunFill />}
        </Button>
    );
};

export default DarkModeSwitch;
