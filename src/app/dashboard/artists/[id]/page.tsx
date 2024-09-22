import React from 'react';
import BreadcrumbHolder from "@/components/breadcrumb-holder";
import ArtistNameArea from "@/components/ui/artist/artist-name-area";
import ArtistPictureArea from "@/components/ui/artist/artist-picture-area";

function ArtistPage({ params }: { params: { id: string }}) {
  const id = params.id
  return (
    <div className="p-6">
      <div>
        <BreadcrumbHolder breadcrumbs={[
          { label: "Home", href: "/dashboard" },
          { label: "Artists", href: "/dashboard/artists" },
          { label: id, href: `/dashboard/artists/${id}` },
        ]} />
      </div>
      <div className="grid grid-cols-6 gap-3 mt-5">
        <div className="col-span-6">
          <ArtistNameArea name={id} width={200} height={100} img="" />
        </div>
        <div className="bg-emerald-400 rounded-sm col-span-4">
          <ArtistPictureArea />
        </div>
        <div className="bg-yellow-400 rounded-sm col-span-2">기본 정보</div>
        <div className="bg-red-400 rounded-sm col-span-6">멤버 구성</div>
        <div className="bg-lime-400 rounded-sm col-span-4">음반</div>
        <div className="bg-violet-400 rounded-sm col-span-2">수상 경력</div>
        <div className="bg-indigo-400 rounded-sm col-span-6">콘텐츠</div>
        <div className="bg-fuchsia-400 rounded-sm col-span-6">공연</div>
      </div>
    </div>
  );
}

export default ArtistPage;