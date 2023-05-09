import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import React from "react";

interface TripleColumnPageProps {}

const TripleColumnPage = ({}: TripleColumnPageProps) => {
    return (
        <Layout title="Triple Column - Supercrumble UI" menuMap={[]}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Triple Column"
                    description="A layout component that is used to add a triple column layout as seen in most modern websites such as dashboards."
                />
            </div>
        </Layout>
    );
};

export default TripleColumnPage;
