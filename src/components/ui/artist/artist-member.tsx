import React from 'react';
import {Img} from "@/lib/definitions";
import Image from "next/image";
import {cn} from "@/lib/utils";

interface ArtistMemberProps {
  name: string
  image: Img
}

function ArtistMember({
  name,
  image,
}: ArtistMemberProps) {
  return (
    <div className={cn("flex flex-col justify-center items-center gap-1")}>
      <div>
        <Image className="rounded-3xl" src={image.url} alt={name} width={image.width} height={image.height} />
      </div>
      <div>{name}</div>
    </div>
  );
}

export default ArtistMember;