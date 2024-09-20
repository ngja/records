import React from 'react';
import {Table} from "@tanstack/react-table";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {ChevronFirst, ChevronLast, ChevronLeft, ChevronRight} from "lucide-react";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";

interface DataTableToolbarProps<TData> {
  table: Table<TData>
  searchField: string
}

function DataTableToolbar<TData>({
  table,
  searchField,
}: DataTableToolbarProps<TData>) {


  return (
    <div className="flex justify-between items-center">
      <div className="">
        <Input
          placeholder={`Filter ${searchField}...`}
          value={(table.getColumn(searchField)?.getFilterValue() as string) ?? ""}
          onChange={(event) => table.getColumn(searchField)?.setFilterValue(event.target.value)}
          className="h-8 w-[300px]"
        />
      </div>
      <div className="flex flex-1 min-w-max justify-end items-center gap-4">
        <div className="flex items-center gap-3">
          <p className="whitespace-nowrap">Rows per page</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value))
            }}
          >
            <SelectTrigger>
              <SelectValue placeholder={`${table.getState().pagination.pageSize}`}/>
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <SelectItem key={pageSize} value={`${pageSize}`}>
                  {pageSize}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          {`Page ${table.getState().pagination.pageIndex + 1} of ${table.getPageCount()}`}
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronFirst className="w-4 h-4"/>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft className="w-4 h-4"/>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight className="w-4 h-4"/>
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronLast className="w-4 h-4"/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DataTableToolbar;