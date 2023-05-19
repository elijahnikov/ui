import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import PageStepper from "@/components/common/PageStepper/PageStepper";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import Kbd from "@/components/ui/Kbd/Kbd";
import { kbdCode, kbdMenuMap } from "@/maps/component/kbd";
import React from "react";

interface KbdPageProps {}

const KbdPage = ({}: KbdPageProps) => {
    return (
        <Layout title="Keyboard Key - Supercrumble UI" menuMap={kbdMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Keybord Key"
                    description="Show which key or combination of keys perform a specific action, like focusing an input field or saving a file."
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
                    <Kbd meta>S</Kbd>
                </ExampleBlock>
                <CodeBlock code={kbdCode.usage} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="multi"
                ></a>
                <h4>Chaining modifiers</h4>
                <p className="mb-[30px]">
                    Modifiers will appear in the keyboard component render by
                    the order they are supplied to the{" "}
                    <span className="text-sm bg-sky-light dark:bg-slate-800 rounded-md p-[2px]">{`<Kbd/>`}</span>{" "}
                    component.
                </p>
                <ExampleBlock className="space-y-3">
                    <Kbd shift meta alt />
                    <Kbd meta alt shift />
                </ExampleBlock>
                <CodeBlock code={kbdCode.multi} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="tooltip"
                ></a>
                <h4>Tooltip</h4>
                <p className="mb-[30px]">
                    Supply the tooltip prop to the keyboard component to show
                    what each keyboard key signifies.
                </p>
                <ExampleBlock className="space-y-3">
                    <Kbd shift meta alt tooltip />
                </ExampleBlock>
                <CodeBlock code={kbdCode.multi} />
            </div>
            <PageStepper currentPage="kbd" />
        </Layout>
    );
};

export default KbdPage;
