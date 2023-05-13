import React, { Dispatch, SetStateAction, useState } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { BsChevronDown } from "react-icons/bs";

type Option = {
    value: string;
    label: string;
};

interface SelectProps {
    selectName?: string;
    disabled?: boolean;
    value: string;
    setValue: (value: string) => void;
    label?: string;
    children: JSX.Element | JSX.Element[];
}

interface SelectItemProps {
    children: React.ReactNode;
    value: string;
}

const Select = ({
    selectName,
    disabled,
    label,
    value,
    setValue,
    children,
}: SelectProps) => {
    const [open, setOpen] = useState<boolean>(false);
    return (
        <>
            {label && (
                <div className="relative top-[-5px] ml-1">
                    <label className="text-sm text-black dark:text-white">
                        {label}
                    </label>
                </div>
            )}{" "}
            <PopoverPrimitive.Root
                open={open}
                onOpenChange={() => setOpen(!open)}
            >
                <PopoverPrimitive.Trigger
                    className={`${
                        open
                            ? "border-primary-base"
                            : "border-sky-light dark:border-slate-800"
                    } absolute flex w-[200px] py-2 px-3 text-left border-[2px] rounded-lg`}
                >
                    <p className="w-[90%]">
                        {value !== "" ? value : selectName}
                    </p>
                    <BsChevronDown className="mt-1 fill-ink-light" />
                </PopoverPrimitive.Trigger>
                <PopoverPrimitive.Portal>
                    <PopoverPrimitive.Content className="border-sky-light dark:border-slate-800 space-y-2 mt-2 w-[200px] rounded-lg p-[10px] border-[2px]">
                        {React.Children.map(children, (child) => {
                            return React.cloneElement(child, {
                                selectedValue: value,
                                setValue,
                                setOpen,
                                open,
                            });
                        })}
                    </PopoverPrimitive.Content>
                </PopoverPrimitive.Portal>
            </PopoverPrimitive.Root>
        </>
    );
};

const SelectItem = ({
    value,
    children,
    selectedValue,
    setValue,
    open,
    setOpen,
}: {
    value: string;
    children: React.ReactNode;
    selectedValue?: string;
    setValue?: (value: string) => void;
    open?: boolean;
    setOpen?: (value: boolean) => void;
}) => {
    return (
        <div
            onClick={() => {
                setValue && setValue(value);
                setOpen && setOpen(!open);
            }}
            className={`${
                selectedValue === value && "bg-sky-lighter dark:bg-slate-800"
            } cursor-pointer hover:bg-sky-lighter dark:hover:bg-slate-800 rounded-md p-1`}
            key={value}
        >
            <p className="ml-1">{children}</p>
        </div>
    );
};

const SelectSearch = () => {
    return <h1>search</h1>;
};

const SelectContent = ({ children }: { children: React.ReactNode }) => {
    return <>{children}</>;
};

export { Select, SelectContent, SelectItem, SelectSearch };
