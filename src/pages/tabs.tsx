import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import PageStepper from "@/components/common/PageStepper/PageStepper";
import Button from "@/components/ui/Button/Button";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import Input from "@/components/ui/Input/Input";
import Tabs from "@/components/ui/Tabs/Tabs";
import { tabsCode, tabsMenuMap } from "@/maps/component/tabs";
import React from "react";

interface TabsPageProps {}

const TabsPage = ({}: TabsPageProps) => {
    return (
        <Layout title="Tabs - Supercrumble UI" menuMap={tabsMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Tabs"
                    description="Sections of content that are displayed one at a time, depending on which tab is selected."
                />
            </div>
            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4 className="mb-[30px]">Usage</h4>
                <ExampleBlock>
                    <Tabs defaultTab="account">
                        <Tabs.List>
                            <Tabs.Trigger value="account">Account</Tabs.Trigger>
                            <Tabs.Trigger value="password">
                                Password
                            </Tabs.Trigger>
                        </Tabs.List>
                        <Tabs.Content value="account">
                            <div className="p-5 border-[1px] dark:border-slate-800 rounded-md mt-2">
                                <h3>Account</h3>
                                <p>
                                    {`Make changes to your account here. Click
                                    save when you're done.`}
                                </p>
                                <div className="mt-4">
                                    <Input fullWidth label="Name" />
                                    <div className="mt-4">
                                        <Input fullWidth label="Username" />
                                    </div>
                                    <Button className="mt-5">
                                        Save changes
                                    </Button>
                                </div>
                            </div>
                        </Tabs.Content>
                        <Tabs.Content value="password">
                            <div className="p-5 border-[1px] dark:border-slate-800 rounded-md mt-2">
                                <h3>Password</h3>
                                <p>
                                    {`Change your password here. After saving, you'll be logged out.`}
                                </p>
                                <div className="mt-4">
                                    <Input
                                        type="password"
                                        fullWidth
                                        label="Current password"
                                    />
                                    <div className="mt-4">
                                        <Input
                                            type="password"
                                            fullWidth
                                            label="New password"
                                        />
                                    </div>
                                    <Button className="mt-5">
                                        Save changes
                                    </Button>
                                </div>
                            </div>
                        </Tabs.Content>
                    </Tabs>
                </ExampleBlock>
                <CodeBlock code={tabsCode.usage} />
            </div>
            <PageStepper currentPage="tabs" />
        </Layout>
    );
};

export default TabsPage;
