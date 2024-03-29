// Types
import { componentMap, ComponentType } from "@/maps/componentMap";

// Next
import Link from "next/link";

// React
import { useEffect, useState } from "react";

const ComponentsBar = () => {
    const [currentPath, setCurrentPath] = useState<string>("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <div className="hidden lg:flex dark:border-gray-800 fixed overflow-y-scroll border-r-[1px] h-[92vh] min-w-[20%] w-[20%] dark:bg-black bg-white  mx-auto justify-center align-center p-[10px] float-left">
            <div className="mt-[40px] absolute right-10 w-[60%] ">
                <div className="mb-[20px]">
                    <div className="pb-[10px]">
                        <p className="font-semibold dark:text-white text-slate-700">
                            Layout
                        </p>
                    </div>
                    {componentMap
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .filter((c) => {
                            return c.type === "layout";
                        })
                        .map((component: ComponentType) => (
                            <div className="mb-[10px]" key={component.id}>
                                <div>
                                    {!component.disabled ? (
                                        <Link
                                            href={component.href}
                                            key={component.id}
                                            className={`${
                                                currentPath ===
                                                    component.href &&
                                                "bg-slate-100 dark:bg-gray-800 rounded-md"
                                            } p-[5px] pl-[8px] mb-[5px] dark:text-white text-slate-700 hover:underline flex align-center text-sm items-center`}
                                        >
                                            <p>{component.title}</p>
                                        </Link>
                                    ) : (
                                        <div
                                            key={component.id}
                                            className={`dark:text-slate-500 text-sm text-slate-400 cursor-not-allowed p-[5px] pl-[8px] mb-[8px] hover:underline  flex align-center items-center`}
                                        >
                                            <p>{component.title}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    <div className="mt-[30px] pb-[10px]">
                        <p className="font-semibold dark:text-white text-slate-700">
                            Components
                        </p>
                    </div>
                    {componentMap
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .filter((c) => {
                            return c.type === "component";
                        })
                        .map((component: ComponentType) => (
                            <div className="mb-[10px]" key={component.id}>
                                <div>
                                    {!component.disabled ? (
                                        <Link
                                            href={component.href}
                                            key={component.id}
                                            className={`${
                                                currentPath ===
                                                    component.href &&
                                                "bg-slate-100 dark:bg-gray-800 rounded-md"
                                            } p-[5px] pl-[8px] mb-[5px] dark:text-white text-slate-700 hover:underline flex align-center text-sm items-center`}
                                        >
                                            <p>{component.title}</p>
                                        </Link>
                                    ) : (
                                        <div
                                            key={component.id}
                                            className={`dark:text-slate-500 text-sm text-slate-400 cursor-not-allowed p-[5px] pl-[8px] mb-[8px] hover:underline  flex align-center items-center`}
                                        >
                                            <p>{component.title}</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    <div className="h-[20px]" />
                </div>
            </div>
        </div>
    );
};

export default ComponentsBar;
