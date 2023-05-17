import clxsm from "@/lib/clsxm";
import React, { HTMLAttributes } from "react";

interface SpinnerProps extends HTMLAttributes<HTMLSpanElement> {
    size?: "sm" | "base" | "large";
}

const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
    ({ children, className, size, ...props }, ref) => {
        let sizer = size === "base" ? 6 : size === "sm" ? 4 : 8;
        return (
            <span className={clxsm(className, `block h-${sizer} w-${sizer}`)}>
                <svg
                    className="animate-spin"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className={`${className} fill-current`}
                        d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
                    ></path>
                </svg>
                <span className="sr-only">Loading</span>
            </span>
        );
    }
);

Spinner.displayName = "Spinner;";

export default Spinner;
