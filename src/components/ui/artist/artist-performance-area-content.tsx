import React from 'react';
import {Performance} from "@/lib/definitions";
import Image from "next/image";
import {format} from "date-fns";

interface ArtistPerformanceAreaContentProps {
  performance: Performance[],
}

function ArtistPerformanceAreaContent({
  performance,
}: ArtistPerformanceAreaContentProps) {
  return (
    <div className="flex gap-3">
      {performance.map((performance) => (
        <div key={performance.id} className="flex flex-col justify-center items-center">
          <Image
            src={performance.image.url}
            alt={performance.name}
            width={performance.image.width}
            height={performance.image.height}
          />
          <div className="truncate">{performance.name}</div>
          <div className="truncate">{format(performance.startDate, 'yyyy-MM-dd')} ~ {format(performance.endDate, 'yyyy-MM-dd')}</div>
        </div>
      ))}
    </div>
  );
}

export default ArtistPerformanceAreaContent;