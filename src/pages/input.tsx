import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import React from "react";

interface InputPageProps {}

const InputPage = ({}: InputPageProps) => {
    return (
        <Layout title="Input - Supercrumble UI">
            <div className="mb-[40px]">
                <PageHeader
                    title="Input"
                    description="An input component used to retrieve user input in the form of a text field"
                />
            </div>
        </Layout>
    );
};

export default InputPage;
