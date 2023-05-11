import Layout from "@/components/common/Layout/Layout";
import InputArea from "@/components/ui/InpuArea/InputArea";
import Select from "@/components/ui/Select/Select";
import TripleColumn from "@/components/ui/TripleColumn/TripleColumn";
import { useState } from "react";

export default function Home() {
    const [clearableText, setClearableText] = useState<string>("");

    return (
        <Layout>
            <h1>hello</h1>
            <Select
                defaultValue="test2"
                options={[
                    { value: "test1", label: "Test1" },
                    { value: "test2", label: "Test2" },
                    { value: "test3", label: "Test3" },
                ]}
            />
        </Layout>
    );
}
