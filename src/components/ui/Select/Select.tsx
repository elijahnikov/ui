import { VariantProps, cva } from "class-variance-authority";
import React, { useRef } from "react";
import { SelectHTMLAttributes } from "react";

const select = cva([], {
    variants: {
        intent: {
            default: [],
        },
        size: {
            base: "",
            sm: "",
            large: "",
        },
        fullWidth: {
            true: "",
        },
        disabled: {
            true: "",
        },
        error: {
            true: "",
        },
    },
    defaultVariants: {
        size: "base",
        intent: "default",
    },
});

interface Option {
    value: string;
    label: string;
}

interface SelectProps
    extends Omit<
            SelectHTMLAttributes<HTMLSelectElement>,
            "disabled" | "size" | "error"
        >,
        VariantProps<typeof select> {
    label?: string;
    caption?: string;
    error?: boolean;
    errorText?: string;
    disabled?: boolean;
    defaultValue?: string;
    options: Option[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
    ({
        intent,
        children,
        className,
        size,
        disabled,
        error = false,
        errorText,
        fullWidth,
        label,
        options,
        defaultValue,
        ...props
    }) => {
        const selectRef = useRef<HTMLSelectElement | null>(null);

        return (
            <>
                {label && (
                    <div className="relative top-[-5px] ml-1">
                        <label className="text-sm text-black dark:text-white">
                            {label}
                        </label>
                    </div>
                )}
                <div>
                    <select
                        defaultValue={
                            defaultValue ? defaultValue : options[0].value
                        }
                        ref={selectRef}
                        disabled={disabled}
                        {...props}
                        className={select({
                            intent,
                            size,
                            disabled,
                            error,
                            className,
                            fullWidth,
                        })}
                    >
                        {options.map((option: Option, i: number) => {
                            return (
                                <option key={i} value={option.value}>
                                    {option.label}
                                </option>
                            );
                        })}
                    </select>
                </div>
            </>
        );
    }
);

Select.displayName = "Select";

export default Select;
