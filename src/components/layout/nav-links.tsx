'use client';

import React from 'react';
import {usePathname} from "next/navigation";
import {Disc, Music, Play, Star, Ticket, UserRound} from "lucide-react";
import Link from "next/link";
import {cn} from "@/lib/utils";

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
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              'flex items-center justify-start px-3 my-1 rounded-sm',
              {
                'bg-primary text-primary-foreground': pathname.startsWith(link.href),
              },
              pathname.startsWith(link.href) ? 'hover:bg-primary-more hover:text-primary-foreground' : 'hover:bg-primary hover:text-primary-foreground',
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