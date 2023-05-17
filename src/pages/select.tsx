import { useState } from "react";

// Components
import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";

// Select
import { Select } from "@/components/ui/Select/Select";

// Maps
import { selectCode, selectMenuMap } from "@/maps/component/select";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";
import PageStepper from "@/components/common/PageStepper/PageStepper";

interface SelectPageProps {}

const SelectPage = ({}: SelectPageProps) => {
    const [selectedFruit, setSelectedFruit] = useState<string>("");
    const [searchableFruit, setSearchableFruit] = useState<string>("");
    const [yesNo, setYesNo] = useState<string>("");

    return (
        <Layout title="Select - Supercrumble UI" menuMap={selectMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Select"
                    description="Displays a list of options for the user to pick from, triggered by a button."
                    githubLink="/"
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
                    <Select
                        value={selectedFruit}
                        setValue={setSelectedFruit}
                        placeholder="Fruits"
                    >
                        <Select.Item value="Apple">Apple</Select.Item>
                        <Select.Item value="Banana">Banana</Select.Item>
                        <Select.Item value="Orange">Orange</Select.Item>
                        <Select.Item value="Pear">Pear</Select.Item>
                        <Select.Item value="Strawberry">Strawberry</Select.Item>
                    </Select>
                </ExampleBlock>
                <CodeBlock code={selectCode.usage} />
            </div>

            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="label"
                ></a>
                <h4 className="mb-[30px]">Label</h4>
                <ExampleBlock className="space-x-5">
                    <Select
                        label="Label for select"
                        value={yesNo}
                        setValue={setYesNo}
                        placeholder="Agree"
                    >
                        <Select.Item value="Yes">Yes</Select.Item>
                        <Select.Item value="No">No</Select.Item>
                    </Select>
                </ExampleBlock>
                <CodeBlock code={selectCode.label} />
            </div>
            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="searchable"
                ></a>
                <h4>Searchable</h4>
                <p className="mb-[30px]">
                    For select lists that contain a lot of options, the
                    searchable prop can be passed to add a search field.
                </p>
                <ExampleBlock className="space-x-5">
                    <Select
                        searchable
                        value={searchableFruit}
                        setValue={setSearchableFruit}
                        placeholder="Fruits"
                    >
                        <Select.Item value="Apple">Apple</Select.Item>
                        <Select.Item value="Banana">Banana</Select.Item>
                        <Select.Item value="Orange">Orange</Select.Item>
                        <Select.Item value="Pear">Pear</Select.Item>
                        <Select.Item value="Strawberry">Strawberry</Select.Item>
                    </Select>
                </ExampleBlock>
                <CodeBlock code={selectCode.searchable} />
            </div>
            <div className="mt-[50px]">
                <a
                    className="relative h-[20px] invisible top-[-80px]"
                    id="disabled"
                ></a>
                <h4 className="mb-[30px]">Disabled</h4>
                <ExampleBlock className="space-x-5">
                    <Select
                        disabled
                        value={searchableFruit}
                        setValue={setSearchableFruit}
                        placeholder="Fruits"
                    >
                        <Select.Item value="Apple">Apple</Select.Item>
                        <Select.Item value="Banana">Banana</Select.Item>
                        <Select.Item value="Orange">Orange</Select.Item>
                        <Select.Item value="Pear">Pear</Select.Item>
                        <Select.Item value="Strawberry">Strawberry</Select.Item>
                    </Select>
                </ExampleBlock>
                <CodeBlock code={selectCode.disabled} />
            </div>
            <PageStepper currentPage="select" />
        </Layout>
    );
};

export default SelectPage;
