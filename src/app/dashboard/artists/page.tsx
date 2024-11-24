import React from 'react';
import {DataTable} from "@/components/ui/table/data-table";
import {artistColumns} from "@/app/dashboard/artists/artist-columns";
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import {artistApi} from "@/lib/api/artist-api";

export default async function Page() {
  const response = await artistApi.getArtist()

  return (
    <div className="max-w-screen-xl min-w-min p-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Artists", href: "/dashboard/artists" },
        ]} />
      </div>
      <div>
        <DataTable columns={artistColumns} data={response.results} searchField="name" />
      </div>
    </div>
  );
}
