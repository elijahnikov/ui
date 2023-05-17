// React
import React from "react";

// Components
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Spinner from "@/components/ui/Spinner/Spinner";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";

// Data
import { spinnerCode, spinnerMenuMap } from "@/maps/component/spinner";
import PageStepper from "@/components/common/PageStepper/PageStepper";

interface SpinnerPageProps {}

const SpinnerPage = ({}: SpinnerPageProps) => {
    return (
        <Layout title="Spinner - Supercrumble UI" menuMap={spinnerMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Spinner"
                    description="Indicate something loading or an action being performed in the background"
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
                    <Spinner />
                </ExampleBlock>
                <CodeBlock code={spinnerCode.usage} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="sizes"
                ></a>
                <h4>Sizes and Props</h4>
                <p className="mb-[30px]">
                    Pass size and your own className styling to the Spinner
                </p>
                <ExampleBlock>
                    <Spinner size="sm" className="fill-purple-600" />
                </ExampleBlock>
                <CodeBlock code={spinnerCode.sizesAndProps} />
            </div>
            <PageStepper currentPage="spinner" />
        </Layout>
    );
};

export default SpinnerPage;
