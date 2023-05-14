import Layout from "@/components/common/Layout/Layout";
import InputArea from "@/components/ui/InpuArea/InputArea";
import { Select, SelectItem } from "@/components/ui/Select/Select";

import TripleColumn from "@/components/ui/TripleColumn/TripleColumn";
import { useState } from "react";

export default function Home() {
    const [clearableText, setClearableText] = useState<string>("");
    const [value, setValue] = useState("");
    return (
        <Layout>
            <Select
                searchable
                value={value}
                setValue={setValue}
                label="Select a fruit"
                placeholder="Fruits"
            >
                <SelectItem value="Apple">Apple</SelectItem>
                <SelectItem value="Banana">Banana</SelectItem>
                <SelectItem value="Orange">Orange</SelectItem>
                <SelectItem value="Pear">Pear</SelectItem>
                <SelectItem value="Strawberry">Strawberry</SelectItem>
            </Select>
        </Layout>
    );
}
