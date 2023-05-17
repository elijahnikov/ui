import { MenuMap } from "./types";

export const tabsMenuMap: MenuMap[] = [
    {
        label: "Usage",
        href: "#usage",
    },
];

export const tabsCode = {
    usage: `import Tabs from "@/components/ui/Tabs/Tabs";

<Tabs defaultTab="account">
    <Tabs.List>
        <Tabs.Trigger value="account">Account</Tabs.Trigger>
        <Tabs.Trigger value="password">
            Password
        </Tabs.Trigger>
    </Tabs.List>
    
    <Tabs.Content value="account">
        <div>
            <h3>Account</h3>
            ...
        </div>
    </Tabs.Content>

    <Tabs.Content value="password">
        <div>
            <h3>Password</h3>
            ...
        </div>
    </Tabs.Content>
</Tabs>
    `,
};
