import {
	componentMap,
	ComponentSectionMapType,
	ComponentType,
} from "@/maps/componentMap";
import Link from "next/link";
import Image from "next/image";

const ComponentsBar = () => {
	return (
		<div className="border-r-[1px] w-[15vw] mx-auto min-w-[300px] justify-center align-center flex p-[10px] float-left h-[100vh]">
			<div className="mt-[40px] w-[50%]">
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
											<div
												key={component.id}
												className="pb-[10px]"
											>
												<p className="hover:underline text-slate-700">
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
		</div>
	);
};

export default ComponentsBar;
