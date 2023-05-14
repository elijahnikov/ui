import { MenuMap } from "./types";

export const tripleColumnMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
    {
        label: "Props",
        href: "#props",
    },
];

export const tripleColumnCode = {
    usage: `import TripleColumn from "@/components/ui/TripleColumn/TripleColumn";

<TripleColumn>
    <TripleColumn.Left>Left column</TripleColumn.Left>
    <TripleColumn.Middle>Middle column</TripleColumn.Middle>
    <TripleColumn.Right>Right column</TripleColumn.Right>
</TripleColumn>`,

    props: `import TripleColumn from "@/components/ui/TripleColumn/TripleColumn";

<TripleColumn>
    <TripleColumn.Left className="bg-red-400">
        Left column
    </TripleColumn.Left>
    <TripleColumn.Middle onClick={() => console.log("Clicked")}>
        Middle column
    </TripleColumn.Middle>
    <TripleColumn.Right>Right column</TripleColumn.Right>
</TripleColumn>`,
};
