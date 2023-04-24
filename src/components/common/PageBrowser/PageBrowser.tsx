import { MenuMap } from "@/maps/component/types";
import Link from "next/link";
import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

interface PageBrowserProps {
    menuMap: MenuMap[];
}

const PageBrowser = ({ menuMap }: PageBrowserProps) => {
    return (
        <div className="hidden lg:block space-y-2 float-right right-0 fixed w-[20%] h-[90vh] text-left min-w-[20%] mx-auto p-[40px] min-h-[100vh]">
            <p className="font-semibold">On this page</p>
            <div className="block space-y-2 w-full">
                {/* <AiFillCaretRight className="mt-[4px] mr-[4px]" />
                <Link
                    href={"#usage"}
                    className="hover:underline dark:text-slate-400 cursor-pointer text-slate-700"
                >
                    Usage
                </Link> */}
                {menuMap.map((entry: MenuMap) => (
                    <div className="flex" key={entry.href}>
                        <AiFillCaretRight className="mt-[4px] mr-[4px]" />
                        <Link
                            href={entry.href}
                            className="hover:underline dark:text-slate-400 cursor-pointer text-slate-700"
                        >
                            {entry.label}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PageBrowser;