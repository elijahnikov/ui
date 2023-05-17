// React
import React from "react";

// Components
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import Tooltip from "@/components/ui/Tooltip/Tooltip";
import Button from "@/components/ui/Button/Button";

// Data
import { tooltipCode, tooltipMenuMap } from "@/maps/component/tooltip";
import Input from "@/components/ui/Input/Input";
import PageStepper from "@/components/common/PageStepper/PageStepper";

interface TooltipPageProps {}

const TooltipPage = ({}: TooltipPageProps) => {
    return (
        <Layout title="Tooltip - Supercrumble UI" menuMap={tooltipMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Tooltip"
                    description="A popup that, upon mouse hover, displays information related to the element it is attached to."
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
                    <Tooltip>
                        <Tooltip.Trigger>
                            <Button>Hover me</Button>
                        </Tooltip.Trigger>
                        <Tooltip.Content>Hello</Tooltip.Content>
                    </Tooltip>
                </ExampleBlock>
                <CodeBlock code={tooltipCode.usage} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="children"
                ></a>
                <h4>Children</h4>
                <p className="mb-[30px]">
                    Any JSX and even your own React components can be passed to{" "}
                    <span className="text-sm bg-sky-light dark:bg-slate-800 rounded-md p-[2px]">
                        {`<Tooltip.Content/>`}
                    </span>
                    .
                </p>
                <ExampleBlock>
                    <Tooltip>
                        <Tooltip.Trigger>
                            <h4>Pass your own components</h4>
                        </Tooltip.Trigger>
                        <Tooltip.Content>
                            <Input placeholder="Try typing here!" />
                        </Tooltip.Content>
                    </Tooltip>
                </ExampleBlock>
                <CodeBlock code={tooltipCode.children} />
            </div>
            <PageStepper currentPage="tooltip" />
        </Layout>
    );
};

export default TooltipPage;
