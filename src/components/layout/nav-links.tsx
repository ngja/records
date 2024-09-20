'use client';

import React from 'react';
import {usePathname} from "next/navigation";
import {Music, Star} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";

const links = [
  {
    name: 'Artists',
    href: '/dashboard/artists',
    icon: Star,
  },
  {
    name: 'Songs',
    href: '/dashboard/songs',
    icon: Music,
  },
]

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              'flex items-center justify-start px-3 my-1 rounded-sm',
              {
                'bg-primary text-primary-foreground': pathname === link.href,
              },
              pathname === link.href ? 'hover:bg-primary-more hover:text-primary-foreground' : 'hover:bg-primary hover:text-primary-foreground',
            )}
          >
            <LinkIcon className="w-4" />
            <p className="pl-2 py-1">{link.name}</p>
          </Link>
        )
      })}
    </>
  );
}

export default NavLinks;