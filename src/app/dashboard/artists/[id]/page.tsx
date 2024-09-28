import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import ArtistNameArea from "@/components/ui/artist/artist-name-area";
import ArtistPictureArea from "@/components/ui/artist/artist-picture-area";
import {dummyCalendarData, getArtist, getRecordByArtist} from "@/lib/data";
import ArtistBasicInfoArea from "@/components/ui/artist/artist-basic-info-area";
import ArtistMemberArea from "@/components/ui/artist/artist-member-area";
import ArtistRecordArea from "@/components/ui/artist/artist-record-area";
import ArtistScheduleArea from "@/components/ui/artist/artist-schedule-area";

async function ArtistPage({ params }: { params: { id: string }}) {
  const id = params.id
  const artistDetail = await getArtist(id)
  const records = await getRecordByArtist(id)

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
        <div className="col-span-6 md:col-span-6 mb-3 w-fit">
          <ArtistNameArea name={artistDetail.name} />
        </div>
        <div className="col-span-6 md:col-span-4 w-fit">
          <ArtistPictureArea
            name={artistDetail.name}
            url={artistDetail.mainImage.url}
            width={artistDetail.mainImage.width}
            height={artistDetail.mainImage.height}
          />
        </div>
        <div className="col-span-6 md:col-span-2 w-fit">
          <ArtistBasicInfoArea name={artistDetail.name} description={artistDetail.description} />
        </div>
        <div className="rounded-sm col-span-6 md:col-span-6">
          <ArtistMemberArea members={artistDetail.members}/>
        </div>
        <div className="rounded-sm col-span-6 md:col-span-4">
          <ArtistRecordArea records={records}/>
        </div>
        <div className="bg-violet-400 rounded-sm col-span-6 md:col-span-2">수상 경력</div>
        <div className="bg-fuchsia-400 rounded-sm col-span-6 md:col-span-6">공연</div>
        <div className="bg-indigo-400 rounded-sm col-span-6 md:col-span-6">콘텐츠</div>
        <div className="col-span-6 md:col-span-6">
          <ArtistScheduleArea start="2024-01-01" end="2024-12-31" data={dummyCalendarData} />
        </div>
      </div>
    </div>
  );
}

export default ArtistPage;