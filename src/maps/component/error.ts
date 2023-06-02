import { MenuMap } from "./types";

export const errorMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Custom label",
        href: "#customLabel",
    },
    {
        label: "No label",
        href: "#noLabel",
    },
    {
        label: "Sizes",
        href: "#sizes",
    },
];

export const errorCode = {
    usage: `import Error from "@/components/ui/Error/Error";

<Error>This is an error!</Error>`,

    customLabel: `import Error from "@/components/ui/Error/Error";

<Error label="Email Error">Email is already in use.</Error>`,

    noLabel: `import Error from "@/components/ui/Error/Error";

<Error label={false}>Email is already in use.</Error>`,

    sizes: `import Error from "@/components/ui/Error/Error";

<Error size="large">Email is in use.</Error>
<Error size="base">Email is in use.</Error>
<Error size="sm">Email is in use.</Error>`,
};
