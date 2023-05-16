import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Input from "@/components/ui/Input/Input";
import { inputCode, inputMenuMap } from "@/maps/component/input";
import React, { useEffect, useState } from "react";
import {
    AiFillGithub,
    AiOutlineKey,
    AiOutlineMail,
    AiOutlineUpload,
} from "react-icons/ai";
import { Bs0Circle } from "react-icons/bs";
import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import PageStepper from "@/components/common/PageStepper/PageStepper";

interface InputPageProps {}

const InputPage = ({}: InputPageProps) => {
    const [clearableText, setClearableText] = useState<string>("");
    const [clearableWithSuffixText, setClearableWithSuffixText] =
        useState<string>("");
    return (
        <Layout title="Input - Supercrumble UI" menuMap={inputMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Input"
                    description="An input component used to retrieve user input in the form of a text field"
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
                    <Input placeholder="Placeholder..." />
                </ExampleBlock>
                <CodeBlock code={inputCode.default} />
                <ExampleBlock>
                    <Input label="Field" placeholder="Placeholder..." />
                </ExampleBlock>
                <CodeBlock code={inputCode.defaultWithLabel} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="sizes"
                ></a>
                <h4 className="mb-[30px]">Sizes</h4>
                <ExampleBlock className="space-y-5">
                    <Input size="sm" placeholder="Small" />
                    <Input size="base" placeholder="Default" />
                    <Input size="large" placeholder="Large" />
                </ExampleBlock>
                <CodeBlock code={inputCode.sizes} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="disabled"
                ></a>
                <h4 className="mb-[30px]">Disabled</h4>
                <ExampleBlock className="space-y-5">
                    <Input disabled placeholder="Disabled with placeholder" />
                    <Input disabled value={"Disabled with value"} />
                </ExampleBlock>
                <CodeBlock code={inputCode.disabled} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="prefixSuffix"
                ></a>
                <h4>Prefix and Suffix</h4>
                <p className="mb-[30px]">
                    Add a prefix and/or suffix in the form of text or icons to
                    your input fields to add further context or additional
                    information. Supports the use of icons from the popular
                    library ReactIcons.
                </p>
                <ExampleBlock className="space-y-5">
                    <Input placeholder="E-mail" prefix={AiOutlineMail} />
                    <Input
                        placeholder="Password"
                        suffix={AiOutlineKey}
                        type="password"
                    />
                    <Input
                        placeholder="Website"
                        prefix={"https://"}
                        suffix={".com"}
                    />
                    <Input
                        placeholder="Username"
                        prefix={"supercrumble.com/@"}
                    />
                </ExampleBlock>
                <CodeBlock code={inputCode.prefixSuffix} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="clearable"
                ></a>
                <h4>Clearable</h4>
                <p className="mb-[30px]">
                    Add the option to clear text with the a simple press of the
                    icon.
                </p>
                <ExampleBlock className="space-y-5">
                    <Input
                        value={clearableText}
                        change={setClearableText}
                        clearable
                        placeholder="Clearable"
                    />
                    <Input
                        fullWidth
                        value={clearableWithSuffixText}
                        change={setClearableWithSuffixText}
                        suffix={AiOutlineUpload}
                        clearable
                        placeholder="Clearable with suffix and full width"
                    />
                </ExampleBlock>
                <CodeBlock code={inputCode.clearable} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="errors"
                ></a>
                <h4>Errors</h4>
                <p className="mb-[30px]">
                    Show feedback when the user has inputed incorrectly.
                </p>
                <ExampleBlock className="space-y-5">
                    <Input error placeholder="Simple error" />
                    <Input
                        error
                        errorText="This is an example error, incorrect value etc."
                        placeholder="Error with text"
                    />
                    <Input
                        error
                        fullWidth
                        errorText="This is another example error; errors will wrap to match the width of the input component."
                        placeholder="Error with text"
                    />
                </ExampleBlock>
                <CodeBlock code={inputCode.error} />
            </div>
            <PageStepper currentPage="input" />
        </Layout>
    );
};

export default InputPage;
