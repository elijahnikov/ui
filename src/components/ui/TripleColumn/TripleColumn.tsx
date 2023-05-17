import clxsm from "@/lib/clsxm";
import React, { HTMLAttributes } from "react";

interface TripleColumnProps {
    children: React.ReactNode;
}

interface LeftProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

interface MiddleProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

interface RightProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

const TripleColumn = ({ children }: TripleColumnProps) => {
    return (
        <div className="h-[100%]">
            <div className="mx-auto">
                <div className="absolute flex w-full">{children}</div>
            </div>
        </div>
    );
};

const Left = React.forwardRef<HTMLDivElement, LeftProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={clxsm(
                    className,
                    " hidden lg:flex dark:border-gray-800 fixed h-[100vh] min-w-[20%] w-[20%] dark:bg-black float-left"
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

const Middle = React.forwardRef<HTMLDivElement, MiddleProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={clxsm(
                    className,
                    "md:ml-[20%] relative left-30 w-[80%] h-[90vh] min-w-[70%] md:min-w-[60%] md:w-[60%] flex mx-auto justify-center min-h-[100vh]"
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

const Right = React.forwardRef<HTMLDivElement, RightProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={clxsm(
                    className,
                    "hidden lg:block float-right right-0 fixed w-[20%] h-[90vh] min-w-[20%] min-h-[100vh]"
                )}
                {...props}
            >
                {children}
            </div>
        );
    }
);

Left.displayName = "Left";
Middle.displayName = "Middle";
Right.displayName = "Right";

TripleColumn.Left = Left;
TripleColumn.Middle = Middle;
TripleColumn.Right = Right;

export default TripleColumn;
