import { MenuMap } from "./types";

export const tripleColumnMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
];

export const tripleColumnCode = {
    usage: `import TripleColumn from "@/components/ui/TripleColumn/TripleColumn";

<TripleColumn>
    <TripleColumn.Left>Left column</TripleColumn.Left>
    <TripleColumn.Middle>Middle column</TripleColumn.Middle>
    <TripleColumn.Right>Right column</TripleColumn.Right>
</TripleColumn>`,
};
