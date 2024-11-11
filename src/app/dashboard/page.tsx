import React from "react";
import BreadcrumbHolder from "@/components/breadcrumb-holder";

export default function DashboardPage() {
  return (
    <div className="m-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          { label: "Home", href: "/dashboard" },
        ]} />
      </div>
      <div>
        <div className="w-32 h-32 bg-amber-300 m-3"></div>
        <div className="w-32 h-32 bg-amber-300 m-3"></div>
        <div className="w-32 h-32 bg-amber-300 m-3"></div>
        <div className="w-32 h-32 bg-amber-300 m-3"></div>
        <div className="w-32 h-32 bg-amber-300 m-3"></div>
        <div className="w-32 h-32 bg-amber-300 m-3"></div>
      </div>
    </div>
  );
}