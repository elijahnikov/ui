import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Checkbox from "@/components/ui/Checkbox/Checkbox";
import { checkboxCode, checkboxMenuMap } from "@/maps/component/checkbox";
import React, { useState } from "react";
import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import PageStepper from "@/components/common/PageStepper/PageStepper";

interface CheckboxPageProps {}

const CheckboxPage = ({}: CheckboxPageProps) => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <Layout title="Checkbox - Supercrumble UI" menuMap={checkboxMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Checkbox"
                    description="A control that toggles between two options, checked or unchecked."
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
                    <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        text="Default checkbox"
                    />
                </ExampleBlock>
                <CodeBlock code={checkboxCode.default} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="disabled"
                ></a>
                <h4 className="mb-[30px]">Disabled</h4>
                <ExampleBlock className="space-y-5">
                    <Checkbox disabled text="Disabled" />
                    <Checkbox disabled checked={true} text="Disabled checked" />
                </ExampleBlock>
                <CodeBlock code={checkboxCode.disabled} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="label"
                ></a>
                <h4 className="mb-[30px]">Label</h4>
                <ExampleBlock>
                    <Checkbox label="Label" text="Checkbox with label" />
                </ExampleBlock>
                <CodeBlock code={checkboxCode.label} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="fullWidth"
                ></a>
                <h4 className="mb-[30px]">Full width</h4>
                <ExampleBlock>
                    <Checkbox fullWidth text="Checkbox with full width" />
                </ExampleBlock>
                <CodeBlock code={checkboxCode.fullWidth} />
            </div>
            <PageStepper currentPage="checkbox" />
        </Layout>
    );
};

export default CheckboxPage;
