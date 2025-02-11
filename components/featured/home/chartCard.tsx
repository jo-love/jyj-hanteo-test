import { Album } from "@/app/\btypes/top100";
import Image from "next/image";

const ChartCard = ({ item }: { item: Album }) => {
  return (
    <div
      key={item.rank}
      className="grid grid-cols-12 gap-4 sm:p-4 items-center"
    >
      <div className="col-span-4 flex items-center gap-4">
        <Image
          src={item.imgUrl}
          alt={item.titleSong}
          width={60}
          height={60}
          className="w-12 h-12 sm:w-[80px] sm:h-[80px]"
        />
        <p className="sm:text-2xl text-md font-bold">{item.rank}</p>
      </div>
      <div className="sm:col-span-6 col-span-5 flex flex-col gap-2 sm:text-base text-sm">
        <p className="font-bold">{item.titleSong}</p>
        <p className="text-muted-foreground">{item.singer}</p>
      </div>
      <p className="col-span-2 font-bold text-right sm:text-base text-sm">
        {Number(item.point).toLocaleString()}
      </p>
    </div>
  );
};

export default ChartCard;
