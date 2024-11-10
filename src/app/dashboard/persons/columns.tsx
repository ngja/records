"use client";

import {ColumnDef} from "@tanstack/react-table";
import DataTableColumnHeader from "@/components/ui/table/data-table-column-header";
import Link from "next/link";
import {format} from "date-fns";
import {Person} from "@/lib/def/person-def";

export const personColumns: ColumnDef<Person>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="ID" />),
    cell: ({ row }) => {
      const person = row.original
      return <Link href={`/dashboard/persons/${person.id}`}>{person.id}</Link>
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Name" />),
    cell: ({ row }) => {
      const person = row.original
      return <Link href={`/dashboard/persons/${person.id}`}>{person.name}</Link>
    }
  },
  {
    accessorKey: "birthday",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Birthday" />),
    cell: ({ row }) => {
      const person = row.original
      return format(person.birthday, 'yyyy-MM-dd')
    }
  },
  {
    accessorKey: "height",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Height" />),
    cell: ({ row }) => {
      const person = row.original
      return `${person.height} cm`
    }
  }
]