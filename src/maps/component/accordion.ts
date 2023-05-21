import { MenuMap } from "./types";

export const accordionMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
];

export const accordionCode = {
    usage: `import Accordion from "@/components/ui/Accordion/Accordion";

<Accordion>
    <Accordion.Item>
        <Accordion.Trigger value="1">
            Click here to reveal
        </Accordion.Trigger>
        <Accordion.Content value="1">
            Content is then revealed
        </Accordion.Content>
    </Accordion.Item>
    
    <Accordion.Item>
        <Accordion.Trigger value="2">
            Lightweight and animated
        </Accordion.Trigger>
        <Accordion.Content value="2">
            <h1>Show various content</h1>
        </Accordion.Content>
    </Accordion.Item>
</Accordion>`,
};
