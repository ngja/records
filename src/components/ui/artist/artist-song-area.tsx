import React from 'react';
import {Separator} from "@/components/ui/separator";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ScrollArea, ScrollBar} from "@/components/ui/scroll-area";
import {ArtistDetailSong} from "@/lib/def/artist-def";

interface ArtistSongArea {
  songs: ArtistDetailSong[]
}

function ArtistSongArea({
  songs,
}: ArtistSongArea) {
  return (
    <div>
      <div>Songs</div>
      <Separator className="mt-1 mb-3"/>
      <ScrollArea className="w-full">
        <Table>
          <TableCaption>Songs</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>Record</TableHead>
              <TableHead>Release Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {songs.map((song) => (
              <TableRow key={song.id}>
                <TableCell className="font-semibold max-w-[100px] truncate">{song.title}</TableCell>
                <TableCell className="truncate">{song.album}</TableCell>
                <TableCell className="truncate">{song.releaseDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}

export default ArtistSongArea;