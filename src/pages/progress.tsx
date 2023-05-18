// React
import React from "react";

// Components
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import Progress from "@/components/ui/Progress/Progress";
import { progressCode, progressMenuMap } from "@/maps/component/progress";

interface ProgressPageProps {}

const ProgressPage = ({}: ProgressPageProps) => {
    return (
        <Layout title="Progress - Supercrumble UI" menuMap={progressMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Progress"
                    description="Displays an indicator showing the completion progress of a task."
                    githubLink="/"
                />
            </div>
            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4>Usage</h4>
                <p className="mb-[30px]">
                    The progress bar takes in a number from 0-100 and will also
                    stretch to fit its container.
                </p>
                <ExampleBlock>
                    <Progress value={20} />
                </ExampleBlock>
                <CodeBlock code={progressCode.usage} />
            </div>
        </Layout>
    );
};

export default ProgressPage;
