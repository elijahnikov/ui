import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import PageStepper from "@/components/common/PageStepper/PageStepper";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import Error from "@/components/ui/Error/Error";
import { errorCode, errorMenuMap } from "@/maps/component/error";
import React from "react";

interface ErrorPageProps {}

const ErrorPage = ({}: ErrorPageProps) => {
    return (
        <Layout title="Error - Supercrumble UI" menuMap={errorMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Error"
                    description={`Show clear and concise error messages that can give context to users whenever something unexpected occurs.`}
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
                    <Error>This is an error!</Error>
                </ExampleBlock>
                <CodeBlock code={errorCode.usage} />
            </div>
            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="customLabel"
                ></a>
                <h4 className="mb-[30px]">Custom Label</h4>
                <ExampleBlock>
                    <Error label="Email Error">Email is already in use.</Error>
                </ExampleBlock>
                <CodeBlock code={errorCode.customLabel} />
            </div>
            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="noLabel"
                ></a>
                <h4 className="mb-[30px]">No Label</h4>
                <ExampleBlock>
                    <Error label={false}>Email is already in use.</Error>
                </ExampleBlock>
                <CodeBlock code={errorCode.noLabel} />
            </div>
            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="sizes"
                ></a>
                <h4 className="mb-[30px]">Sizes</h4>
                <ExampleBlock>
                    <span className="flex space-x-10 items-center">
                        <Error size="large">Email is in use.</Error>
                        <Error size="base">Email is in use.</Error>
                        <Error size="sm">Email is in use.</Error>
                    </span>
                </ExampleBlock>
                <CodeBlock code={errorCode.sizes} />
            </div>
            <PageStepper currentPage="error" />
        </Layout>
    );
};

export default ErrorPage;
