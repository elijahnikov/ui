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
                <h1 className="w-[80%]">{title}</h1>
                <div className="ml-4 relative top-3">
                    {githubLink && (
                        <Badge variant={"solid"} size={"sm"}>
                            <BadgeIcon icon={BsGithub} />
                            <BadgeLabel>{title}</BadgeLabel>
                        </Badge>
                    )}
                </div>
            </div>
            <p className="text-lg dark:text-slate-400 text-slate-500">
                {description}
            </p>

            <div className="mt-[15px] dark:border-slate-700 border-b-[1px]" />
        </>
    );
};

export default PageHeader;
