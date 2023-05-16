import clxsm from "@/lib/clsxm";
import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { IconBaseProps, IconType } from "react-icons";

interface BadgeProps
    extends HTMLAttributes<HTMLDivElement>,
        VariantProps<typeof badge> {
    children: React.ReactNode;
}

interface BadgeInnerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

interface BadgeIconProps {
    icon: IconType;
}

const badge = cva("flex rounded-xl w-max", {
    variants: {
        variant: {
            subtle: "bg-primary-lightest dark:bg-ink-dark",
            solid: "bg-primary-base text-white",
            outline: "border-[1px] border-primary-base",
        },
        size: {
            base: "text-sm pl-4 pr-4 p-[4px]",
            sm: "text-xs pl-3 pr-3 p-[2px]",
            large: "text-md pl-4 pr-4 p-[4px]",
        },
    },
    defaultVariants: {
        variant: "subtle",
        size: "base",
    },
});

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
    ({ variant, size, children, className, ...props }, ref) => {
        return (
            <div ref={ref} className={badge({ variant, size, className })}>
                {children}
            </div>
        );
    }
);

const BadgeLabel = React.forwardRef<HTMLDivElement, BadgeInnerProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div {...props} className={clxsm(className)}>
                {children}
            </div>
        );
    }
);

const BadgeIcon = ({ icon }: BadgeIconProps) => {
    const Icon = icon;
    return (
        <div className="mt-[3px] mr-1 ml-1">
            <Icon />
        </div>
    );
};

Badge.displayName = "Badge";
BadgeLabel.displayName = "BadgeLabel";
BadgeIcon.displayName = "BadgeIcon";

export { Badge, BadgeLabel, BadgeIcon };
