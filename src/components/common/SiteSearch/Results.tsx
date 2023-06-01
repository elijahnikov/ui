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

    const focusFunction = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                if (inputReference.current) {
                    inputReference.current.value = "";
                    inputReference.current.blur();
                }
                setResults([]);
            }
            if (event.key === "ArrowUp" && cursor > 0) {
                setCursor(cursor - 1);
            } else if (
                event.key === "ArrowDown" &&
                cursor < componentResults.length - 1
            ) {
                setCursor(cursor + 1);
            }

            if (event.key === "Enter") {
                router.push(componentResults[cursor].href);
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [componentResults, cursor]
    );

    useEffect(() => {
        setResults(componentResults);
    }, [componentResults]);

    useEffect(() => {
        document.addEventListener("keydown", focusFunction, false);

        return () => {
            document.removeEventListener("keydown", focusFunction, false);
        };
    }, [focusFunction]);

    return (
        <>
            {results.length > 0 && (
                <div className="absolute bg-white border-[1px] rounded-lg mt-1 p-2 w-[100%]">
                    {componentResults.map((component, i) => (
                        <div
                            className={`${
                                cursor === i
                                    ? "bg-primary-lightest"
                                    : "hover:bg-primary-lightest"
                            } text-left cursor-pointer p-2  rounded-md`}
                            key={component.id}
                            onMouseEnter={() => setCursor(i)}
                        >
                            <Link href={component.href}>
                                <p className="text-primary-dark">
                                    {component.title}
                                </p>
                                <p className="text-sm text-ink-dark">
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
