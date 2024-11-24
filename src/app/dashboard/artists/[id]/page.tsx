import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import ArtistNameArea from "@/components/ui/artist/artist-name-area";
import ArtistPictureArea from "@/components/ui/artist/artist-picture-area";
import ArtistBasicInfoArea from "@/components/ui/artist/artist-basic-info-area";
import ArtistMemberArea from "@/components/ui/artist/artist-member-area";
import ArtistRecordArea from "@/components/ui/artist/artist-record-area";
import ArtistSongArea from "@/components/ui/artist/artist-song-area";
import ArtistConcertArea from "@/components/ui/artist/artist-concert-area";
import ArtistMvArea from "@/components/ui/artist/artist-mv-area";
import {artistApi} from "@/lib/api/artist-api";

async function ArtistPage({ params }: { params: { id: string }}) {
  const id = params.id
  const response = await artistApi.getArtistDetail(id)
  const artistDetail = response.result

  return (
    <div className="p-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Artists", href: "/dashboard/artists" },
          { label: artistDetail.name, href: `/dashboard/artists/${id}` },
        ]} />
      </div>
      <div className="grid grid-cols-6 gap-6 mt-5">
        <div className="col-span-6 lg:col-span-6 mb-3 w-fit">
          <ArtistNameArea name={artistDetail.name}/>
        </div>
        <div className="col-span-6 lg:col-span-4 w-fit">
          <ArtistPictureArea
            name={artistDetail.name}
            path={artistDetail.mainImage.path}
            width={artistDetail.mainImage.width}
            height={artistDetail.mainImage.height}
          />
        </div>
        <div className="col-span-6 lg:col-span-2 w-fit">
          <ArtistBasicInfoArea name={artistDetail.name} description={artistDetail.description}/>
        </div>
        <div className="rounded-sm col-span-6 lg:col-span-6">
          <ArtistMemberArea members={artistDetail.members}/>
        </div>
        <div className="rounded-sm col-span-6 lg:col-span-4">
          <ArtistRecordArea records={artistDetail.albums}/>
        </div>
        <div className="rounded-sm col-span-6 lg:col-span-2">
          <ArtistSongArea songs={artistDetail.songs}/>
        </div>
        <div className="rounded-sm col-span-6 lg:col-span-6">
          <ArtistMvArea mvs={artistDetail.mvs}/>
        </div>
        <div className="rounded-sm col-span-6 lg:col-span-6">
          <ArtistConcertArea concerts={artistDetail.concerts}/>
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;