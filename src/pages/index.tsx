import APIReferenceTable from "@/components/common/APIReferenceTable/APIReferenceTable";
import Layout from "@/components/common/Layout/Layout";
import Error from "@/components/ui/Error/Error";

export default function Home() {
    return (
        <Layout>
            <APIReferenceTable
                title="Accordion"
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
            <APIReferenceTable
                title="Accordion.Trigger"
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
