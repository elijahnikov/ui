export type ComponentSectionMapType = {
	id: number;
	title: string;
	components: ComponentType[];
};

export type ComponentType = {
	id: number;
	title: string;
	value: string;
	href: string;
	disabled?: boolean;
};

export const componentMap: ComponentSectionMapType[] = [
	{
		id: 1,
		title: "Components",
		components: [
			{
				id: 1,
				title: "Button",
				value: "button",
				href: "/button",
			},
			{
				id: 2,
				title: "Button or Link",
				value: "buttonOrLink",
				href: "/buttonOrLink",
			},
			{
				id: 3,
				title: "Select",
				value: "select",
				href: "/select",
				disabled: true,
			},
			{
				id: 4,
				title: "Switch",
				value: "switch",
				href: "/switch",
				disabled: true,
			},
		],
	},
];
