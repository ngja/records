'use client';

import React from 'react';
import {usePathname} from "next/navigation";
import {Disc, Music, Play, Star, Ticket, Trophy, UserRound} from "lucide-react";
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
    name: 'Albums',
    href: '/dashboard/albums',
    icon: Disc,
  },
  {
    name: 'Songs',
    href: '/dashboard/songs',
    icon: Music,
  },
  {
    name: 'Concerts',
    href: '/dashboard/concerts',
    icon: Ticket,
  },
  {
    name: 'Contents',
    href: '/dashboard/contents',
    icon: Play,
  },
  {
    name: 'Awards',
    href: '/dashboard/awards',
    icon: Trophy,
  }
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