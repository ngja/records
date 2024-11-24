import React from 'react';
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {ArtistDetailConcert} from "@/lib/def/artist-def";
import ArtistConcertAreaContent from "@/components/ui/artist/artist-concert-area-content";

interface ArtistConcertAreaProps {
  concerts: ArtistDetailConcert[],
}

function ArtistConcertArea({
  concerts,
}: ArtistConcertAreaProps) {
  return (
    <div>
      <div>Performance</div>
      <Separator className="mt-1 mb-3" />
      <div>
        <Tabs defaultValue="tour">
          <TabsList>
            <TabsTrigger value="tour">Tour</TabsTrigger>
            <TabsTrigger value="fanmeeting">Fan Meeting</TabsTrigger>
          </TabsList>
          <TabsContent value="tour">
            <ArtistConcertAreaContent concerts={concerts.filter((c) => c.type === "투어")} />
          </TabsContent>
          <TabsContent value="fanmeeting">
            <ArtistConcertAreaContent concerts={concerts.filter((c) => c.type === "팬미팅")} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ArtistConcertArea;