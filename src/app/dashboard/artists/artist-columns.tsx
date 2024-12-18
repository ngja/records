"use client";

import {ColumnDef} from "@tanstack/react-table"
import {Artist} from "@/lib/definitions";
import Link from "next/link";
import DataTableColumnHeader from "@/components/ui/table/data-table-column-header";

export const artistColumns: ColumnDef<Artist>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="ID" />),
    cell: ({ row }) => {
      const artist = row.original
      return <Link href={`/dashboard/artists/${artist.id}`}>{artist.id}</Link>
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Name" />),
    cell: ({ row }) => {
      const artist = row.original
      return <Link href={`/dashboard/artists/${artist.id}`}>{artist.name}</Link>
    }
  },
  {
    accessorKey: "debutDate",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Debut Date" />),
    cell: ({ row }) => {
      const artist = row.original
      return artist.debutDate;
    }
  },
  {
    accessorKey: "status",
    header: ({ column }) => (<DataTableColumnHeader column={column} title="Status" />),
  },
]