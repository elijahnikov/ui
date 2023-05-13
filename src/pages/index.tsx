import Layout from "@/components/common/Layout/Layout";
import InputArea from "@/components/ui/InpuArea/InputArea";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectSearch,
} from "@/components/ui/Select/Select";

import TripleColumn from "@/components/ui/TripleColumn/TripleColumn";
import { useState } from "react";

export default function Home() {
    const [clearableText, setClearableText] = useState<string>("");
    const [value, setValue] = useState("Banana");
    return (
        <Layout>
            <Select
                value={value}
                setValue={setValue}
                label="Select a fruit"
                selectName="Fruits"
            >
                <SelectSearch />
                <SelectContent>
                    <SelectItem value="Apple">Apple</SelectItem>
                    <SelectItem value="Banana">Banana</SelectItem>
                    <SelectItem value="Orange">Orange</SelectItem>
                    <SelectItem value="Pear">Pear</SelectItem>
                    <SelectItem value="Strawberry">Strawberry</SelectItem>
                </SelectContent>
            </Select>
        </Layout>
    );
}
