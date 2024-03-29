export type ComponentType = {
    id: number;
    title: string;
    value: string;
    href: string;
    disabled?: boolean;
    type: string;
};

export const componentMap: ComponentType[] = [
    {
        id: 20,
        title: "Accordion",
        value: "accordion",
        href: "/accordion",
        disabled: false,
        type: "component",
    },
    {
        id: 21,
        title: "Card",
        value: "card",
        href: "/card",
        disabled: true,
        type: "component",
    },
    {
        id: 22,
        title: "Grid",
        value: "grid",
        href: "/grid",
        disabled: true,
        type: "layout",
    },
    {
        id: 23,
        title: "Stack",
        value: "stack",
        href: "/stack",
        disabled: true,
        type: "layout",
    },
    {
        id: 24,
        title: "Triple Column",
        value: "triple_column",
        href: "/triple-column",
        disabled: false,
        type: "layout",
    },

    {
        id: 1,
        title: "Button",
        value: "button",
        href: "/button",
        type: "component",
    },
    {
        id: 3,
        title: "Select",
        value: "select",
        href: "/select",
        disabled: false,
        type: "component",
    },
    {
        id: 4,
        title: "Switch",
        value: "switch",
        href: "/switch",
        disabled: true,
        type: "component",
    },
    {
        id: 5,
        title: "Input",
        value: "input",
        href: "/input",
        disabled: false,
        type: "component",
    },
    {
        id: 6,
        title: "Input Area",
        value: "inputArea",
        href: "/input-area",
        disabled: false,
        type: "component",
    },

    {
        id: 9,
        title: "Tooltip",
        value: "tooltip",
        href: "/tooltip",
        disabled: false,
        type: "component",
    },
    {
        id: 10,
        title: "Checkbox",
        value: "checkbox",
        href: "/checkbox",
        disabled: false,
        type: "component",
    },
    {
        id: 11,
        title: "Tabs",
        value: "tabs",
        href: "/tabs",
        disabled: false,
        type: "component",
    },
    // {
    //     id: 12,
    //     title: "Table",
    //     value: "table",
    //     href: "/table",
    //     disabled: true,
    //     type: "component",
    // },
    {
        id: 13,
        title: "Spinner",
        value: "spinner",
        href: "/spinner",
        disabled: false,
        type: "component",
    },
    {
        id: 14,
        title: "Progress",
        value: "progress",
        href: "/progress",
        disabled: false,
        type: "component",
    },
    {
        id: 15,
        title: "Error",
        value: "error",
        href: "/error",
        type: "component",
    },
    {
        id: 16,
        title: "Code Block",
        value: "codeBlock",
        href: "/code-block",
        disabled: false,
        type: "component",
    },
    {
        id: 17,
        title: "Badge",
        value: "badge",
        href: "/badge",
        disabled: false,
        type: "component",
    },
    {
        id: 18,
        title: "Toast",
        value: "toast",
        href: "/toast",
        disabled: false,
        type: "component",
    },
    {
        id: 19,
        title: "Keyboard Key",
        value: "kbd",
        href: "/kbd",
        disabled: false,
        type: "component",
    },
    {
        id: 25,
        title: "Modal",
        value: "modal",
        href: "/modal",
        type: "component",
    },
];
