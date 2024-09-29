import React from 'react';
import NavLinks from "@/components/layout/nav-links";

function Sidenav() {
  return (
    <div className="flex flex-col min-h-screen w-48 sticky top-0 overflow-y-auto p-4 border-r-2">
      <div>
        <div className="mt-2">
          <NavLinks/>
        </div>
      </div>
    </div>
  );
}

export default Sidenav;