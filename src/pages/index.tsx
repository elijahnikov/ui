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
            <TripleColumn.Left className="bg-red-400">
                Left column
            </TripleColumn.Left>
            <TripleColumn.Middle onClick={() => console.log("Clicked")}>
                Middle column
            </TripleColumn.Middle>
            <TripleColumn.Right>Right column</TripleColumn.Right>
        </TripleColumn>
    );
}
