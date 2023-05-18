import clxsm from "@/lib/clsxm";
import React, { HTMLAttributes } from "react";

interface ProgressProps {
    value: number;
}

const Progress = ({ value }: ProgressProps) => {
    return (
        <div className="w-full bg-sky-base rounded-full">
            <div className="bg-black w-[20%] h-[20px] rounded-full" />
        </div>
    );
};

export default Progress;
