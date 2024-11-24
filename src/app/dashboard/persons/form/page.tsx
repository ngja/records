import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import PersonCreateForm from "@/components/forms/person/person-create-form";

async function Page() {
  const countrySelectItems = [
    { label: "대한민국", value: "korea" },
    { label: "일본", value: "japan" },
    { label: "미국", value: "usa" },
  ]

  return (
    <div className="flex flex-col max-w-screen-xl min-w-min m-6 gap-3">
      <div>
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