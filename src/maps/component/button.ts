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
        label: "Loading State",
        href: "#loading-state",
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
};
