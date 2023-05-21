import clxsm from "@/lib/clsxm";
import React, { HTMLAttributes, useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

interface AccordionProps {
    children: JSX.Element | JSX.Element[];
}

interface AccordionItemProps extends HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[];
    selectedItem?: string;
    setSelectedItem?: (tab: string) => void;
}

interface AccordionTriggerContentProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    selectedItem?: string;
    setSelectedItem?: (tab: string) => void;
}

const Accordion = ({ children }: AccordionProps) => {
    const [selectedItem, setSelectedItem] = useState<boolean>(false);
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    selectedItem,
                    setSelectedItem,
                });
            })}
        </div>
    );
};

const Item = React.forwardRef<HTMLDivElement, AccordionItemProps>(
    ({ children, className, selectedItem, setSelectedItem, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
                className={clxsm(
                    className,
                    "focus-within:shadow-mauve12 mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px]"
                )}
            >
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        selectedItem,
                        setSelectedItem,
                    });
                })}
            </div>
        );
    }
);

const Trigger = React.forwardRef<HTMLDivElement, AccordionTriggerContentProps>(
    (
        { children, className, selectedItem, setSelectedItem, value, ...props },
        ref
    ) => {
        return (
            <div
                onClick={() => {
                    if (selectedItem === value) {
                        setSelectedItem && setSelectedItem("hidden");
                    } else {
                        setSelectedItem && setSelectedItem(value);
                    }
                }}
                {...props}
                ref={ref}
                className={clxsm(
                    className,
                    "font-semibold p-5 dark:border-slate-600 border-b-[1px] group flex h-[45px] flex-1 cursor-default items-center justify-between px-5 text-[15px] leading-none"
                )}
            >
                <div className="w-[100%]">{children}</div>
                {selectedItem !== value ? (
                    <BiChevronDown className="dark:fill-slate-600 mt-1 h-5 w-5" />
                ) : (
                    <BiChevronUp className="dark:fill-slate-600 mt-1 h-5 w-5" />
                )}
            </div>
        );
    }
);

const Content = React.forwardRef<HTMLDivElement, AccordionTriggerContentProps>(
    ({ children, className, selectedItem, value, ...props }, ref) => {
        return (
            <div
                {...props}
                ref={ref}
                className={clxsm(
                    className,
                    "ml-5 overflow-hidden text-[15px] transition-all ease-in duration-200",
                    selectedItem === value && "pt-5 mb-4"
                )}
            >
                {selectedItem !== "hidden" && selectedItem === value ? (
                    <div className={clxsm(className)}>{children}</div>
                ) : null}
            </div>
        );
    }
);

Item.displayName = "AccordionItem";
Trigger.displayName = "AccordionTrigger";
Content.displayName = "AccordionContent";

Accordion.Item = Item;
Accordion.Trigger = Trigger;
Accordion.Content = Content;

export default Accordion;
