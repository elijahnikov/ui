import React, { useEffect, useState } from "react";
import { KeyMapType, keyMap, keyTooltipMap } from "./types";
import Tooltip from "../Tooltip/Tooltip";

interface KbdProps {
    meta?: boolean;
    shift?: boolean;
    ctrl?: boolean;
    alt?: boolean;
    children?: string;
    tooltip?: boolean;
}

const appendKeys = (props: KbdProps) => {
    let finalKey: JSX.Element[] = [];

    Object.keys(props).forEach((key) => {
        if (keyMap[key as keyof KeyMapType]) {
            if (props.tooltip) {
                finalKey.push(
                    <Tooltip>
                        <Tooltip.Trigger>
                            {keyMap[key as keyof KeyMapType]}
                        </Tooltip.Trigger>
                        <Tooltip.Content size="sm">
                            {keyTooltipMap[key as keyof KeyMapType]}
                        </Tooltip.Content>
                    </Tooltip>
                );
            } else {
                finalKey.push(keyMap[key as keyof KeyMapType]);
            }
        }
    });
    props.children && finalKey.push(<span>{props.children}</span>);

    return finalKey;
};

const Kbd = (props: KbdProps) => {
    const [keys, setKeys] = useState<JSX.Element[]>([]);

    useEffect(() => {
        // map over and give each key component a key
        setKeys(
            appendKeys(props).map((item, key) =>
                React.cloneElement(item, { key })
            )
        );
    }, [props]);
    return (
        <div className="flex w-max h-max text-xs border-[1px] rounded-md p-[4px] dark:text-sky-base dark:border-ink-base text-ink-light font-semibold dark:bg-slate-800 bg-sky-lightest space-x-2">
            {keys}
        </div>
    );
};

export default Kbd;
