// Next
import Image from "next/image";
import Link from "next/link";

// ReactIcons
import { AiFillGithub } from "react-icons/ai";

// Components
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

const NavBar = () => {
    return (
        <div className="h-[8vh] dark:border-gray-800 border-b-[1px] z-10 fixed flex dark:bg-black dark:text-white text-black bg-white w-full text-center">
            <div className="inline-flex align-center min-w-[80%] ml-[10px] w-full items-center ">
                <Link
                    href={"/"}
                    className="flex align-center ml-[10px] items-center"
                >
                    <Image
                        alt="Supercrumble logo"
                        width={60}
                        height={60}
                        src="https://i.ibb.co/r4WtSVc/supercrumble800x800.png"
                    />
                    <h4 className="ml-[10px]">Supercrumble UI</h4>
                </Link>
                <div className="ml-2">
                    <a href="https://github.com/elijahnikov/ui">
                        <AiFillGithub className="h-6 w-6 fill-slate-700 dark:fill-white float-right ml-2" />
                    </a>
                </div>
            </div>
            <div className="w-[10vw] min-w-[10vw] inline-flex items-center justify-center text-center mx-0">
                <div className="ml-2">
                    <DarkModeSwitch />
                </div>
            </div>
        </div>
    );
};

export default NavBar;
