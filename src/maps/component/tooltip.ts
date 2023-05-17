import { MenuMap } from "./types";

export const tooltipMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Children",
        href: "#children",
    },
];

export const tooltipCode = {
    usage: `import Tooltip from "@/components/ui/Tooltip/Tooltip";

<Tooltip>
    <Tooltip.Trigger>
        <Button>Hover me</Button>
    </Tooltip.Trigger>
    <Tooltip.Content>Hello</Tooltip.Content>
</Tooltip>`,

    children: `import Tooltip from "@/components/ui/Tooltip/Tooltip";

<Tooltip>
    <Tooltip.Trigger>
        <h4>Pass your own components</h4>
    </Tooltip.Trigger>
    <Tooltip.Content>
        <Input placeholder="Try typing here!" />
    </Tooltip.Content>
</Tooltip>`,
};
