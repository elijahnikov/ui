import Input from "@/components/ui/Input/Input";
import Kbd from "@/components/ui/Kbd/Kbd";
import { componentMap } from "@/maps/componentMap";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Results from "./Results";

interface SiteSearchProps {}

type ComponentMapType = {
    id: number;
    title: string;
    value: string;
    href: string;
    type: string;
};

const SiteSearch = ({}: SiteSearchProps) => {
    const [searchValue, setSearchValue] = useState<string>("");
    const [componentMapState, _] =
        useState<Omit<ComponentMapType, "disabled">[]>(componentMap);
    const [filteredComponentMap, setFilteredComponentMap] = useState<
        Omit<ComponentMapType, "disabled">[]
    >([]);

    const inputRef = useRef<HTMLInputElement | null>(null);

    const focusFunction = useCallback((event: KeyboardEvent) => {
        if ((event.metaKey || event.ctrlKey) && event.key === "/") {
            inputRef.current && inputRef.current.focus();
        }
    }, []);

    const searchComponentMap = () => {
        if (searchValue !== "") {
            setFilteredComponentMap(
                componentMapState.filter((component) =>
                    component.title
                        .toLowerCase()
                        .includes(searchValue.toLowerCase())
                )
            );
        } else {
            setFilteredComponentMap([]);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", focusFunction, false);

        return () => {
            document.removeEventListener("keydown", focusFunction, false);
        };
    }, [focusFunction]);

    useEffect(() => {
        searchComponentMap();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValue]);

    return (
        <div className="w-[30vw] absolute left-[50%] -translate-x-1/2 ml-[50px]">
            <div>
                <input
                    ref={inputRef}
                    placeholder={"Search Supercrumble UI"}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="py-2 px-3 rounded-lg border-[1px] outline-none w-[100%] border-sky-light focus:border-primary-base dark:focus:border-primary-base dark:border-slate-800 placeholder-ink-lighter text-black dark:placeholder-sky-dark dark:bg-black dark:text-white"
                />
                <div
                    className={
                        "right-5 absolute justify-center -translate-y-1/2 top-[50%] items-center flex align-left"
                    }
                >
                    <Kbd meta>/</Kbd>
                </div>
            </div>
            <div className="w-[30vw]">
                {filteredComponentMap && (
                    <Results
                        inputReference={inputRef}
                        componentResults={filteredComponentMap}
                    />
                )}
            </div>
        </div>
    );
};

export default SiteSearch;
