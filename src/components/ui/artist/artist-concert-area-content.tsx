import React from 'react';
import Image from "next/image";
import {ArtistDetailConcert} from "@/lib/def/artist-def";
import {cdn} from "@/lib/api/cdn-config";

interface ArtistConcertAreaContentProps {
  concerts: ArtistDetailConcert[],
}

function ArtistConcertAreaContent({
  concerts,
}: ArtistConcertAreaContentProps) {
  return (
    <div className="flex gap-3">
      {concerts.map((concert) => (
        <div key={concert.id} className="flex flex-col justify-center items-center">
          <Image
            src={cdn(concert.image.path)}
            alt={concert.name}
            width={concert.image.width}
            height={concert.image.height}
          />
          <div className="truncate">{concert.name}</div>
          <div className="truncate">{concert.startDate} ~ {concert.endDate}</div>
        </div>
      ))}
    </div>
  );
}

export default ArtistConcertAreaContent;