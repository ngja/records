import BreadcrumbHolder from "@/components/breadcrumb-holder";
import React from "react";

export default function Page() {

  return (
    <div className="max-w-screen-xl min-w-min p-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          {label: "Home", href: "/dashboard"},
          {label: "Awards", href: "/dashboard/awards"},
        ]}/>
      </div>
      <div>

      </div>
    </div>
  )
}