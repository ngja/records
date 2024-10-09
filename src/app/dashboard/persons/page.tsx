import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import {Button} from "@/components/ui/button";
import Link from "next/link";

function Page() {
  // data fetch


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

      </div>
    </div>
  );
}

export default Page;