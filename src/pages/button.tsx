import CodeBlock from "@/components/common/CodeBlock/CodeBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Button from "@/components/ui/Button/Button";
import { buttonCode } from "@/maps/componentCode/buttonCode";
interface buttonProps {}

// const buttonCode = `import Button from "@/components/ui/Button/Button";

// <Button loading={true} intent="primary">
//     Outline
// </Button>`;

const ButtonPage = ({}: buttonProps) => {
    return (
        <Layout title="Button - Supercrumble UI">
            <div className="mb-[40px]">
                <PageHeader
                    title="Button"
                    description={`A control that triggers an action. Button labels should
					express what action will occur when the user interacts with
					it.`}
                />
            </div>
            <div>
                <h4 className="mb-[30px]">Usage</h4>
                {/* PRIMARY BUTTON */}
                <div className="mb-[30px] border-[1px] p-5 dark:border-slate-700 rounded-xl">
                    <Button loading={false} intent="primary">
                        Primary
                    </Button>
                </div>
                <CodeBlock code={buttonCode.primary} />
            </div>

            <div className="mt-[30px]">
                <h4 className="mb-[30px]">Variants</h4>
                <div className="border-[1px] mb-[30px] p-5 rounded-xl dark:border-slate-700 space-x-5">
                    <Button loading={false} intent={"primary"}>
                        Primary
                    </Button>
                    <Button loading={false} intent={"secondary"}>
                        Secondary
                    </Button>
                    <Button loading={false} intent={"outline"}>
                        Outline
                    </Button>
                    <Button loading={false} intent={"transparent"}>
                        Transparent
                    </Button>
                    <Button loading={false} disabled intent={"primary"}>
                        Disabled
                    </Button>
                </div>
                <CodeBlock code={buttonCode.variants} />
            </div>

            <div className="mt-[30px]">
                <h4 className="mb-[30px]">Sizes</h4>
                <div className="border-[1px] mb-[30px] p-5 rounded-xl dark:border-slate-700 space-x-5 [&:nth-child(4)]:space-x-0">
                    <Button loading={false} intent={"primary"} size={"sm"}>
                        Small
                    </Button>
                    <Button loading={false} intent={"primary"} size={"base"}>
                        Default
                    </Button>
                    <Button loading={false} intent={"primary"} size={"large"}>
                        Large
                    </Button>
                    <div>
                        <Button
                            className=""
                            loading={false}
                            intent={"primary"}
                            fullWidth
                            size={"base"}
                        >
                            Full Width
                        </Button>
                    </div>
                </div>
                <CodeBlock code={buttonCode.variants} />
            </div>
        </Layout>
    );
};

export default ButtonPage;
