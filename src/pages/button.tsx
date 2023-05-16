// Components
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";

// Button
import Button from "@/components/ui/Button/Button";

// Maps
import { buttonCode, buttonMenuMap } from "@/maps/component/button";

// Icons
import { AiFillSave, AiOutlineCloudDownload } from "react-icons/ai";
import PageStepper from "@/components/common/PageStepper/PageStepper";

interface buttonProps {}

const ButtonPage = ({}: buttonProps) => {
    return (
        <Layout title="Button - Supercrumble UI" menuMap={buttonMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Button"
                    description={`A control that triggers an action. Button labels should
					express what action will occur when the user interacts with
					it.`}
                />
            </div>
            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4 className="mb-[30px]">Usage</h4>
                {/* PRIMARY BUTTON */}
                <ExampleBlock>
                    <Button intent="primary">Primary</Button>
                </ExampleBlock>
                <CodeBlock code={buttonCode.primary} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="variants"
                ></a>
                <h4 className="mb-[30px]">Variants</h4>
                <ExampleBlock className="space-x-5">
                    <Button intent={"primary"}>Primary</Button>
                    <Button intent={"secondary"}>Secondary</Button>
                    <Button intent={"outline"}>Outline</Button>
                    <Button intent={"transparent"}>Transparent</Button>
                    <Button disabled intent={"primary"}>
                        Disabled
                    </Button>
                </ExampleBlock>
                <CodeBlock code={buttonCode.variants} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="sizes"
                ></a>
                <h4 className="mb-[30px]">Sizes</h4>
                <ExampleBlock className="space-x-5">
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
                </ExampleBlock>
                <CodeBlock code={buttonCode.sizes} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="loading-state"
                ></a>
                <h4 className="">Loading state</h4>
                <p className="mb-[30px]">
                    You can pass the loading prop to the button component to
                    signify its loading state, for example, when a user performs
                    a submit action.
                </p>
                <ExampleBlock className="space-x-5">
                    <Button intent={"primary"} loading>
                        Primary
                    </Button>
                    <Button intent={"secondary"} loading>
                        Primary
                    </Button>
                </ExampleBlock>
                <CodeBlock code={buttonCode.loadingState} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="button-with-icon"
                ></a>
                <h4 className="">Button with icon</h4>
                <p className="mb-[30px]">
                    {`You can add left or right icons to your Buttons by passing your chosen icon from the 
                    "react-icons" library in order to add meaning or give more context to specific button actions.`}
                </p>
                <ExampleBlock className="space-x-5">
                    <Button intent={"primary"} leftIcon={AiFillSave}>
                        Save
                    </Button>
                    <Button
                        intent={"secondary"}
                        rightIcon={AiOutlineCloudDownload}
                    >
                        Download
                    </Button>
                </ExampleBlock>
                <CodeBlock code={buttonCode.buttonWithIcon} />
            </div>
            <PageStepper currentPage="button" />
        </Layout>
    );
};

export default ButtonPage;
