import APIReferenceTable from "@/components/common/APIReferenceTable/APIReferenceTable";
import Layout from "@/components/common/Layout/Layout";
import Error from "@/components/ui/Error/Error";

export default function Home() {
    return (
        <Layout>
            <APIReferenceTable
                data={[
                    {
                        propName: "children",
                        tooltip: "hello",
                        type: "React Element",
                        default: "-",
                    },
                    {
                        propName: "children",
                        tooltip: "hello",
                        type: "React Element",
                        default: "-",
                    },
                ]}
            />
        </Layout>
    );
}
