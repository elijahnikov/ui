import React, { HTMLAttributes } from "react";

interface ExampleBlockProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const ExampleBlock = React.forwardRef<HTMLDivElement, ExampleBlockProps>(
    ({ children, className, ...props }) => {
        return (
            <div
                className={`${className} bg-gradient-to-r dark:from-indigo-400 dark:to-purple-500 from-indigo-100 to-purple-200 mt-[30px] mb-[30px] p-5 rounded-xl`}
                {...props}
            >
                {children}
            </div>
        );
    }
);

ExampleBlock.displayName = "Example Block";

export default ExampleBlock;
