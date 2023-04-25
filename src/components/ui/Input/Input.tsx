import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { InputHTMLAttributes } from "react";

const input = cva(
    [
        "py-2 px-3",
        "rounded-lg",
        "border-gray-200 border-[1px] dark:border-gray-800",
    ],
    {
        variants: {
            intent: {
                default: [
                    "placeholder-gray-400 text-black dark:bg-black dark:text-white",
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
                true: "placeholder-gray-400 dark:placeholder-gray-600 cursor-not-allowed pointer-events-none",
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
    }
);

interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "disabled" | "size">,
        VariantProps<typeof input> {
    placeholder?: string;
    label?: string;
    disabled?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    (
        {
            intent,
            children,
            className,
            size,
            disabled,
            placeholder,
            fullWidth,
            label,
            ...props
        },
        ref
    ) => {
        return (
            <input
                ref={ref}
                disabled={disabled}
                placeholder={placeholder}
                {...props}
                className={input({
                    intent,
                    size,
                    disabled,
                    className,
                    fullWidth,
                })}
            >
                {children}
            </input>
        );
    }
);

Input.displayName = "Input";

export default Input;
