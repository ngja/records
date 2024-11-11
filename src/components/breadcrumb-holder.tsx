import React, {Fragment} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Separator} from "@/components/ui/separator";

interface BreadcrumbTarget {
  label: string;
  href: string;
}

function BreadcrumbHolder({breadcrumbs}: {
  breadcrumbs: BreadcrumbTarget[]
}) {
  return (
    <div className="flex items-center gap-1.5">
      <SidebarTrigger/>
      <Separator className="h-4 mr-2" orientation="vertical" />
      <Breadcrumb>
        <BreadcrumbList>
          {breadcrumbs.map((breadcrumb, index) => (
            index < breadcrumbs.length - 1 ?
              (
                <Fragment key={breadcrumb.label}>
                  <BreadcrumbItem>
                    <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator/>
                </Fragment>
              ) : (
                <Fragment key={breadcrumb.label}>
                  <BreadcrumbItem>
                    <BreadcrumbPage>{breadcrumb.label}</BreadcrumbPage>
                  </BreadcrumbItem>
                </Fragment>

              )
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}

export default BreadcrumbHolder;