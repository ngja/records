'use client';

import React from 'react';
import {usePathname} from "next/navigation";
import {Disc, Music, Play, Star, Ticket, UserRound} from "lucide-react";
import Link from "next/link";
import {SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";

const links = [
  {
    name: 'Persons',
    href: '/dashboard/persons',
    icon: UserRound,
  },
  {
    name: 'Artists',
    href: '/dashboard/artists',
    icon: Star,
  },
  {
    name: 'Records',
    href: '/dashboard/records',
    icon: Disc,
  },
  {
    name: 'Songs',
    href: '/dashboard/songs',
    icon: Music,
  },
  {
    name: 'Performances',
    href: '/dashboard/performances',
    icon: Ticket,
  },
  {
    name: 'Contents',
    href: '/dashboard/contents',
    icon: Play,
  },
]

function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => (
        <SidebarMenuItem key={link.name}>
          <SidebarMenuButton asChild isActive={pathname.startsWith(link.href)}>
            <Link href={link.href}>
              <link.icon className="w-4" />
              <p className="pl-2 py-1">{link.name}</p>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </>
  );
}

export default NavLinks;