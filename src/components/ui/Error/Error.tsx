import React from "react";
import { BiInfoCircle } from "react-icons/bi";

interface ErrorProps {
    label?: boolean | string;
    children?: React.ReactNode;
}

const Error = ({ label = "Error", children }: ErrorProps) => {
    return (
        <div className="flex">
            <BiInfoCircle className="fill-red-500 h-6 w-6 mr-1" />
            {label && <p className="font-semibold text-red-500">{label}</p>}
            {children && (
                <span className="flex text-red-500">
                    :<p className="text-red-500 ml-1">{children}</p>
                </span>
            )}
        </div>
    );
};

export default Error;
