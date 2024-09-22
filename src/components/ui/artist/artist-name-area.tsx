import React from 'react';
import Image from "next/image";

interface ArtistNameAreaProps {
  name: string
  img: string
  width: number
  height: number
}

function ArtistNameArea({
  name,
  img,
  width,
  height,
}: ArtistNameAreaProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <Image src={img} alt={name} width={width} height={height} />
    </div>
  );
}

export default ArtistNameArea;