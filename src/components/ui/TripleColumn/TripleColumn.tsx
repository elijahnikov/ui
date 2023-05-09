import React from "react";

interface TripleColumnProps {
    left: React.ReactNode;
    middle: React.ReactNode;
    right: React.ReactNode;
}

const TripleColumn = ({ left, middle, right }: TripleColumnProps) => {
    return (
        <div className="h-[100%]">
            <div className="mx-auto">
                <div className="absolute flex w-full">
                    {/* LEFT */}
                    <div></div>
                    {/* MIDDLE */}
                    <div></div>
                    {/* RIGHT */}
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default TripleColumn;
