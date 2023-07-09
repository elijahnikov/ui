import { PropType } from "@/components/common/APIReferenceTable/APIReferenceTable";
import { MenuMap } from "./types";

export const buttonMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Variants",
        href: "#variants",
    },
    {
        label: "Sizes",
        href: "#sizes",
    },
    {
        label: "Loading state",
        href: "#loading-state",
    },
    {
        label: "Button with icon",
        href: "#button-with-icon",
    },
];

export const buttonCode = {
    primary: `import Button from "@/components/ui/Button/Button";

<Button intent="primary">Primary</Button>
`,
    variants: `import Button from "@/components/ui/Button/Button";

<Button intent={"primary"}>Primary</Button>

<Button intent={"secondary"}>Secondary</Button>

<Button intent={"outline"}>Outline</Button>

<Button intent={"transparent"}>Transparent</Button>

<Button disabled intent={"primary"}>
    Disabled
</Button>`,

    sizes: `import Button from "@/components/ui/Button/Button";

<Button intent={"primary"} size={"sm"}>
    Small
</Button>

<Button intent={"primary"} size={"base"}>
    Default
</Button>

<Button intent={"primary"} size={"large"}>
    Large
</Button>

<Button intent={"primary"} fullWidth>
    Full Width
</Button>`,

    loadingState: `import Button from "@/components/ui/Button/Button";

<Button intent={"primary"} loading={isLoading}>
    Primary
</Button>

<Button intent={"secondary"} loading>
    Primary
</Button>`,

    buttonWithIcon: `import Button from "@/components/ui/Button/Button";
import { AiFillSave, AiOutlineCloudDownload } from "react-icons/ai";

    
<Button intent={"primary"} leftIcon={AiFillSave}>
    Save
</Button>

<Button
    intent={"secondary"}
    rightIcon={AiOutlineCloudDownload}
>
    Download
</Button>`,
};

export const buttonProps: PropType[] & { id: number }[] = [
    {
        id: 1,
        propName: "intent",
        type: `"primary" | "secondary" | "outline" | "transparent"`,
        default: "primary",
    },
    {
        id: 2,
        propName: "size",
        type: `"base" | "sm" | "large"`,
        default: "base",
    },
    {
        id: 3,
        propName: "fullWidth",
        type: "boolean",
        default: "false",
    },
    {
        id: 4,
        propName: "disabled",
        type: "boolean",
        default: "false",
    },
    {
        id: 5,
        propName: "children",
        type: "React.ReactNode",
        default: "-",
    },
    {
        id: 6,
        propName: "loading",
        type: "boolean",
        default: "false",
    },
    {
        id: 7,
        propName: "leftIcon",
        type: "IconType",
        default: "-",
    },
    {
        id: 8,
        propName: "rightIcon",
        type: "IconType",
        default: "-",
    },
];
