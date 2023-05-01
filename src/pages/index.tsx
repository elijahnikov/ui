import Layout from "@/components/common/Layout/Layout";
import InputArea from "@/components/ui/InpuArea/InputArea";
import { useState } from "react";

export default function Home() {
    const [clearableText, setClearableText] = useState<string>("");

    return (
        <Layout>
            {/* <h1>hello</h1> */}
            <div className="w-[500px]">
                <InputArea
                    errorText="This is an error it will hopefully wrap"
                    label={"Description"}
                    value={clearableText}
                    change={setClearableText}
                    clearable
                    placeholder="enter"
                />
            </div>
        </Layout>
    );
}
