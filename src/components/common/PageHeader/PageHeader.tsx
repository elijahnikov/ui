import React from "react";

interface PageHeaderProps {
    title: string;
    description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
    return (
        <>
            <h1>{title}</h1>
            <p className="text-lg dark:text-slate-400 text-slate-500">
                {description}
            </p>
            <div className="mt-[15px] dark:border-slate-700 border-b-[1px]" />
        </>
    );
};

export default PageHeader;
