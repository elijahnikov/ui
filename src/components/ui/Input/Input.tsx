import { cva, VariantProps } from "class-variance-authority";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";

const input = cva(["py-2 px-3", "rounded-lg", "border-[2px]", "outline-none"], {
    variants: {
        intent: {
            default: [
                "placeholder-ink-lighter text-black border-sky-light focus:border-primary-base dark:focus:border-primary-base",
                "dark:placeholder-sky-dark dark:bg-black dark:border-slate-800 dark:text-white",
            ],
        },
        size: {
            base: "py-2",
            sm: "text-sm",
            large: "py-4",
        },
        fullWidth: {
            true: "w-[100%]",
        },
        disabled: {
            true: [
                "placeholder-sky-base text-sky-dark border-sky-lighter bg-sky-lightest cursor-not-allowed pointer-events-none",
                "dark:placeholder:ink-base dark:text-ink-base dark:border-ink-dark dark:bg-ink-darker",
            ],
        },
        error: {
            true: "border-red-400 dark:border-red-400",
        },
    },
    compoundVariants: [
        {
            disabled: true,
            intent: "default",
            className: " bg-gray-200 dark:bg-gray-950 text-red-400",
        },
        {
            disabled: false,
            intent: "default",
            className: "bg-white dark:bg-black",
        },
    ],
    defaultVariants: {
        size: "base",
        intent: "default",
    },
});

interface InputProps
    extends Omit<
            InputHTMLAttributes<HTMLInputElement>,
            "disabled" | "size" | "error" | "prefix" | "suffix"
        >,
        VariantProps<typeof input> {
    placeholder?: string;
    label?: string;
    caption?: string;
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
    prefix?: IconType | string;
    suffix?: IconType | string;
    clearable?: boolean;
    change?: Function;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({
        intent,
        children,
        className,
        size,
        disabled,
        error,
        errorText,
        prefix: Prefix,
        suffix: Suffix,
        clearable,
        placeholder,
        fullWidth,
        value,
        change,
        label,
        ...props
    }) => {
        const inputRef = useRef<HTMLInputElement | null>(null);
        const clearInput = () => {
            change && change("");
        };
        return (
            <>
                {/* if label is passed */}
                {label && (
                    <div className="relative top-[-5px] ml-1">
                        <label className="text-sm text-black dark:text-white">
                            {label}
                        </label>
                    </div>
                )}
                <div
                    //if fullWidth is passed make container w-100% other wise make it fit content
                    // if prefix and suffix is passed add flex so that elements are side by side
                    className={`${(Prefix || Suffix) && "flex"} ${
                        Prefix && "ml-[4px]"
                    } ${fullWidth ? "w-[100%]" : "w-max"} relative text-left`}
                >
                    {/* is prefix is passed */}
                    {Prefix && (
                        <div className="flex justify-center items-center bg-sky-lightest dark:bg-ink-darkest rounded-l-lg relative z-10 left-[-5px] border-r-0 border-[2px] border-sky-light dark:border-slate-800 py-2 px-3 text-sm">
                            <p className=" text-slate-400">
                                {typeof Prefix !== "string"
                                    ? (Prefix as IconType) && (
                                          <Prefix className="h-6 w-6 relative top-[-1px] fill-sky-dark dark:fill-ink-lightest" />
                                      )
                                    : null}
                                {typeof Prefix === "string" && String(Prefix)}
                            </p>
                        </div>
                    )}
                    <input
                        ref={inputRef}
                        disabled={disabled}
                        placeholder={placeholder}
                        {...props}
                        value={value}
                        onChange={(e) => change && change(e.target.value)}
                        className={input({
                            intent,
                            size,
                            disabled,
                            error,
                            className: `${
                                Prefix && "ml-[-5px] rounded-l-none"
                            } ${Suffix && "mr-[-5px] rounded-r-none"}`,
                            fullWidth,
                        })}
                    >
                        {children}
                    </input>
                    {/* if clearable is passed */}
                    {clearable && value && !disabled && (
                        <AiOutlineCloseCircle
                            onClick={() => clearInput()}
                            className={`${
                                Suffix && fullWidth
                                    ? "right-[20%] mr-12"
                                    : Suffix
                                    ? "right-[21%]"
                                    : "right-[1%]"
                            } bg-white rounded-lg dark:bg-black pl-2 pr-3 shadow-lg absolute fill-ink-light cursor-pointer -translate-y-2/4 dark:fill-slate-500 h-10 w-10 top-[50%] right-[1%]`}
                        />
                    )}
                    {/* if suffix is passed */}
                    {Suffix && (
                        <div className="flex justify-center items-center bg-sky-lightest dark:bg-ink-darkest rounded-r-lg relative z-10 right-[-5px] border-l-0 border-[2px] border-sky-light dark:border-slate-800 py-2 px-3 text-sm">
                            <p className=" text-slate-400">
                                {typeof Suffix !== "string"
                                    ? (Suffix as IconType) && (
                                          <Suffix className="h-6 w-6 relative top-[-1px] fill-sky-dark dark:fill-ink-lightest" />
                                      )
                                    : null}
                                {typeof Suffix === "string" && String(Suffix)}
                            </p>
                        </div>
                    )}
                </div>
            </>
        );
    }
);

Input.displayName = "Input";

export default Input;
