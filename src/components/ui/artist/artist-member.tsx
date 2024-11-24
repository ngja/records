import React from 'react';
import Image from "next/image";
import {cn} from "@/lib/utils";
import {Img} from "@/lib/def/common";
import {cdn} from "@/lib/api/cdn-config";

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
        <Image className="rounded-3xl" src={cdn(image.path)} alt={name} width={image.width} height={image.height} />
      </div>
      <div>{name}</div>
    </div>
  );
}

export default ArtistMember;