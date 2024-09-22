import React from 'react';
import {getArtists} from "@/lib/data";
import {DataTable} from "@/components/ui/table/data-table";
import {columns} from "@/app/dashboard/artists/columns";
import BreadcrumbHolder from "@/components/breadcrumb-holder";

export default async function Page() {
  const data = await getArtists()

  return (
    <div className="max-w-screen-xl min-w-min p-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Artists", href: "/dashboard/artists" },
        ]} />
      </div>
      <div>
        <DataTable columns={columns} data={data} searchField="name" />
      </div>
    </div>
  );
}
