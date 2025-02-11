"use client";

import { useInView } from "react-intersection-observer";
import { useChartQuery } from "@/hooks/useChartQuery";
import { useEffect } from "react";
import ChartCard from "./chartCard";
import { Album } from "@/app/\btypes/top100";

const Chart = () => {
  const { ref, inView } = useInView();
  const {
    data: chart100,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useChartQuery();
  const chartItems = chart100?.pages.flatMap((page) => page.data) ?? [];

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (status === "error") return <div>에러가 발생했습니다</div>;

  return (
    <main>
      <h1>실시간 TOP 100</h1>
      <div className="space-y-4 overflow-y-auto h-[calc(100vh-460px)]">
        <div className="flex justify-between font-bold text-muted-foreground text-sm pt-4 px-4">
          <span>앨범 정보</span>
          <span>음원 지수</span>
        </div>
        {chartItems.map((item: Album) => (
          <ChartCard key={item.rank} item={item} />
        ))}
        <div ref={ref} className="h-4">
          {isFetchingNextPage && <div>로딩중…</div>}
        </div>
      </div>
    </main>
  );
};

export default Chart;
