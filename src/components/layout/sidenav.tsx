import React from 'react';
import NavLinks from "@/components/layout/nav-links";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu
} from "@/components/ui/sidebar";

function Sidenav() {
  return (
    <Sidebar collapsible="icon" className="top-12">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <NavLinks />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export default Sidenav;

/*
*    <div className="flex flex-col min-h-screen w-48 sticky top-0 overflow-y-auto p-4 border-r-2">
      <div>
        <div className="mt-2">
          <NavLinks/>
        </div>
      </div>
    </div>
*
*
* */