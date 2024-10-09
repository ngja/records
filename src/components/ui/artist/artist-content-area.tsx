'use client';

import React, {useCallback, useState} from 'react';
import {Separator} from "@/components/ui/separator";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import {Bar, BarChart, BarProps, CartesianGrid, XAxis, YAxis} from "recharts";
import {chartData} from "@/db/dummy-contents";
import {Card, CardContent, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {CategoricalChartState} from "recharts/types/chart/types";
import {ActiveShape} from "recharts/types/util/types";

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
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = chartData[activeIndex]

  const handleClick = useCallback((entry: CategoricalChartState) => {
    if (entry.activeTooltipIndex) {
      setActiveIndex(entry.activeTooltipIndex)
    }
  }, [setActiveIndex])

  const activeBarProps: ActiveShape<BarProps, SVGPathElement> = {
    stroke: 'hsl(var(--primary))',
    strokeWidth: 3,
    strokeLinejoin: "round"
  }

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
              <BarChart accessibilityLayer data={chartData} onClick={(data) => handleClick(data)}>
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
                <Bar cursor="pointer" dataKey="youtube" stackId="1" fill="var(--color-youtube)" activeIndex={activeIndex} activeBar={activeBarProps} />
                <Bar cursor="pointer" dataKey="live" stackId="1" fill="var(--color-live)" activeIndex={activeIndex} activeBar={activeBarProps} />
                <Bar cursor="pointer" dataKey="web" stackId="1" fill="var(--color-web)" activeIndex={activeIndex} activeBar={activeBarProps} />
                <Bar cursor="pointer" dataKey="tv" stackId="1" fill="var(--color-tv)" activeIndex={activeIndex} activeBar={activeBarProps} />
                <Bar cursor="pointer" dataKey="radio" stackId="1" fill="var(--color-radio)" activeIndex={activeIndex} activeBar={activeBarProps} />
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default ArtistContentArea;