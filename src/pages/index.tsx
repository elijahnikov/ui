import Layout from "@/components/common/Layout/Layout";
import Tabs from "@/components/ui/Tabs/Tabs";

export default function Home() {
    return (
        <Layout>
            <Tabs defaultTab="tab1">
                <Tabs.List>
                    <Tabs.Trigger value="tab1">
                        <p>Tab1</p>
                    </Tabs.Trigger>
                    <Tabs.Trigger value="tab2">Tab2</Tabs.Trigger>
                    <Tabs.Trigger value="tab3">Tab3</Tabs.Trigger>
                </Tabs.List>
                <Tabs.Content value="tab1">
                    <h1>hello</h1>
                </Tabs.Content>
                <Tabs.Content value="tab2">Content2</Tabs.Content>
                <Tabs.Content value="tab3">Content3</Tabs.Content>
            </Tabs>
        </Layout>
    );
}
