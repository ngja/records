import React from 'react';
import Sidenav from "@/components/layout/sidenav";
import Header from "@/components/layout/header";
import {Toaster} from "@/components/ui/toaster";
import {SidebarProvider} from "@/components/ui/sidebar";

function DashboardLayout({children}: { children: React.ReactNode }) {
  return (
    <div className="flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <Header/>
      </header>
      <div className="flex">
        <SidebarProvider>
          <div className="flex-none">
            <Sidenav/>
          </div>
          <div className="flex-1">
            {children}
          </div>
          <Toaster/>
        </SidebarProvider>
      </div>
    </div>
  );
}

export default DashboardLayout;