import * as React from "react";

import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";
import Tooltip from "@/components/ui/Tooltip/Tooltip";
import { BiInfoCircle } from "react-icons/bi";

type Prop = {
    propName: string;
    tooltip?: string;
    type: string;
    default: string;
};

const columnHelper = createColumnHelper<Prop>();

const columns = [
    columnHelper.accessor("propName", {
        header: () => <span>Prop</span>,
        cell: (info) => (
            <div className="flex">
                <p className="bg-primary-lighter text-primary-dark p-[4px] text-sm rounded-md">
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
        cell: (info) => <span className="text-sm">{info.getValue()}</span>,
    }),
    columnHelper.accessor("default", {
        header: () => <span>Default</span>,
        cell: (info) => <span className="text-sm">{info.getValue()}</span>,
    }),
];

interface APIReferenceTableProps {
    data: Prop[];
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
                                    className="text-left text-sm font-semibold text-ink-base dark:text-sky-base border-b-[1px] mb-[10px] pb-[10px]"
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
                                {row.getVisibleCells().map((cell) => (
                                    <td
                                        className="py-3 w-[33%] whitespace-nowrap border-b-[1px]"
                                        key={cell.id}
                                    >
                                        {flexRender(
                                            cell.column.columnDef.cell,
                                            cell.getContext()
                                        )}
                                    </td>
                                ))}
                            </tr>
                        </>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default APIReferenceTable;
