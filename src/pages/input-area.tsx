import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import InputArea from "@/components/ui/InpuArea/InputArea";
import { inputAreaCode, inputAreaMenuMap } from "@/maps/component/inputArea";
import React from "react";

interface InputAreaPageProps {}

const InputAreaPage = ({}: InputAreaPageProps) => {
    return (
        <Layout title="Input Area - Supercrumble UI" menuMap={inputAreaMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Input Area"
                    description="A input component used to retrieve user input in the form of a text field"
                />
            </div>
            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4 className="mb-[30px]">Usage</h4>
                <ExampleBlock>
                    <InputArea placeholder="Placeholder..." />
                </ExampleBlock>
                <CodeBlock code={inputAreaCode.default} />
                <ExampleBlock>
                    <InputArea label="Field" placeholder="Placeholder..." />
                </ExampleBlock>
                <CodeBlock code={inputAreaCode.defaultWithLabel} />
            </div>
        </Layout>
    );
};

export default InputAreaPage;
