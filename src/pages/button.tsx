import CodeBlock from "@/components/common/CodeBlock/CodeBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Button from "@/components/ui/Button/Button";
import { buttonCode } from "@/maps/componentCode/buttonCode";

interface buttonProps {}

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
                    <Button intent="primary">Primary</Button>
                </div>
                <CodeBlock code={buttonCode.primary} />
            </div>

            <div className="mt-[30px]">
                <h4 className="mb-[30px]">Variants</h4>
                <div className="border-[1px] mb-[30px] p-5 rounded-xl dark:border-slate-700 space-x-5">
                    <Button intent={"primary"}>Primary</Button>
                    <Button intent={"secondary"}>Secondary</Button>
                    <Button intent={"outline"}>Outline</Button>
                    <Button intent={"transparent"}>Transparent</Button>
                    <Button disabled intent={"primary"}>
                        Disabled
                    </Button>
                </div>
                <CodeBlock code={buttonCode.variants} />
            </div>

            <div className="mt-[30px]">
                <h4 className="mb-[30px]">Sizes</h4>
                <div className="border-[1px] mb-[30px] p-5 rounded-xl dark:border-slate-700 space-x-5">
                    <Button intent={"primary"} size={"sm"}>
                        Small
                    </Button>
                    <Button intent={"primary"} size={"base"}>
                        Default
                    </Button>
                    <Button intent={"primary"} size={"large"}>
                        Large
                    </Button>
                    <div className="mt-[20px]">
                        <Button
                            className="ml-[-20px]"
                            intent={"primary"}
                            fullWidth
                            size={"base"}
                        >
                            Full Width
                        </Button>
                    </div>
                </div>
                <CodeBlock code={buttonCode.sizes} />
            </div>

            <div className="mt-[30px]">
                <h4 className="">Loading state</h4>
                <p className="mb-[30px]">
                    You can pass the loading prop to the button component to
                    signify its loading state, for example, when a user performs
                    a submit action.
                </p>
                <div className="border-[1px] mb-[30px] p-5 rounded-xl dark:border-slate-700 space-x-5">
                    <Button intent={"primary"} loading>
                        Primary
                    </Button>
                    <Button intent={"secondary"} loading>
                        Primary
                    </Button>
                </div>
                <CodeBlock code={buttonCode.loadingState} />
            </div>
        </Layout>
    );
};

export default ButtonPage;
