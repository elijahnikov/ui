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
    {
        label: "Clearable",
        href: "#clearable",
    },
    {
        label: "Errors",
        href: "#errors",
    },
];

export const inputCode = {
    default: `import Input from "@/components/ui/Input/Input";

<Input placeholder="Placeholder..." />`,

    defaultWithLabel: `import Input from "@/components/ui/Input/Input";

<Input label="Field" placeholder="Placeholder..." />`,

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

    clearable: `import Input from "@/components/ui/Input/Input";

const [clearableText, setClearableText] = useState<string>("");

const [clearableWithSuffixText, setClearableWithSuffixText] =
    useState<string>("");

<Input
    value={clearableText}
    change={setClearableText}
    clearable
    placeholder="Clearable"
/>

<Input
    fullWidth
    value={clearableWithSuffixText}
    change={setClearableWithSuffixText}
    suffix={AiOutlineUpload}
    clearable
    placeholder="Clearable with suffix and full width"
/>`,

    error: `import Input from "@/components/ui/Input/Input";

<Input error placeholder="Simple error" />

<Input
    error
    errorText="This is an example error, incorrect value etc."
    placeholder="Error with text"
/>

<Input
    error
    fullWidth
    errorText="This is another example error; errors will wrap to match the width of the input component."
    placeholder="Error with text"
/>`,
};
