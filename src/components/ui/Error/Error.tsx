import clxsm from "@/lib/clsxm";
import React from "react";
import { BiInfoCircle } from "react-icons/bi";

interface ErrorProps {
    label?: boolean | string;
    children?: React.ReactNode;
    size?: "sm" | "base" | "large";
    error?: {
        message: string;
        action: string;
        link: string;
    };
}

const Error = ({
    label = "Error",
    children,
    error,
    size = "base",
}: ErrorProps) => {
    return (
        <div
            className={clxsm(
                `${size === "sm" && "text-sm"}`,
                `${size === "base" && "text-md"}`,
                `${size === "large" && "text-lg"}`,
                "flex"
            )}
        >
            <BiInfoCircle
                className={clxsm(
                    `${size === "sm" && "h-4 w-4 mt-[1px]"}`,
                    `${size === "base" && "h-6 w-6"}`,
                    `${size === "large" && "h-7 w-7"}`,
                    "fill-red-500 mr-1"
                )}
            />
            {label && <p className="font-semibold text-red-500">{label}</p>}
            {children && (
                <span className="flex text-red-500">
                    :<p className="text-red-500 ml-1">{children}</p>
                </span>
            )}
            {error && (
                <span className="flex text-red-500">
                    :<p className="text-red-500 ml-1">{error.message}</p>
                    <a className="underline ml-1" href={error.link}>
                        {error.action}
                    </a>
                </span>
            )}
        </div>
    );
};

export default Error;
