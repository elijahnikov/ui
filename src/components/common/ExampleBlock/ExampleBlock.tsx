import React, { HTMLAttributes } from "react";

interface ExampleBlockProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ExampleBlock = React.forwardRef<HTMLDivElement, ExampleBlockProps>(
    ({ children, className, ...props }) => {
        return (
            <div
                className={`${className} bg-gradient-to-r from-indigo-100 to-purple-200 dark:from-slate-500 dark:to-slate-800 mt-[30px] mb-[30px] p-5 rounded-xl`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

ExampleBlock.displayName = "Example Block";

export default ExampleBlock;
