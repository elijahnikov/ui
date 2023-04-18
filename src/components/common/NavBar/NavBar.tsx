// Next
import Button from "@/components/ui/Button/Button";
import Image from "next/image";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { BsGlobe } from "react-icons/bs";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";

const NavBar = () => {
	return (
		<div className="h-[8vh] dark:border-gray-800 border-b-[1px] z-10 fixed flex dark:bg-black dark:text-white text-black bg-white w-full text-center">
			<div className="inline-flex align-center ml-[10px] w-full items-center ">
				<Link
					href={"/"}
					className="flex w-[80%] align-center ml-[10px] items-center "
				>
					<Image
						alt="Supercrumble logo"
						width={60}
						height={60}
						src="https://i.ibb.co/r4WtSVc/supercrumble800x800.png"
					/>
					<h4 className="ml-[10px]">Supercrumble UI</h4>
				</Link>
				<div className="clear-both ml-[40px]">
					<AiFillGithub className="h-6 w-6 fill-slate-700 float-right ml-2" />
					<BsGlobe className="h-6 w-6 fill-slate-700 float-right" />
				</div>
				<div>
					<DarkModeSwitch />
				</div>
			</div>
		</div>
	);
};

export default NavBar;
