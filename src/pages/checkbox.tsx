import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Checkbox from "@/components/ui/Checkbox/Checkbox";
import { checkboxCode, checkboxMenuMap } from "@/maps/component/checkbox";
import React, { useState } from "react";

interface CheckboxPageProps {}

const CheckboxPage = ({}: CheckboxPageProps) => {
    const [checked, setChecked] = useState<boolean>(false);
    return (
        <Layout title="Checkbox - Supercrumble UI" menuMap={checkboxMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Checkbox"
                    description="A control that toggles between two options, checked or unchecked."
                />
            </div>
            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4 className="mb-[30px]">Usage</h4>
                <div className="mb-[30px] border-[1px] p-5 dark:border-slate-700 rounded-xl">
                    <Checkbox
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                        text="Default checkbox"
                    />
                </div>
                <CodeBlock code={checkboxCode.default} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="disabled"
                ></a>
                <h4 className="mb-[30px]">Disabled</h4>
                <div className="mb-[30px] border-[1px] space-y-5 p-5 dark:border-slate-700 rounded-xl">
                    <Checkbox disabled text="Disabled" />
                    <Checkbox disabled checked={true} text="Disabled checked" />
                </div>
                <CodeBlock code={checkboxCode.disabled} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="label"
                ></a>
                <h4 className="mb-[30px]">Label</h4>
                <div className="mb-[30px] border-[1px] space-y-5 p-5 dark:border-slate-700 rounded-xl">
                    <Checkbox label="Label" text="Checkbox with label" />
                </div>
                <CodeBlock code={checkboxCode.label} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="fullWidth"
                ></a>
                <h4 className="mb-[30px]">Full width</h4>
                <div className="mb-[30px] border-[1px] space-y-5 p-5 dark:border-slate-700 rounded-xl">
                    <Checkbox fullWidth text="Checkbox with full width" />
                </div>
                <CodeBlock code={checkboxCode.fullWidth} />
            </div>
            <GitHubRedirect
                page="Checkbox"
                href="https://github.com/elijahnikov/ui/blob/main/src/components/ui/Checkbox/Checkbox.tsx"
            />
        </Layout>
    );
};

export default CheckboxPage;
