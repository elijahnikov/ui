import { MenuMap } from "./types";

export const kbdMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Chaining modifiers",
        href: "#multi",
    },
    {
        label: "Tooltip",
        href: "#tooltip",
    },
];

export const kbdCode = {
    usage: `import Kbd from "@/components/ui/Kbd/Kbd";

<Kbd meta>S</Kbd>`,

    multi: `import Kbd from "@/components/ui/Kbd/Kbd";
    
<Kbd shift meta alt />
<Kbd meta alt shift />`,

    tooltip: `import Kbd from "@/components/ui/Kbd/Kbd";
    
<Kbd shift meta alt tooltip />`,
};
