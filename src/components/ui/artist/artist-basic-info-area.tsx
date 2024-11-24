import React from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";

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