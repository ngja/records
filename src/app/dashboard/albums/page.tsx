import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";

function Page() {
  return (
    <div className="max-w-screen-xl min-w-min m-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          {label: "Home", href: "/dashboard"},
          {label: "Albums", href: "/dashboard/albums"},
        ]}/>
      </div>
    </div>
  );
}

export default Page;