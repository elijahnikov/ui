import { useState } from "react";

// Components
import ExampleBlock from "@/components/common/ExampleBlock/ExampleBlock";
import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import CodeBlock from "@/components/ui/CodeBlock/CodeBlock";

// Select
import { Select, SelectItem } from "@/components/ui/Select/Select";

// Maps
import { selectCode, selectMenuMap } from "@/maps/component/select";
import GitHubRedirect from "@/components/common/GitHubRedirect/GitHubRedirect";

interface SelectPageProps {}

const SelectPage = ({}: SelectPageProps) => {
    const [selectedFruit, setSelectedFruit] = useState<string>("");
    const [yesNo, setYesNo] = useState<string>("");

    return (
        <Layout title="Select - Supercrumble UI" menuMap={selectMenuMap}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Select"
                    description="Displays a list of options for the user to pick from, triggered by a button."
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
                        <SelectItem value="Apple">Apple</SelectItem>
                        <SelectItem value="Banana">Banana</SelectItem>
                        <SelectItem value="Orange">Orange</SelectItem>
                        <SelectItem value="Pear">Pear</SelectItem>
                        <SelectItem value="Strawberry">Strawberry</SelectItem>
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
                        <SelectItem value="Yes">Yes</SelectItem>
                        <SelectItem value="No">No</SelectItem>
                    </Select>
                </ExampleBlock>
                <CodeBlock code={selectCode.label} />
            </div>
            <GitHubRedirect page="Select" href="" />
        </Layout>
    );
};

export default SelectPage;
