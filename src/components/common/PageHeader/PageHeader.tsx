import React from "react";

interface PageHeaderProps {
    title: string;
    description: string;
}

const PageHeader = ({ title, description }: PageHeaderProps) => {
    return (
        <>
            <h3>{title}</h3>
            <p>{description}</p>
        </>
    );
};

export default PageHeader;
