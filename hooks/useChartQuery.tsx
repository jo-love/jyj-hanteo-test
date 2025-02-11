import { useInfiniteQuery } from "@tanstack/react-query";

export const useChartQuery = () => {
  return useInfiniteQuery({
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
