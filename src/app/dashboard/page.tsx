import React from "react";
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import Image from "next/image";
import {cdn} from "@/lib/api/cdn-config";

export default function DashboardPage() {
  return (
    <div className="m-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          { label: "Home", href: "/dashboard" },
        ]} />
      </div>
      <div className="flex flex-col items-center justify-center w-full gap-3">
        <Image src={cdn('/banner/main-banner.png')} alt="main-banner" width={2000} height={200} />
        <div className="text-3xl">Roadmap</div>
        <div>
          <p>📢 Person 리스트 조회</p>
          <p>📢 Artist 리스트 조회</p>
          <p>📢 Artist 상세 조회</p>
          <p>📢 ...</p>
        </div>
      </div>
    </div>
  );
}