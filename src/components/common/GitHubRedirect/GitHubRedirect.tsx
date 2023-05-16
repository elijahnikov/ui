// React
import React from "react";

// ReactIcons
import { AiFillGithub } from "react-icons/ai";

interface GitHubRedirectProps {
    page: string;
    href: string;
}

const GitHubRedirect = ({ page, href }: GitHubRedirectProps) => {
    return (
        <a
            href={href}
            target="_self"
            className="dark:text-slate-500 text-slate-500 flex justify-center w-full mt-[50px] h-[150px] mb-[100px]"
        >
            <AiFillGithub className="h-5 w-5" />
            <p className="text-sm ml-2">{`View ${page} on GitHub.`}</p>
        </a>
    );
};

export default GitHubRedirect;
