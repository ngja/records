import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {personApi} from "@/lib/api/person-api";
import {DataTable} from "@/components/ui/table/data-table";
import {personColumns} from "@/app/dashboard/persons/columns";

async function Page() {
  const response = await personApi.getPersons()

  return (
    <div className="max-w-screen-xl min-w-min m-6">
      <div className="flex h-8 justify-between items-center">
        <BreadcrumbHolder breadcrumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Persons", href: "/dashboard/persons" },
        ]} />
        <Button asChild size="sm">
          <Link href="/dashboard/persons/form">Form</Link>
        </Button>
      </div>
      <div>
        <DataTable columns={personColumns} data={response.results} searchField="name" />
      </div>
    </div>
  );
}

export default Page;