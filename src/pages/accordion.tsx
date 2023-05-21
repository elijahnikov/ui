import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Accordion from "@/components/ui/Accordion/Accordion";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import { accordionCode, accordionMenuMap } from "@/maps/component/accordion";
import React from "react";

interface AccordionPageProps {}

const AccordionPage = ({}: AccordionPageProps) => {
    return (
        <Layout title="Accordion - Supercrumble UI" menuMap={accordionMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Accordion"
                    description="A vertically stacked set of interactive headings that each reveal a section of content."
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
                    <Accordion>
                        <Accordion.Item>
                            <Accordion.Trigger value="1">
                                Click here to reveal
                            </Accordion.Trigger>
                            <Accordion.Content value="1">
                                Content is then revealed
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item>
                            <Accordion.Trigger value="2">
                                Lightweight and animated
                            </Accordion.Trigger>
                            <Accordion.Content value="2">
                                <h1>Show various content</h1>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion>
                </ExampleBlock>
                <CodeBlock code={accordionCode.usage} />
            </div>
        </Layout>
    );
};

export default AccordionPage;
