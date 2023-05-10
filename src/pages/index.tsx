import Layout from "@/components/common/Layout/Layout";
import InputArea from "@/components/ui/InpuArea/InputArea";
import TripleColumn from "@/components/ui/TripleColumn/TripleColumn";
import { useState } from "react";

export default function Home() {
    const [clearableText, setClearableText] = useState<string>("");

    return (
        // <Layout>
        //     <h1>hello</h1>
        // </Layout>
        <TripleColumn>
            <TripleColumn.Left>
                <h1>test</h1>
            </TripleColumn.Left>
            <TripleColumn.Middle>
                <p>test1</p>
            </TripleColumn.Middle>
            <TripleColumn.Right>
                <p>test2</p>
            </TripleColumn.Right>
        </TripleColumn>
    );
}
