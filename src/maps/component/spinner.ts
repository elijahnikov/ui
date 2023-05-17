import { MenuMap } from "./types";

export const spinnerMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
];

export const spinnerCode = {
    usage: `import Spinner from "@/components/ui/Spinner/Spinner";

<Spinner />`,

    sizesAndProps: `import Spinner from "@/components/ui/Spinner/Spinner";

<Spinner size="sm" className="fill-purple-600" />`,
};
