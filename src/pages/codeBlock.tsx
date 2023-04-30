import CodeBlock from "@/components/common/CodeBlock/CodeBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import React from "react";

interface CodeBlockPageProps {}

const CodeBlockPage = ({}: CodeBlockPageProps) => {
    return (
        <Layout title="Code Block - Supercrumble UI">
            <div className="mb-[40px]">
                <PageHeader
                    title="Code Block"
                    description="Display code examples to your users."
                />
            </div>
            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4 className="mb-[30px]">Usage</h4>
                <div className="mb-[30px] border-[1px] p-5 dark:border-slate-700 rounded-xl">
                    <CodeBlock code="Example code" />
                </div>
                <CodeBlock code={""} />
            </div>
        </Layout>
    );
};

export default CodeBlockPage;
