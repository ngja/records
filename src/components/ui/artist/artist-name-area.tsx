import React from 'react';

interface ArtistNameAreaProps {
  name: string
}

function ArtistNameArea({
  name,
}: ArtistNameAreaProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-bold text-4xl">{name}</div>
    </div>
  );
}

export default ArtistNameArea;