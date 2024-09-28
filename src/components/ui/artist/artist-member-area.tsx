import React from 'react';
import {Member} from "@/lib/definitions";
import ArtistMember from "@/components/ui/artist/artist-member";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";

interface ArtistMemberAreaProps {
  members: Member[]
}

function ArtistMemberArea({
  members
}: ArtistMemberAreaProps) {
  return (
    <div className="rounded-xl">
      <div>Member</div>
      <Separator className="mt-1 mb-3"/>
      <ScrollArea className="whitespace-nowrap mt-3">
        <div className="flex w-max gap-3">
          {members.map((member) => (
            <ArtistMember key={member.id} name={member.name} image={member.image}/>
          ))}
        </div>
        <ScrollBar orientation="horizontal"/>
      </ScrollArea>
    </div>
  );
}

export default ArtistMemberArea;