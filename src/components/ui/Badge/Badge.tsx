import clxsm from "@/lib/clsxm";
import React, { HTMLAttributes } from "react";
import { IconBaseProps, IconType } from "react-icons";

interface BadgeProps {
    children: React.ReactNode;
}

interface BadgeInnerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

interface BadgeIconProps extends IconBaseProps {
    as: IconType;
}

const Badge = ({ children }: BadgeProps) => {
    return <div>{children}</div>;
};

const Label = React.forwardRef<HTMLDivElement, BadgeInnerProps>(
    ({ children, className, ...props }, ref) => {
        return (
            <div {...props} className={clxsm(className)}>
                {children}
            </div>
        );
    }
);

const LeftIcon = React.forwardRef<IconType, BadgeIconProps>(
    ({ children, className, as, ...props }, ref) => {
        return <>{as}</>;
    }
);

const RightIcon = React.forwardRef<IconType, BadgeIconProps>(
    ({ children, className, as, ...props }, ref) => {
        return <>{as}</>;
    }
);

Label.displayName = "BadgeLabel";
LeftIcon.displayName = "BadgeLeftIcon";
RightIcon.displayName = "BadgeRightIcon";

Badge.Label = Label;
Badge.LeftIcon = LeftIcon;
Badge.RightIcon = RightIcon;

export default Badge;
