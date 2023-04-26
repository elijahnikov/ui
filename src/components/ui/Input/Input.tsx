import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

const input = cva(["py-2 px-3", "rounded-lg", "border-[1px]"], {
    variants: {
        intent: {
            default: [
                "placeholder-ink-lighter text-black border-sky-light focus:outline-primary-base",
                "dark:placeholder-sky-dark dark:bg-black dark:border-ink-dark dark:text-white",
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
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            intent,
            children,
            className,
            size,
            disabled,
            error,
            errorText,
            prefix: Prefix,
            suffix: Suffix,
            placeholder,
            fullWidth,
            label,
            ...props
        },
        ref
    ) => {
        return (
            <>
                {label && (
                    <div className="relative top-[-5px] ml-1">
                        <label className="text-sm text-black dark:text-white">
                            {label}
                        </label>
                    </div>
                )}
                <div
                    className={`${
                        (Prefix || Suffix) && "flex"
                    } w-[100%] text-left`}
                >
                    {Prefix && (
                        <div className="rounded-l-lg relative z-10 bg-white dark:bg-black left-2 border-[1px] border-sky-light dark:border-ink-dark border-r-[1px] py-2 px-3 text-sm">
                            <p className="mt-[2px] text-slate-400">
                                {(Prefix as IconType) && <Prefix />}
                                {typeof Prefix === "string" && String(Prefix)}
                            </p>
                        </div>
                    )}
                    <input
                        ref={ref}
                        disabled={disabled}
                        placeholder={placeholder}
                        {...props}
                        className={input({
                            intent,
                            size,
                            disabled,
                            error,
                            className,
                            fullWidth,
                        })}
                    >
                        {children}
                    </input>
                </div>
            </>
        );
    }
);

Input.displayName = "Input";

export default Input;
