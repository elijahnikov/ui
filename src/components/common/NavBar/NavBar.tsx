// Next
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
	return (
		<div className="h-[8vh] border-b-[1px] z-10 fixed flex bg-white w-full text-center">
			<Link
				href={"/"}
				className="flex align-center ml-[10px] items-center "
			>
				<Image
					alt="Supercrumble logo"
					width={60}
					height={60}
					src="https://i.ibb.co/r4WtSVc/supercrumble800x800.png"
				/>
				<h4 className="ml-[10px]">Supercrumble UI</h4>
			</Link>
		</div>
	);
};

export default NavBar;
