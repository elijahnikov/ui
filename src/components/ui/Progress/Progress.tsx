import clxsm from "@/lib/clsxm";
import React, { HTMLAttributes } from "react";

type Enumerate<
    N extends number,
    Acc extends number[] = []
> = Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;

type IntRange<F extends number, T extends number> = Exclude<
    Enumerate<T>,
    Enumerate<F>
>;

type T = IntRange<20, 300>;

interface ProgressProps {
    value: IntRange<0, 100>;
}

const Progress = ({ value }: ProgressProps) => {
    return (
        <div className="w-full bg-sky-base dark:bg-ink-base rounded-full">
            <div className="dark:bg-sky-base bg-black w-[20%] h-[20px] rounded-full" />
        </div>
    );
};

export default Progress;
