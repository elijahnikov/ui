import React, { ReactElement, useState } from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { BsChevronDown } from "react-icons/bs";
import Input from "../Input/Input";

interface SelectProps {
    placeholder?: string;
    disabled?: boolean;
    searchable?: boolean;
    value: string;
    setValue: (value: string) => void;
    label?: string;
    children: ReactElement<SelectItemProps> | ReactElement<SelectItemProps>[];
}

interface SelectItemProps {
    value: string;
    children: React.ReactNode;
    selectedValue?: string;
    setValue?: (value: string) => void;
    setSearchText?: (value: string) => void;
    open?: boolean;
    setOpen?: (value: boolean) => void;
}

const Select = ({
    placeholder,
    disabled,
    searchable,
    label,
    value,
    setValue,
    children,
}: SelectProps) => {
    const [open, setOpen] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>("");

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
                    } absolute text-sm flex w-[200px] py-2 px-3 text-left border-[2px] rounded-lg`}
                >
                    <p className="w-[90%]">
                        {value !== "" ? value : placeholder}
                    </p>
                    <BsChevronDown className="mt-1 fill-ink-light" />
                </PopoverPrimitive.Trigger>
                <PopoverPrimitive.Portal>
                    <PopoverPrimitive.Content className="max-h-[400px] overflow-y-scroll border-sky-light dark:border-slate-800 space-y-1 mt-2 w-[200px] rounded-lg p-[5px] border-[2px]">
                        {searchable && (
                            <Input
                                className="w-[100%]"
                                size={"sm"}
                                placeholder="Search"
                                value={searchText}
                                change={setSearchText}
                            />
                        )}
                        {React.Children.map(children, (child) => {
                            if (
                                child.props.value
                                    .toLowerCase()
                                    .includes(searchText.toLowerCase())
                            ) {
                                return React.cloneElement(child, {
                                    selectedValue: value,
                                    setValue,
                                    setOpen,
                                    open,
                                    setSearchText,
                                });
                            }
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
    setSearchText,
    setValue,
    open,
    setOpen,
}: SelectItemProps) => {
    return (
        <div
            onClick={() => {
                setValue && setValue(value);
                setOpen && setOpen(!open);
                setSearchText && setSearchText("");
            }}
            className={`${
                selectedValue === value && "bg-sky-lighter dark:bg-slate-800"
            } cursor-pointer text-sm hover:bg-sky-lighter pl-[20px] dark:hover:bg-slate-800 rounded-md p-2`}
            key={value}
        >
            <p className="ml-1">{children}</p>
        </div>
    );
};

export { Select, SelectItem };
