import CodeBlock from "@/components/common/CodeBlock/CodeBlock";
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
                />
            </div>
            <div>
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="usage"
                ></a>
                <h4 className="mb-[30px]">Usage</h4>
                <div className="mb-[30px] border-[1px] p-5 dark:border-slate-700 rounded-xl">
                    <Input placeholder="Placeholder..." />
                </div>
                <CodeBlock code={inputCode.default} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="sizes"
                ></a>
                <h4 className="mb-[30px]">Sizes</h4>
                <div className="border-[1px] mb-[30px] p-5 rounded-xl dark:border-slate-700 space-y-5">
                    <Input size="sm" placeholder="Small" />
                    <Input size="base" placeholder="Default" />
                    <Input size="large" placeholder="Large" />
                </div>
                <CodeBlock code={inputCode.sizes} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="disabled"
                ></a>
                <h4 className="mb-[30px]">Disabled</h4>
                <div className="border-[1px] mb-[30px] flex p-5 rounded-xl dark:border-slate-700">
                    <Input disabled placeholder="Disabled with placeholder" />
                    <Input disabled value={"Disabled with value"} />
                </div>
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
                <div className="border-[1px] mb-[30px] space-y-5 p-5 rounded-xl dark:border-slate-700">
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
                </div>
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
                <div className="border-[1px] mb-[30px] space-y-5 p-5 rounded-xl dark:border-slate-700">
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
                </div>
                <CodeBlock code={inputCode.clearable} />
            </div>
            <GitHubRedirect
                page="Input"
                href="https://github.com/elijahnikov/ui/blob/main/src/components/ui/Input/Input.tsx"
            />
        </Layout>
    );
};

export default InputPage;
