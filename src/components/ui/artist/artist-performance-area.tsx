import React from 'react';
import {Separator} from "@/components/ui/separator";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Performance} from "@/lib/definitions";
import ArtistPerformanceAreaContent from "@/components/ui/artist/artist-performance-area-content";

interface ArtistPerformanceAreaProps {
  concerts: Performance[],
  fanevents: Performance[],
}

function ArtistPerformanceArea({
  concerts,
  fanevents,
}: ArtistPerformanceAreaProps) {
  return (
    <div>
      <div>Performance</div>
      <Separator className="mt-1 mb-3" />
      <div>
        <Tabs defaultValue="concert">
          <TabsList>
            <TabsTrigger value="concert">Concert</TabsTrigger>
            <TabsTrigger value="fanevent">Fan Event</TabsTrigger>
          </TabsList>
          <TabsContent value="concert">
            <ArtistPerformanceAreaContent performance={concerts} />
          </TabsContent>
          <TabsContent value="fanevent">
            <ArtistPerformanceAreaContent performance={fanevents} />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default ArtistPerformanceArea;