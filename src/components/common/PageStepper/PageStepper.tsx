import Button from "@/components/ui/Button/Button";
import { componentMap } from "@/maps/componentMap";
import Link from "next/link";
import React from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface PageStepperProps {
    currentPage: string;
}

const PageStepper = ({ currentPage }: PageStepperProps) => {
    let type = componentMap[0].components.find(
        (component) => component.value === currentPage
    )
        ? componentMap[0]
        : componentMap[1];

    const pageIndex = type.components.findIndex(
        (component) => component.value === currentPage
    );

    let previousPage;
    let nextPage;

    if (pageIndex === type.components.length - 1) {
        previousPage = type.components[pageIndex - 1];
        nextPage = componentMap[1].components[0];
    } else if (pageIndex === 0) {
        previousPage =
            componentMap[0].components[componentMap[0].components.length - 1];
        nextPage = type.components[pageIndex + 1];
    } else {
        previousPage = type.components[pageIndex - 1];
        nextPage = type.components[pageIndex + 1];
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
                                className="rounded-md"
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
                                className="rounded-md"
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
