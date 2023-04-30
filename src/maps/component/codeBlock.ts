import { MenuMap } from "./types";

export const codeBlockMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Copyable",
        href: "#copyable",
    },
];

export const codeBlockCode = {
    usage: `import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";

<CodeBlock code="Example code" />`,

    copyable: `import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
   
<CodeBlock copyable={false} code="Show/hide copy button" />`,
};
