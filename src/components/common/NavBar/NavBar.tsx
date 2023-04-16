import {
	componentMap,
	ComponentSectionMapType,
	ComponentType,
} from "@/maps/componentMap";
import Link from "next/link";
import Image from "next/image";

interface NavBarProps {}

const NavBar = ({}: NavBarProps) => {
	return (
		<div className="border-r-[1px] w-[30%] mx-auto justify-center align-center flex p-[10px] float-left h-[100vh]">
			<Link href={"/"}>
				<Image
					alt="Supercrumble logo"
					width={100}
					height={100}
					className=" inline h-12 w-12 cursor-pointer"
					src="https://i.ibb.co/r4WtSVc/supercrumble800x800.png"
				/>
			</Link>
			<div className="mt-[40px] w-[70%]">
				{componentMap.map(
					(componentSection: ComponentSectionMapType) => (
						<>
							<div
								key={componentSection.id}
								className="pb-[10px]"
							>
								<p className="font-semibold text-slate-700">
									{componentSection.title}
								</p>
							</div>
							<div>
								{componentSection.components.map(
									(component: ComponentType) => (
										<div
											key={component.id}
											className="pb-[10px]"
										>
											<p className="text-slate-700">
												{component.title}
											</p>
										</div>
									)
								)}
							</div>
						</>
					)
				)}
			</div>
		</div>
	);
};

export default NavBar;
