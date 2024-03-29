import clxsm from "@/lib/clsxm";
import { cva, VariantProps } from "class-variance-authority";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { AiOutlineCloseCircle } from "react-icons/ai";

const input = cva(["py-2 px-3", "rounded-lg", "border-[1px]", "outline-none"], {
    variants: {
        intent: {
            default: [
                "placeholder-ink-lighter text-black",
                "dark:placeholder-sky-dark dark:bg-black dark:text-white",
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
            true: "border-red-500 dark:border-red-500",
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
        {
            error: true,
            intent: "default",
            className:
                "border-red-500 dark:border-red-500 focus:border-red-500 dark:focus:border-red-500",
        },
        {
            error: false,
            intent: "default",
            className:
                "border-sky-light dark:border-slate-800 focus:border-primary-base dark:focus:border-primary-base dark:border-slate-800",
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
    kbd?: JSX.Element;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            intent,
            children,
            className,
            size,
            disabled,
            error = false,
            errorText,
            prefix: Prefix,
            suffix: Suffix,
            clearable,
            placeholder,
            fullWidth,
            value,
            change,
            label,
            kbd: Kbd,
            ...props
        },
        ref
    ) => {
        const inputRef = useRef<HTMLInputElement | null>(null);

        const clearInput = () => {
            change && change("");
        };

        let kbdPadding = Kbd && Object.keys(Kbd.props).length;

        return (
            <>
                {/* if label is passed */}
                {label && (
                    <div className="relative top-[-2px] ml-1">
                        <label className="text-sm font-semibold text-black dark:text-white">
                            {label}
                        </label>
                    </div>
                )}
                <div
                    //if fullWidth is passed make container w-100% other wise make it fit content
                    // if prefix and suffix is passed add flex so that elements are side by side
                    className={`${(Prefix || Suffix || Kbd) && "flex"} ${
                        Prefix && "ml-[4px]"
                    } ${fullWidth ? "w-[100%]" : "w-max"} relative text-left`}
                >
                    {/* is prefix is passed */}
                    {Prefix && (
                        <div className="flex justify-center items-center bg-sky-lightest dark:bg-ink-darkest rounded-l-lg relative left-[-5px] border-r-0 border-[1px] border-sky-light dark:border-slate-800 py-2 px-3 text-sm">
                            <p className=" text-slate-400">
                                {typeof Prefix !== "string"
                                    ? (Prefix as IconType) && (
                                          <Prefix className="h-6 w-6 relative top-[-1px] fill-sky-dark dark:fill-ink-lightest" />
                                      )
                                    : null}
                                {typeof Prefix === "string"
                                    ? String(Prefix)
                                    : null}
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
                            className: clxsm(
                                className,
                                Prefix && "ml-[-5px] rounded-l-none",
                                Suffix && "mr-[-5px] rounded-r-none"
                            ),
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
                            } bg-white rounded-lg dark:bg-black pl-2 pr-3 absolute fill-ink-light cursor-pointer -translate-y-2/4 dark:fill-slate-500 h-10 w-10 top-[50%] right-[1%]`}
                        />
                    )}
                    {Kbd && (
                        <div
                            className={`${
                                Kbd
                                    ? `right-[${kbdPadding!! * 20}px]`
                                    : "right-0"
                            } relative justify-center items-center flex align-left`}
                        >
                            {Kbd}
                        </div>
                    )}
                    {/* if suffix is passed */}
                    {Suffix && (
                        <div className="flex justify-center items-center bg-sky-lightest dark:bg-ink-darkest rounded-r-lg relative right-[-5px] border-l-0 border-[1px] border-sky-light dark:border-slate-800 py-2 px-3 text-sm">
                            <p className=" text-slate-400">
                                {typeof Suffix !== "string"
                                    ? (Suffix as IconType) && (
                                          <Suffix className="h-6 w-6 relative top-[-1px] fill-sky-dark dark:fill-ink-lightest" />
                                      )
                                    : null}
                                {typeof Suffix === "string"
                                    ? String(Suffix)
                                    : null}
                            </p>
                        </div>
                    )}
                    {/* if errorText is passed */}
                    {errorText && (
                        <p
                            // use offsetWidth to set the width of the error text
                            // same as the input width
                            className={`${
                                inputRef.current &&
                                `w-[${inputRef.current.offsetWidth}px]`
                            } mt-[5px] ml-[2px] text-red-500`}
                        >
                            {errorText}
                        </p>
                    )}
                </div>
            </>
        );
    }
);

Input.displayName = "Input";

export default Input;
