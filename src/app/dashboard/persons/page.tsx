import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {personApi} from "@/lib/api/person-api";
import {DataTable} from "@/components/ui/table/data-table";
import {personColumns} from "@/app/dashboard/persons/person-columns";

async function Page() {
  const response = await personApi.getPersons()

  return (
    <div className="max-w-screen-xl min-w-min m-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Persons", href: "/dashboard/persons" },
        ]} />
      </div>
      <div className="flex flex-col gap-4">
        <DataTable columns={personColumns} data={response.results} searchField="name" />
        <div className="flex justify-end">
          <Button asChild size="sm">
            <Link href="/dashboard/persons/form">Form</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Page;