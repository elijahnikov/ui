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
		id: 2,
		title: "Layout",
		components: [
			{
				id: 1,
				title: "Card",
				value: "card",
				href: "/card",
				disabled: true,
			},
			{
				id: 2,
				title: "Accordion",
				value: "accordion",
				href: "/accordion",
				disabled: true,
			},
			{
				id: 3,
				title: "Grid",
				value: "grid",
				href: "/grid",
				disabled: true,
			},
		],
	},
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
			{
				id: 5,
				title: "Input",
				value: "input",
				href: "/input",
				disabled: true,
			},
			{
				id: 6,
				title: "Input Area",
				value: "inputArea",
				href: "/inputArea",
				disabled: true,
			},

			{
				id: 9,
				title: "Tooltip",
				value: "tooltip",
				href: "/tooltip",
				disabled: true,
			},
			{
				id: 10,
				title: "Checkbox",
				value: "checkbox",
				href: "/checkbox",
				disabled: true,
			},
		],
	},
];
