import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import PageStepper from "@/components/common/PageStepper/PageStepper";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import TripleColumn from "@/components/ui/TripleColumn/TripleColumn";
import {
    tripleColumnCode,
    tripleColumnMap,
} from "@/maps/component/tripleColumn";
import React from "react";

interface TripleColumnPageProps {}

const TripleColumnPage = ({}: TripleColumnPageProps) => {
    return (
        <Layout
            title="Triple Column - Supercrumble UI"
            menuMap={tripleColumnMap}
        >
            <div className="mb-[40px]">
                <PageHeader
                    title="Triple Column"
                    description="A layout component that is used to add a triple column layout as seen in most modern websites such as dashboards."
                />
            </div>

            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4>Usage</h4>
                <p className="mb-[30px]">
                    The triple column layout will split the page into three
                    columns, with the middle being the largest for the main
                    content. The triple column layout is also responsive and the
                    two side columns will collapse once the viewport is small
                    enough.
                </p>
                {/* PRIMARY BUTTON */}
                <ExampleBlock>
                    <div className="h-[200px]">
                        <div className="p-[10px] dark:border-green-800 dark:bg-green-600 border-green-400 border-[4px] bg-green-100 rounded-lg h-[100%] float-left w-[25%]">
                            Left column
                        </div>
                        <div className="p-[10px] border-primary-darker dark:bg-primary-base bg-primary-lighter border-[4px] rounded-lg h-[100%] inline-block w-[50%]">
                            Middle column
                        </div>
                        <div className="p-[10px] dark:border-pink-800 dark:bg-pink-600 border-pink-400 border-[4px] bg-pink-200 rounded-lg h-[100%] float-right w-[25%]">
                            Right column
                        </div>
                    </div>
                </ExampleBlock>
                <CodeBlock code={tripleColumnCode.usage} />
            </div>
            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="props"
                ></a>
                <h4>Props</h4>
                <p className="mb-[30px]">
                    Each column can be passed specific CSS styling and/or div
                    props such as onClick.
                </p>
                {/* PRIMARY BUTTON */}
                <ExampleBlock>
                    <div className="h-[200px]">
                        <div className="p-[10px] bg-red-400 rounded-lg h-[100%] float-left w-[25%]">
                            Left column
                        </div>
                        <div
                            onClick={() => console.log("Clicked")}
                            className="p-[10px] border-primary-darker dark:bg-primary-base bg-primary-lighter border-[4px] rounded-lg h-[100%] inline-block w-[50%]"
                        >
                            Middle column
                        </div>
                        <div className="p-[10px] dark:border-pink-800 dark:bg-pink-600 border-pink-400 border-[4px] bg-pink-200 rounded-lg h-[100%] float-right w-[25%]">
                            Right column
                        </div>
                    </div>
                </ExampleBlock>
                <CodeBlock code={tripleColumnCode.props} />
            </div>
            <PageStepper currentPage="triple_column" />
        </Layout>
    );
};

export default TripleColumnPage;
