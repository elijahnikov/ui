import React, { HTMLAttributes } from "react";

interface ExampleBlockProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ExampleBlock = React.forwardRef<HTMLDivElement, ExampleBlockProps>(
    ({ children, className, ...props }) => {
        return (
            <div
                className={`${className} mt-[30px] mb-[30px] border-[1px] p-5 dark:border-slate-700 rounded-xl`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

ExampleBlock.displayName = "Example Block";

export default ExampleBlock;
