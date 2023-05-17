import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import PageStepper from "@/components/common/PageStepper/PageStepper";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import { codeBlockCode, codeBlockMenuMap } from "@/maps/component/codeBlock";
import React from "react";

interface CodeBlockPageProps {}

const CodeBlockPage = ({}: CodeBlockPageProps) => {
    return (
        <Layout title="Code Block - Supercrumble UI" menuMap={codeBlockMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Code Block"
                    description="Display code examples to your users."
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
                    <CodeBlock code="Example code" />
                </ExampleBlock>
                <CodeBlock code={codeBlockCode.usage} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="copyable"
                ></a>
                <h4 className="mb-[30px]">Copy</h4>
                <ExampleBlock>
                    <CodeBlock copyable={false} code="Show/hide copy button" />
                </ExampleBlock>
                <CodeBlock code={codeBlockCode.copyable} />
            </div>
            <PageStepper currentPage="codeBlock" />
        </Layout>
    );
};

export default CodeBlockPage;
