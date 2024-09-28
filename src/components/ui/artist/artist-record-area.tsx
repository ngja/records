import React from 'react';
import {Record} from "@/lib/definitions";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Separator} from "@/components/ui/separator";
import {format} from "date-fns";

interface ArtistRecordAreaProps {
  records: Record[]
}

function ArtistRecordArea({
  records
}: ArtistRecordAreaProps) {
  return (
    <div>
      <div>Records</div>
      <Separator className="mt-1 mb-3" />
      <div className="grid grid-cols-3 gap-4">
        {records.map((record) => (
          <div key={record.id} className="flex flex-col gap-1">
            <div className="flex gap-2 justify-between items-end">
              <div className="font-bold">{record.name}</div>
              <div className="text-xs">{format(record.releaseDate, 'yyyy-MM-dd')}</div>
            </div>
            <div>
              {record.tag.map((t) => (
                <Badge key={t} variant="outline">{t}</Badge>
              ))}
            </div>
            <div>
              <Image src={record.image.url} alt={record.name} width={record.image.width} height={record.image.height} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistRecordArea;