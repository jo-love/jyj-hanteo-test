import { Album } from "@/app/\btypes/top100";
import { useInfiniteQuery } from "@tanstack/react-query";

interface ChartResponse {
  data: Album[];
  hasNextPage: boolean;
}

export const useChartQuery = () => {
  return useInfiniteQuery<ChartResponse>({
    queryKey: ["chart"],
    initialPageParam: 0,
    queryFn: async ({ pageParam }) => {
      const response = await fetch(`/api/top100?page=${pageParam}`);
      const data = await response.json();
      return data;
    },
    getNextPageParam: (page: { hasNextPage: boolean }, allPages) => {
      return page.hasNextPage ? allPages.length : undefined;
    },
  });
};
