import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";
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

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="sizes"
                ></a>
                <h4 className="mb-[30px]">Sizes</h4>
                <ExampleBlock className="space-y-5">
                    <InputArea placeholder="Default" />
                    <InputArea fullWidth placeholder="Full width" />
                </ExampleBlock>
                <CodeBlock code={inputAreaCode.sizes} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="disabled"
                ></a>
                <h4 className="mb-[30px]">Disabled</h4>
                <ExampleBlock className="space-y-5">
                    <InputArea
                        disabled
                        placeholder="Disabled with placeholder"
                    />
                    <InputArea disabled value={"Disabeld with value"} />
                </ExampleBlock>
                <CodeBlock code={inputAreaCode.disabled} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="errors"
                ></a>
                <h4 className="mb-[30px]">Errors</h4>
                <ExampleBlock className="space-y-5">
                    <InputArea
                        disabled
                        placeholder="Disabled with placeholder"
                    />
                    <InputArea disabled value={"Disabeld with value"} />
                </ExampleBlock>
                <CodeBlock code={inputAreaCode.disabled} />
            </div>

            <GitHubRedirect
                page="Input Area"
                href="https://github.com/elijahnikov/ui/blob/main/src/components/ui/Button/Button.tsx"
            />
        </Layout>
    );
};

export default InputAreaPage;
