import * as React from "react";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { BiInfoCircle } from "react-icons/bi";

export type PropType = Omit<
    {
        propName: string;
        tooltip?: string;
        type: string;
        default: string;
    },
    "id"
>;

const columnHelper = createColumnHelper<PropType>();

const columns = [
    columnHelper.accessor("propName", {
        header: () => <span>Prop</span>,
        cell: (info) => (
            <div className="flex w-[40%]">
                <p className="bg-primary-lighter dark:bg-primary-base text-primary-dark  dark:text-primary-lightest p-[4px] text-sm rounded-md">
                    {info.getValue()}
                </p>
                {info.row.original.tooltip && (
                    <div className="flex">
                        <Tooltip>
                            <Tooltip.Trigger>
                                <div className="p-0 ml-1">
                                    <BiInfoCircle />
                                </div>
                            </Tooltip.Trigger>
                            <Tooltip.Content>
                                {info.row.original.tooltip}
                            </Tooltip.Content>
                        </Tooltip>
                    </div>
                )}
            </div>
        ),
    }),
    columnHelper.accessor("type", {
        header: () => <span>Type</span>,
        cell: (info) => (
            <span className="w-[40%] text-sm">{info.getValue()}</span>
        ),
    }),
    columnHelper.accessor("default", {
        header: () => <span>Default</span>,
        cell: (info) => (
            <span className="w-[20%] text-sm">{info.getValue()}</span>
        ),
    }),
];

interface APIReferenceTableProps {
    data: PropType[];
    title?: string;
}

const APIReferenceTable = ({ data, title }: APIReferenceTableProps) => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <div className="w-[100%] mb-5">
            <p className="font-semibold mb-5">{title}</p>
            <table className="w-[100%]">
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <th
                                    key={header.id}
                                    className="text-left text-sm font-semibold text-ink-base dark:text-sky-base dark:border-b-slate-800 border-b-[1px] mb-[10px] pb-[10px]"
                                >
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map((row) => (
                        <>
                            <tr className="p-[10px] h-[20px]" key={row.id}>
                                {row.getVisibleCells().map((cell) => {
                                    console.log(cell);
                                    return (
                                        <td
                                            className={`${
                                                cell.column.id === "default" &&
                                                "w-[20%]"
                                            } ${
                                                cell.column.id === "propName" &&
                                                "w-[20%]"
                                            } ${
                                                cell.column.id === "type" &&
                                                "w-[40%]"
                                            } py-3 whitespace-nowrap dark:border-b-slate-800 border-b-[1px]`}
                                            key={cell.id}
                                        >
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </td>
                                    );
                                })}
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default APIReferenceTable;