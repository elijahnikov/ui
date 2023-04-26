import { MenuMap } from "./types";

export const inputMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Sizes",
        href: "#sizes",
    },
    {
        label: "Disabled",
        href: "#disabled",
    },
    {
        label: "Prefix and Suffix",
        href: "#prefixSuffix",
    },
];

export const inputCode = {
    default: `import Input from "@/components/ui/Input/Input";

<Input placeholder="Placeholder..." />`,

    sizes: `import Input from "@/components/ui/Input/Input";

<Input size="sm" placeholder="Small" />

<Input size="base" placeholder="Default" />

<Input size="large" placeholder="Large" />`,

    disabled: `import Input from "@/components/ui/Input/Input";

<Input disabled placeholder="Disabled with placeholder" />

<Input disabled value={"Disabled with value"} />`,

    prefixSuffix: `import Input from "@/components/ui/Input/Input";
    
<Input placeholder="E-mail" prefix={AiOutlineMail} />

<Input
    placeholder="Password"
    suffix={AiOutlineKey}
    type="password"
/>

<Input
    placeholder="Website"
    prefix={"https://"}
    suffix={".com"}
/>

<Input
    placeholder="Username"
    prefix={"supercrumble.com/@"}
/>`,
};
