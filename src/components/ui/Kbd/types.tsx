export type KeyMapType = {
    alt: React.ReactNode;
    ctrl: React.ReactNode;
    meta: React.ReactNode;
    shift: React.ReactNode;
};

const os =
    typeof navigator !== "undefined"
        ? (navigator as any).userAgentData.platform
        : "";

export const keyMap: KeyMapType = {
    alt: <span>{os === "macOS" ? "⌥" : "Alt"}</span>,
    ctrl: <span>{os === "macOS" ? "⌃" : "ctrl"}</span>,
    meta: <span>{os === "macOS" ? "⌘" : "ctrl"}</span>,
    shift: <span>⇧</span>,
};

export const keyTooltipMap = {
    alt: "Alt",
    ctrl: "Control",
    meta: os === "macOS" ? "Command" : "Control",
    shift: "Shift",
};
