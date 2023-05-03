import Layout from "@/components/common/Layout/Layout";
import InputArea from "@/components/ui/InpuArea/InputArea";
import { useState } from "react";

export default function Home() {
    const [clearableText, setClearableText] = useState<string>("");

    return (
        <Layout>
            <h1>hello</h1>
        </Layout>
    );
}
