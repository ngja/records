'use client';

import React from 'react';
import {ResponsiveTimeRange} from "@nivo/calendar";
import {CalendarData} from "@/lib/nivo-definitions";
import {useTheme} from "next-themes";
import {Separator} from "@/components/ui/separator";

interface ArtistScheduleAreaProps {
  start: string
  end: string
  data: CalendarData[]
}

function ArtistScheduleArea({
  start,
  end,
  data
}: ArtistScheduleAreaProps) {
  const { theme } = useTheme();

  const calendarTheme = {
    textColor: 'hsl(var(--foreground))',
    text: {
      fontSize: '14px',
    },
    backgroundColor: 'hsl(var(--background))',
    tooltip: {
      container: {
        background: 'hsl(var(--background))',
        color: 'hsl(var(--foreground))',
        fontSize: '20px',
      },
    },
  };

  return (
    <div>
      <div>Schedule</div>
      <Separator className="mt-1 mb-3" />
      <div className="w-full h-60">
        <ResponsiveTimeRange
          data={data}
          from={start}
          to={end}
          emptyColor={theme === 'dark' ? '#444' : '#eee'}
          colors={['#9be9a8', '#30a14e', '#216e39', '#216e39']}
          margin={{top: 20, right: 20, bottom: 20, left: 20}}
          dayBorderWidth={3}
          dayBorderColor="hsl(var(--background))"
          dayRadius={5}
          theme={calendarTheme}
        />
      </div>
    </div>
  );
}

export default ArtistScheduleArea;