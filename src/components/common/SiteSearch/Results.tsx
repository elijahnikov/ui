import useKeyPress from "@/utils/useKeyPress";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";

type ComponentResult = {
    id: number;
    title: string;
    value: string;
    href: string;
    type: string;
};

interface ResultsProps {
    componentResults: ComponentResult[];
    inputReference: React.MutableRefObject<HTMLInputElement | null>;
}

const Results = ({ componentResults, inputReference }: ResultsProps) => {
    const [cursor, setCursor] = useState<number>(0);
    const [results, setResults] = useState<ComponentResult[]>(componentResults);
    const router = useRouter();

    useKeyPress("Escape", () => {
        if (inputReference.current) {
            inputReference.current.value = "";
            inputReference.current.blur();
        }
        setResults([]);
    });
    useKeyPress("ArrowUp", () => {
        if (cursor > 0) setCursor(cursor - 1);
    });
    useKeyPress("ArrowDown", () => {
        if (cursor < componentResults.length - 1) setCursor(cursor + 1);
    });
    useKeyPress("Enter", () => router.push(componentResults[cursor].href));

    useEffect(() => {
        setResults(componentResults);
    }, [componentResults]);

    return (
        <>
            {results.length > 0 && (
                <div className="absolute bg-white dark:bg-ink-darkest dark:border-slate-800 border-[1px] rounded-lg mt-1 p-2 w-[100%]">
                    {componentResults.map((component, i) => (
                        <div
                            className={`${
                                cursor === i
                                    ? "bg-primary-lightest dark:bg-slate-800"
                                    : "hover:bg-primary-lightest"
                            } text-left cursor-pointer p-2  rounded-md`}
                            key={component.id}
                            onMouseEnter={() => setCursor(i)}
                        >
                            <Link href={component.href}>
                                <p className="text-primary-dark dark:text-primary-base">
                                    {component.title}
                                </p>
                                <p className="text-sm text-ink-dark dark:text-sky-base">
                                    {component.type}
                                </p>
                            </Link>
                        </div>
                    ))}
                    <p className="text-sm mt-2 text-ink-light">
                        Use arrow keys and enter to navigate
                    </p>
                </div>
            )}
        </>
    );
};

export default Results;
