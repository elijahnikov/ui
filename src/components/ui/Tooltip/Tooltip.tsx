import React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

interface TooltipProps {
    children: React.ReactNode;
}

const Tooltip = ({ children }: TooltipProps) => {
    return (
        <TooltipPrimitive.Provider delayDuration={300}>
            <TooltipPrimitive.Root>{children}</TooltipPrimitive.Root>
        </TooltipPrimitive.Provider>
    );
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
    return (
        <TooltipPrimitive.Trigger
            className="inline-flex items-center justify-center"
            asChild
        >
            {children}
        </TooltipPrimitive.Trigger>
    );
};

const Content = ({
    children,
    size = "base",
}: {
    children: React.ReactNode;
    size?: "sm" | "base";
}) => {
    return (
        <TooltipPrimitive.Portal>
            <TooltipPrimitive.Content
                className={`${
                    size === "sm"
                        ? "text-xs px-[10px] py-[5px]"
                        : "text-sm px-[15px] py-[10px]"
                } z-10 dark:bg-slate-800 data-[state=delayed-open]:data-[side=top]:animate-slideDownAndFade data-[state=delayed-open]:data-[side=right]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=left]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideUpAndFade text-violet11 select-none rounded-[4px] bg-white text-[15px] leading-none shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] will-change-[transform,opacity]`}
                sideOffset={5}
            >
                {children}
                <TooltipPrimitive.Arrow className="dark:fill-slate-800 fill-white" />
            </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
    );
};

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;

export default Tooltip;
