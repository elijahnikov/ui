import { MenuMap } from "./types";

export const checkboxMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Disabled",
        href: "#disabled",
    },
    {
        label: "Label",
        href: "#label",
    },
    {
        label: "Full width",
        href: "#fullWidth",
    },
];

export const checkboxCode = {
    default: `import Checkbox from "@/components/ui/Checkbox/Checkbox";

const [checked, setChecked] = useState<boolean>(false);

<Checkbox
    checked={checked}
    onChange={() => setChecked(!checked)}
    text="Default checkbox"
/>`,

    disabled: `import Checkbox from "@/components/ui/Checkbox/Checkbox";

const [checked, setChecked] = useState<boolean>(true);

<Checkbox disabled text="Disabled" />

<Checkbox disabled text="Disabled checked" checked={checked} />`,

    label: `import Checkbox from "@/components/ui/Checkbox/Checkbox";

<Checkbox label="Label" text="Checkbox with label" />`,

    fullWidth: `import Checkbox from "@/components/ui/Checkbox/Checkbox";

<Checkbox fullWidth text="Checkbox with full width" />`,
};
