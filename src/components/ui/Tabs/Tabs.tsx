import clxsm from "@/lib/clsxm";
import React, {
    HTMLAttributes,
    JSXElementConstructor,
    ReactElement,
    useState,
} from "react";

interface TabsProps {
    defaultTab: string;
    children: JSX.Element | JSX.Element[];
}

interface TabsListProps extends HTMLAttributes<HTMLDivElement> {
    children: JSX.Element | JSX.Element[];
    selectedTab?: string;
    setSelectedTab?: (tab: string) => void;
}

interface TabsTriggerContentProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    selectedTab?: string;
    setSelectedTab?: (tab: string) => void;
}

const Tabs = ({ children, defaultTab }: TabsProps) => {
    const [selectedTab, setSelectedTab] = useState<string>(defaultTab);
    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    selectedTab,
                    setSelectedTab,
                });
            })}
        </div>
    );
};

const List = React.forwardRef<HTMLDivElement, TabsListProps>(
    ({ children, className, selectedTab, setSelectedTab, ...props }, ref) => {
        return (
            <div
                className={clxsm(
                    className,
                    "flex bg-sky-lighter dark:bg-slate-900 p-1 h-[40px] rounded-md"
                )}
            >
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        selectedTab,
                        setSelectedTab,
                    });
                })}
            </div>
        );
    }
);

const Trigger = React.forwardRef<HTMLDivElement, TabsTriggerContentProps>(
    (
        { children, className, setSelectedTab, selectedTab, value, ...props },
        ref
    ) => {
        return (
            <div
                onClick={() => setSelectedTab && setSelectedTab(value)}
                className={clxsm(
                    className,
                    `${
                        selectedTab === value && "bg-white dark:bg-black"
                    } table rounded-md transition ease-in-out w-[50%] border-primary-base cursor-pointer`
                )}
            >
                <div className="table-cell text-center align-middle">
                    {children}
                </div>
            </div>
        );
    }
);

const Content = React.forwardRef<HTMLDivElement, TabsTriggerContentProps>(
    ({ children, selectedTab, value, className, ...props }, ref) => {
        return (
            <>
                {selectedTab === value && (
                    <div className={clxsm(className, "")}>{children}</div>
                )}
            </>
        );
    }
);

Content.displayName = "TabsContent";
Trigger.displayName = "TabsTrigger";
List.displayName = "TabsList";

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export default Tabs;
