import { Top100Response } from "@/app/\btypes/top100";
import { top100List } from "@/lib/constants/top100List";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 0;
  const MAX_PAGE = 10;

  const datas = Array(100)
    .fill(0)
    .map((_, i) => {
      const album = top100List[i % 5];

      return {
        rank: i + 1,
        imgUrl: album.imgUrl,
        titleSong: album.titleSong,
        singer: album.singer,
        albumTitle: album.albumTitle,
        point: album.point,
      };
    });

  const hasNextPage = MAX_PAGE - 1 > page;

  return NextResponse.json({
    data: datas.slice(page * 10, page * 10 + 10).map((album) => ({
      ...album,
      point: Number(album.point),
    })),
    hasNextPage,
  } satisfies Top100Response);
}
