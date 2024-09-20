import React from 'react';
import {getArtists} from "@/lib/data";
import {DataTable} from "@/components/ui/table/data-table";
import {columns} from "@/app/dashboard/artists/columns";

export default async function Page() {
  const data = await getArtists()

  return (
    <div className="max-w-screen-xl min-w-min p-6">
      <div>
        Artists
      </div>
      <div>
        <DataTable columns={columns} data={data} searchField="name" />
      </div>
    </div>
  );
}
