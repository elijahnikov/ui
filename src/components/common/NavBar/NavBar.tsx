// Next
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
	return (
		<div className="h-[8vh] border-b-[1px] flex text-center">
			<div className="flex align-center ml-[10px] items-center ">
				<Link href={"/"}>
					<Image
						alt="Supercrumble logo"
						width={60}
						height={60}
						src="https://i.ibb.co/r4WtSVc/supercrumble800x800.png"
					/>
				</Link>
				<h4 className="ml-[10px]">Supercrumble UI</h4>
			</div>
		</div>
	);
};

export default NavBar;
