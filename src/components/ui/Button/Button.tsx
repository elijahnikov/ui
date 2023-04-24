import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import React from "react";
import { IconType } from "react-icons";

const button = cva(
    [
        "inline-flex items-center justify-center rounded-lg font-medium",
        "focus:outline-none focus-visible:ring focus-visible:ring-primary-500",
        "shadow-sm",
        "transition-colors duration-75",
    ],
    {
        variants: {
            intent: {
                primary: [
                    "bg-primary text-white border border-primary-500",
                    "hover:bg-primary-600 hover:text-white active:bg-primary-700",
                ],
                secondary: [
                    "bg-primary-100 text-primary dark:bg-gray-700 dark:text-white dark:border-gray-600 border border-primary-100",
                    "hover:bg-primary-200 dark:hover:bg-gray-600 dark:active:bg-gray-500 active:bg-primary-300",
                ],
                outline: [
                    "bg-none dark:text-white dark:border-white text-primary border border-primary",
                    "hover:bg-primary-100 dark:hover:bg-gray-700 dark:active:bg-gray-500 active:bg-primary-200",
                ],
                transparent: [
                    "bg-none shadow-none",
                    "hover:bg-primary-100 dark:hover:bg-gray-700",
                    "active:bg-primary-200 dark:active:bg-gray-600",
                ],
            },
            size: {
                base: "text-sm md:text-base px-3 py-1.5",
                sm: "text-xs md:text-sm px-2 py-1",
                large: "text-md md:text-lg px-7 py-3",
            },
            fullWidth: {
                true: "w-full",
            },
            disabled: {
                true: "text-gray-700 bg-primary-400 cursor-not-allowed pointer-events-none",
            },
        },
        compoundVariants: [
            {
                disabled: true,
                intent: "primary",
                className: "bg-gray-200 border-none",
            },
            {
                disabled: true,
                intent: "secondary",
                className: "bg-gray-200 border-none",
            },
            {
                disabled: true,
                intent: "secondary",
                className: "bg-gray-200 border-none",
            },
        ],
        defaultVariants: {
            intent: "primary",
            size: "base",
        },
    }
);

interface ButtonProps
    extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
        VariantProps<typeof button> {
    children?: React.ReactNode;
    loading?: boolean;
    leftIcon?: IconType;
    rightIcon?: IconType;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            intent,
            className,
            size,
            fullWidth,
            disabled,
            loading = false,
            children,
            leftIcon: LeftIcon,
            rightIcon: RightIcon,
            ...props
        },
        ref
    ) => {
        return (
            <button
                {...props}
                className={button({
                    intent,
                    size,
                    fullWidth,
                    disabled,
                    className,
                })}
            >
                <span
                    className={classNames(
                        "leading-[1.25rem]",
                        loading && "text-transparent"
                    )}
                >
                    <div className="flex">
                        {LeftIcon && (
                            <LeftIcon
                                className={`${
                                    children && "top-[2px]"
                                } relative mr-[10px]`}
                            />
                        )}
                        {children}
                        {RightIcon && (
                            <RightIcon
                                className={`${
                                    children && "top-[2px]"
                                } relative ml-[10px]`}
                            />
                        )}
                    </div>
                </span>
                {loading && (
                    <span className={`absolute block w-4 h-4`}>
                        <svg
                            className="animate-spin"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="fill-current"
                                d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"
                            ></path>
                        </svg>
                        <span className="sr-only">Loading</span>
                    </span>
                )}
            </button>
        );
    }
);
Button.displayName = "Button";

export default Button;
