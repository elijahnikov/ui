import { MenuMap } from "./types";

export const inputAreaMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Sizes",
        href: "#sizes",
    },
    {
        label: "Errors",
        href: "#errors",
    },
];

export const inputAreaCode = {
    default: `import InputArea from "@/components/ui/InpuArea/InputArea";

<InputArea placeholder="Placeholder..." />`,

    defaultWithLabel: `import InputArea from "@/components/ui/InpuArea/InputArea";

<InputArea label="Field" placeholder="Placeholder..." />`,

    sizes: `import InputArea from "@/components/ui/InpuArea/InputArea";
    
<InputArea placeholder="Default" />

<InputArea fullWidth placeholder="Full Width" />`,

    disabled: `import InputArea from "@/components/ui/InpuArea/InputArea";
    
<InputArea
    disabled
    placeholder="Disabled with placeholder"
/>

<InputArea disabled value={"Disabeld with value"} />`,

    error: `import InputArea from "@/components/ui/InpuArea/InputArea";
    
<InputArea error placeholder="Simple error" />
                
<InputArea
    error
    errorText="An error with example text"
    placeholder="Error with text"
/>`,
};
