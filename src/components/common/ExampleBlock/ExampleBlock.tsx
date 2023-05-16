import React, { HTMLAttributes } from "react";

interface ExampleBlockProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ExampleBlock = React.forwardRef<HTMLDivElement, ExampleBlockProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={`${className} border-[1px] dark:border-slate-800 mt-[30px] mb-[30px] p-5 rounded-lg`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

ExampleBlock.displayName = "Example Block";

export default ExampleBlock;
