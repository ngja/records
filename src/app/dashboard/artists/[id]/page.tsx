import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import ArtistNameArea from "@/components/ui/artist/artist-name-area";
import ArtistPictureArea from "@/components/ui/artist/artist-picture-area";
import {getArtist, getMvs, getPerformances, getRecordByArtist, getSongByArtist} from "@/lib/data";
import ArtistBasicInfoArea from "@/components/ui/artist/artist-basic-info-area";
import ArtistMemberArea from "@/components/ui/artist/artist-member-area";
import ArtistRecordArea from "@/components/ui/artist/artist-record-area";
import ArtistSongArea from "@/components/ui/artist/artist-song-area";
import ArtistPerformanceArea from "@/components/ui/artist/artist-performance-area";
import ArtistContentArea from "@/components/ui/artist/artist-content-area";
import ArtistMvArea from "@/components/ui/artist/artist-mv-area";

async function ArtistPage({ params }: { params: { id: string }}) {
  const id = params.id
  const artistDetail = await getArtist(id)
  const records = await getRecordByArtist(id)
  const songs = await getSongByArtist(id)
  const mvs = await getMvs()
  const performances = await getPerformances()

  return (
    <div className="p-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Artists", href: "/dashboard/artists" },
          { label: id, href: `/dashboard/artists/${id}` },
        ]} />
      </div>
      <div className="grid grid-cols-6 gap-6 mt-5">
        <div className="col-span-6 lg:col-span-6 mb-3 w-fit">
          <ArtistNameArea name={artistDetail.name}/>
        </div>
        <div className="col-span-6 lg:col-span-4 w-fit">
          <ArtistPictureArea
            name={artistDetail.name}
            url={artistDetail.mainImage.url}
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
          <ArtistRecordArea records={records}/>
        </div>
        <div className="rounded-sm col-span-6 lg:col-span-2">
          <ArtistSongArea songs={songs}/>
        </div>
        <div className="rounded-sm col-span-6 lg:col-span-6">
          <ArtistMvArea mvs={mvs} />
        </div>
        <div className="rounded-sm col-span-6 lg:col-span-6">
          <ArtistPerformanceArea
            concerts={performances.filter(i => i.type === 'concert')}
            fanevents={performances.filter(i => i.type === 'fanevent')}
          />
        </div>
        <div className="rounded-sm col-span-6 lg:col-span-6">
          <ArtistContentArea />
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;