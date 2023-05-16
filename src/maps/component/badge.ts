import { MenuMap } from "./types";

export const badgeMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Variants",
        href: "#variants",
    },
    {
        label: "Left/Right Icons",
        href: "#icon",
    },
];

export const badgeCode = {
    usage: `import { Badge } from "@/components/ui/Badge/Badge";

<Badge>Sample Badge</Badge>`,

    variants: `import { Badge, BadgeLabel } from "@/components/ui/Badge/Badge";
    
<Badge>
    <BadgeLabel>Subtle</BadgeLabel>
</Badge>

<Badge variant={"outline"}>
    <BadgeLabel>Outline</BadgeLabel>
</Badge>

<Badge variant={"solid"}>
    <BadgeLabel>Solid</BadgeLabel>
</Badge>`,

    icon: `import { Badge, BadgeLabel, BadgeIcon } from "@/components/ui/Badge/Badge";
    
<Badge>
    <BadgeIcon icon={BiGitBranch} />
    <BadgeLabel>feature/git</BadgeLabel>
</Badge>

<Badge>
    <BadgeLabel>Twitter</BadgeLabel>
    <BadgeIcon icon={BsTwitter} />
</Badge>`,
};
