import React from 'react';
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {Separator} from "@/components/ui/separator";
import {ArtistDetailMv} from "@/lib/def/artist-def";

interface ArtistMvArea {
  mvs: ArtistDetailMv[]
}

function ArtistMvArea({ mvs }: ArtistMvArea) {
  return (
    <div>
      <div>MV</div>
      <Separator className="mt-1 mb-3" />
      <div className="flex justify-center items-center">
        <div className="px-12">
          <Carousel className="flex justify-center items-center w-full">
            <CarouselContent className="h-96">
              {mvs.map((mv) => (
                <CarouselItem key={mv.id} className="lg:basis-1/3">
                  <iframe
                    className="w-full h-full"
                    src={mv.url}
                    allowFullScreen
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious/>
            <CarouselNext/>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default ArtistMvArea;