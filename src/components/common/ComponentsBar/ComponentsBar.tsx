import {
	componentMap,
	ComponentSectionMapType,
	ComponentType,
} from "@/maps/componentMap";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const ComponentsBar = () => {
	const [currentPath, setCurrentPath] = useState<string>("");

	useEffect(() => {
		setCurrentPath(window.location.pathname);
	}, []);

	return (
		<div className="border-r-[1px] w-[15vw] mx-auto min-w-[300px] justify-center align-center flex p-[10px] float-left h-[100vh]">
			<div className="mt-[40px] w-[60%]">
				<div className="mt-[10px]">
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
											<Link
												href={component.href}
												key={component.id}
												className={`${
													currentPath ===
														component.href &&
													"bg-slate-100 rounded-md"
												} p-[5px] pl-[8px] mb-[8px] hover:bg-red-400 flex align-center items-center`}
											>
												<p className="hover:underline cursor-pointer text-slate-700">
													{component.title}
												</p>
											</Link>
										)
									)}
								</div>
							</>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default ComponentsBar;
