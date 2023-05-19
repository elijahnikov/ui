import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import Kbd from "@/components/ui/Kbd/Kbd";
import React from "react";

interface KbdPageProps {}

const KbdPage = ({}: KbdPageProps) => {
    return (
        <Layout title="Keyboard Key - Supercrumble UI" menuMap={[]}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Keybord Key"
                    description="Show which key or combination of keys perform a specific action, like focusing an input field or saving a file."
                    githubLink="/"
                />
            </div>
            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4 className="mb-[30px]">Usage</h4>
                <ExampleBlock>
                    <Kbd ctrl>S</Kbd>
                </ExampleBlock>
                <CodeBlock code={""} />
            </div>
        </Layout>
    );
};

export default KbdPage;
