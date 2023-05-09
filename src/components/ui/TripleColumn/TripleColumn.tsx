import React from "react";

interface TripleColumnProps {
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

const Left = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
};

const Middle = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
};

const Right = ({ children }: { children: React.ReactNode }) => {
    return <div>{children}</div>;
};

TripleColumn.Left = Left;
TripleColumn.Middle = Middle;
TripleColumn.Right = Right;

export default TripleColumn;
