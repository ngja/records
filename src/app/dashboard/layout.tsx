import React from 'react';
import Sidenav from "@/components/layout/sidenav";
import Header from "@/components/layout/header";

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-col">
      <div>
        <Header/>
      </div>
      <div className="flex">
        <div className="flex-none">
          <Sidenav />
        </div>
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;