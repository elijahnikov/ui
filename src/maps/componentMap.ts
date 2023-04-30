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
            {
                id: 4,
                title: "Stack",
                value: "stack",
                href: "/stack",
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
                disabled: false,
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
                disabled: false,
            },
            {
                id: 11,
                title: "Tabs",
                value: "tabs",
                href: "/tabs",
                disabled: true,
            },
            {
                id: 12,
                title: "Table",
                value: "table",
                href: "/table",
                disabled: true,
            },
            {
                id: 13,
                title: "Spinner",
                value: "spinner",
                href: "/spinner",
                disabled: true,
            },
            {
                id: 14,
                title: "Progress",
                value: "progress",
                href: "/progress",
                disabled: true,
            },
            {
                id: 15,
                title: "Error",
                value: "error",
                href: "/error",
                disabled: true,
            },
            {
                id: 16,
                title: "Code Block",
                value: "codeBlock",
                href: "/codeBlock",
                disabled: false,
            },
        ],
    },
];
