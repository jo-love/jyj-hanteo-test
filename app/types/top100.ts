export interface Album {
  rank: number;
  imgUrl: string;
  titleSong: string;
  singer: string;
  albumTitle: string;
  point: number;
}

export interface Top100Response {
  data: Album[];
  hasNextPage: boolean;
}
