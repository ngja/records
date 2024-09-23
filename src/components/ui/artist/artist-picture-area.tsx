import React from 'react';
import Image from "next/image";

interface ArtistPictureAreaProps {
  name: string
  url: string
  width: number
  height: number
}

function ArtistPictureArea({
  name,
  url,
  width,
  height,
}: ArtistPictureAreaProps) {
  return (
    <div className="flex justify-center items-center">
      <Image src={url} width={width} height={height} alt={name} />
    </div>
  );
}

export default ArtistPictureArea;