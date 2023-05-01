import { VariantProps, cva } from "class-variance-authority";
import React, { useMemo, useRef } from "react";
import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
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
            false: "w-[50%]",
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
            className: "focus:border-red-500 dark:focus:border-red-500",
        },
    ],
    defaultVariants: {
        size: "base",
        intent: "default",
    },
});

interface InputAreaProps
    extends Omit<
            TextareaHTMLAttributes<HTMLTextAreaElement>,
            "disabled" | "size" | "error"
        >,
        VariantProps<typeof input> {
    placeholder?: string;
    label?: string;
    caption?: string;
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
    clearable?: boolean;
    change?: Function;
}

const InputArea = React.forwardRef<HTMLTextAreaElement, InputAreaProps>(
    ({
        intent,
        children,
        className,
        size,
        disabled,
        error,
        errorText,
        clearable,
        placeholder,
        value,
        change,
        fullWidth,
        label,
        ...props
    }) => {
        const inputAreaRef = useRef<HTMLTextAreaElement | null>(null);

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
                <div className={`relative text-left`}>
                    <textarea
                        ref={inputAreaRef}
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
                            fullWidth,
                        })}
                    >
                        {children}
                    </textarea>
                    {/* if clearable is passed */}
                    {clearable && value && !disabled && (
                        <AiOutlineCloseCircle
                            className="bg-white rounded-lg dark:bg-black absolute fill-ink-light cursor-pointer -translate-y-2/4 dark:fill-slate-500 h-6 w-6 top-[30%] right-[52%]"
                            onClick={() => clearInput()}
                        />
                    )}
                    {/* if errorText is passed */}
                    {errorText && (
                        <p
                            className={`${
                                inputAreaRef.current &&
                                `w-[${inputAreaRef.current.offsetWidth}px]`
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

InputArea.displayName = "Input Area";

export default InputArea;
