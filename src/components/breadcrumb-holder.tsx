import React, {Fragment} from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

interface BreadcrumbTarget {
  label: string;
  href: string;
}

function BreadcrumbHolder({
  breadcrumbs
}: {
  breadcrumbs: BreadcrumbTarget[]
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          index < breadcrumbs.length - 1 ?
            (
              <Fragment key={breadcrumb.label}>
                <BreadcrumbItem>
                  <BreadcrumbLink href={breadcrumb.href}>{breadcrumb.label}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
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
  );
}

export default BreadcrumbHolder;