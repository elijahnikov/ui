import Layout from "@/components/common/Layout/Layout";
import PageHeader from "@/components/common/PageHeader/PageHeader";
import Input from "@/components/ui/Input/Input";
import React, { useEffect, useState } from "react";
import { Bs0Circle } from "react-icons/bs";

interface InputPageProps {}

const InputPage = ({}: InputPageProps) => {
    const [value, setValue] = useState<string>("");

    return (
        <Layout title="Input - Supercrumble UI">
            <div className="mb-[40px]">
                <PageHeader
                    title="Input"
                    description="An input component used to retrieve user input in the form of a text field"
                />
                <div className="mt-[20px] h-[500px] block">
                    <Input
                        label="Username"
                        placeholder="Enter your username..."
                        size={"base"}
                    />
                    <div className="h-[50px]" />
                    <Input
                        label={"Username"}
                        prefix={`https`}
                        suffix={"com"}
                        fullWidth
                        placeholder="Base"
                        size={"base"}
                    />
                </div>
                {value}
            </div>
        </Layout>
    );
};

export default InputPage;
