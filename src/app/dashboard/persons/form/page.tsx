import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import PersonCreateForm from "@/components/forms/person/person-create-form";
import {getCountrySelectItems} from "@/lib/data";

async function Page() {
  const countrySelectItems = await getCountrySelectItems()

  return (
    <div className="flex flex-col max-w-screen-xl min-w-min m-6 gap-3">
      <div className="flex h-8 justify-between items-center">
        <BreadcrumbHolder breadcrumbs={[
          {label: "Home", href: "/dashboard"},
          {label: "Persons", href: "/dashboard/persons"},
        ]}/>
      </div>
      <div>
        <PersonCreateForm countrySelectItems={countrySelectItems} />
      </div>
    </div>
  );
}

export default Page;