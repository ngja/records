'use client';

import React from 'react';
import {Separator} from "@/components/ui/separator";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {Bar, BarChart, CartesianGrid, XAxis, YAxis} from "recharts";
import {chartData} from "@/db/dummy-contents";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";

const chartConfig = {
  youtube: {
    label: "Official Youtube",
    color: "hsl(var(--chart-1))",
  },
  live: {
    label: "Live",
    color: "hsl(var(--chart-2))",
  },
  web: {
    label: "Web Contents",
    color: "hsl(var(--chart-3))",
  },
  tv: {
    label: "TV",
    color: "hsl(var(--chart-4))",
  },
  radio: {
    label: "Radio",
    color: "hsl(var(--chart-5))",
  }
} satisfies ChartConfig

interface ArtistContentAreaProps {
}

function ArtistContentArea({
}: ArtistContentAreaProps) {

  return (
    <div>
      <div>Contents</div>
      <Separator className="mt-1 mb-3" />
      <div className="w-full">
        <Card>
          <CardHeader>
            <CardTitle>September Contents</CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
              <BarChart accessibilityLayer data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={10}
                  minTickGap={36}
                  axisLine={false}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={15}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="youtube" stackId="1" fill="var(--color-youtube)" />
                <Bar dataKey="live" stackId="1" fill="var(--color-live)" />
                <Bar dataKey="web" stackId="1" fill="var(--color-web)" />
                <Bar dataKey="tv" stackId="1" fill="var(--color-tv)" />
                <Bar dataKey="radio" stackId="1" fill="var(--color-radio)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ArtistContentArea;