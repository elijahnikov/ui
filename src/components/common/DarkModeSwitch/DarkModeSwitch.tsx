// Components
import Button from "@/components/ui/Button/Button";

// Next
import { useTheme } from "next-themes";

// React
import { useEffect, useState } from "react";

// ReactIcons
import { BsFillSunFill, BsMoon, BsMoonFill } from "react-icons/bs";

interface DarkModeSwitchProps {}

const DarkModeSwitch = ({}: DarkModeSwitchProps) => {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState<boolean>(theme === "dark");
    useEffect(() => {
        setIsDark(theme === "dark");
    }, [theme]);

    return (
        <div
            className="p-2 rounded-md cursor-pointer"
            onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
            }}
        >
            {!isDark ? (
                <BsMoonFill className="fill-black" />
            ) : (
                <BsFillSunFill className="fill-white" />
            )}
        </div>
    );
};

export default DarkModeSwitch;
