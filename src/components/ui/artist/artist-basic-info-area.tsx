import React from 'react';
import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";

interface ArtistBasicInfoAreaProps  {
  name: string
  description: string
}

function ArtistBasicInfoArea({
  name,
  description,
}: ArtistBasicInfoAreaProps) {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}

export default ArtistBasicInfoArea;