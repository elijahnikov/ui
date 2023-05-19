import React, { useEffect, useState } from "react";
import { KeyMapType, keyMap } from "./types";

interface KbdProps {
    meta?: boolean;
    shift?: boolean;
    ctrl?: boolean;
    alt?: boolean;
    children?: string;
}

const appendKeys = (props: KbdProps) => {
    let finalKey: React.ReactNode[] = [];

    for (let key of Object.keys(props)) {
        keyMap[key as keyof KeyMapType] &&
            finalKey.push(keyMap[key as keyof KeyMapType]);
    }
    props.children && finalKey.push(<span>{props.children}</span>);

    return finalKey;
};

const Kbd = (props: KbdProps) => {
    const [keys, setKeys] = useState<React.ReactNode[]>([]);

    useEffect(() => {
        setKeys(appendKeys(props));
    }, [props]);
    return (
        <div className="flex w-max h-max text-xs border-[1px] rounded-md p-[4px] dark:text-sky-base dark:border-ink-base text-ink-light font-semibold dark:bg-slate-800 bg-sky-lightest space-x-2">
            {keys}
        </div>
    );
};

export default Kbd;
