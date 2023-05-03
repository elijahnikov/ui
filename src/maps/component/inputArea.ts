import { MenuMap } from "./types";

export const inputAreaMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
];

export const inputAreaCode = {
    default: `import InputArea from "@/components/ui/InpuArea/InputArea";

<InputArea placeholder="Placeholder..." />`,

    defaultWithLabel: `import InputArea from "@/components/ui/InpuArea/InputArea";

<InputArea label="Field" placeholder="Placeholder..." />`,
};
