import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import React from "react";

interface TabsPageProps {}

const TabsPage = ({}: TabsPageProps) => {
    return (
        <Layout title="Tabs - Supercrumble UI" menuMap={[]}>
            <div className="mb-[40px]">
                <PageHeader
                    title="Tabs"
                    description="Sections of content that are displayed one at a time, depending on which tab is selected."
                />
            </div>
        </Layout>
    );
};

export default TabsPage;
