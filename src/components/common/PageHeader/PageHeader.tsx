import { Badge, BadgeIcon, BadgeLabel } from "@/components/ui/Badge/Badge";
import React from "react";
import { BsGithub } from "react-icons/bs";

interface PageHeaderProps {
    title: string;
    description: string;
    githubLink?: string;
}

const PageHeader = ({ title, description, githubLink }: PageHeaderProps) => {
    return (
        <>
            <div className="flex">
                <h1>{title}</h1>
            </div>
            <p className="text-lg dark:text-slate-400 text-slate-500">
                {description}
            </p>
            <div className="mt-[10px] mb-[10px]">
                {githubLink && (
                    <Badge variant={"solid"} size={"sm"}>
                        <BadgeIcon icon={BsGithub} />
                        <BadgeLabel>Source</BadgeLabel>
                    </Badge>
                )}
            </div>
            <div className="mt-[15px] dark:border-slate-700 border-b-[1px]" />
        </>
    );
};

export default PageHeader;
