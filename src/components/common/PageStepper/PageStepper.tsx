// Components
import Button from "@/components/ui/Button/Button";

// Types
import { componentMap } from "@/maps/componentMap";

// Next
import Link from "next/link";

// React
import React, { ComponentType } from "react";

// ReactIcons
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface PageStepperProps {
    currentPage: string;
}

const PageStepper = ({ currentPage }: PageStepperProps) => {
    let layout = componentMap
        .filter(
            (component) => component.type === "layout" && !component.disabled
        )
        .sort((a, b) => a.title.localeCompare(b.title));
    let components = componentMap
        .filter(
            (component) => component.type === "component" && !component.disabled
        )
        .sort((a, b) => a.title.localeCompare(b.title));
    let sortedComponentMap = [...layout, ...components];

    const pageIndex = sortedComponentMap.findIndex(
        (component) => component.value === currentPage
    );

    console.log({ pageIndex });

    let previousPage;
    let nextPage;

    if (pageIndex === sortedComponentMap.length - 1) {
        previousPage = sortedComponentMap[pageIndex - 1];
        nextPage = sortedComponentMap[0];
    } else if (pageIndex === 0) {
        previousPage = sortedComponentMap[sortedComponentMap.length - 1];
        nextPage = sortedComponentMap[pageIndex + 1];
    } else {
        previousPage = sortedComponentMap[pageIndex - 1];
        nextPage = sortedComponentMap[pageIndex + 1];
    }

    return (
        <>
            <div className="mt-[30px] mb-[30px] dark:border-slate-700 border-b-[1px]" />
            <div className="flex w-[100%] h-[100px]">
                {previousPage && (
                    <div>
                        <Link href={previousPage.href}>
                            <Button
                                onClick={() => {}}
                                leftIcon={BiChevronLeft}
                                intent={"outline"}
                                className="rounded-md min-w-[160px]"
                            >
                                {previousPage.title}
                            </Button>
                        </Link>
                    </div>
                )}
                {nextPage && (
                    <div className="float-right w-[100%] text-right">
                        <Link href={nextPage.href}>
                            <Button
                                onClick={() => {}}
                                rightIcon={BiChevronRight}
                                intent={"outline"}
                                className="rounded-md min-w-[160px]"
                            >
                                {nextPage.title}
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </>
    );
};

export default PageStepper;
