import React from 'react';
import Image from "next/image";
import {cdn} from "@/lib/api/cdn-config";

interface ArtistPictureAreaProps {
  name: string
  path: string
  width: number
  height: number
}

function ArtistPictureArea({
  name,
  path,
  width,
  height,
}: ArtistPictureAreaProps) {
  return (
    <div className="flex justify-center items-center">
      <Image src={cdn(path)} width={width} height={height} alt={name} />
    </div>
  );
}

export default ArtistPictureArea;