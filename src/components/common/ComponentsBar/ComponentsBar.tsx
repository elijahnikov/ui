import {
    componentMap,
    ComponentSectionMapType,
    ComponentType,
} from "@/maps/componentMap";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const ComponentsBar = () => {
    const [currentPath, setCurrentPath] = useState<string>("");

    useEffect(() => {
        setCurrentPath(window.location.pathname);
    }, []);

    return (
        <div className="hidden md:flex mt-[00px] dark:border-gray-800 border-r-[1px] h-[100vh] min-w-[20%] w-[20%] dark:bg-black bg-white  mx-auto justify-center align-center flex p-[10px] float-left">
            <div className="mt-[40px] w-[60%] ">
                <div className="mt-[10px]">
                    {componentMap.map(
                        (componentSection: ComponentSectionMapType) => (
                            <div
                                className="mb-[30px]"
                                key={componentSection.id}
                            >
                                <div className="pb-[10px] mb-[10px]">
                                    <p className="font-semibold dark:text-white text-slate-700">
                                        {componentSection.title}
                                    </p>
                                </div>
                                <div>
                                    {componentSection.components
                                        .sort((a, b) =>
                                            a.title.localeCompare(b.title)
                                        )
                                        .map((component: ComponentType) =>
                                            !component.disabled ? (
                                                <Link
                                                    href={component.href}
                                                    key={component.id}
                                                    className={`${
                                                        currentPath ===
                                                            component.href &&
                                                        "bg-slate-100 dark:bg-gray-800 rounded-md"
                                                    } p-[5px] pl-[8px] mb-[8px] dark:text-white text-slate-700 hover:underline  flex align-center items-center`}
                                                >
                                                    <p>{component.title}</p>
                                                </Link>
                                            ) : (
                                                <div
                                                    key={component.id}
                                                    className={`dark:text-slate-500 text-slate-400 cursor-not-allowed p-[5px] pl-[8px] mb-[8px] hover:underline  flex align-center items-center`}
                                                >
                                                    <p>{component.title}</p>
                                                </div>
                                            )
                                        )}
                                </div>
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ComponentsBar;
