import { Slide } from "@/app/\btypes/slide";
import { slides } from "@/public/assets/images";

export const mockSlides: Slide[] = [
  {
    id: "1",
    imageUrl: slides.slide1.src,
    title: "[M COUNTDOWN]10월 2주차 엠카 사전투표 안내",
    href: "https://poc.mnetplus.world/mcountdown/ko/play",
    date: "2020.02.08 10:00 - 2020.04.08 17:00",
  },
  {
    id: "2",
    imageUrl: slides.slide2.src,
    title: "[WhosPICK] 밸런타인데이 특집",
    href: "https://whosfanstore.com/",
    date: "2020.02.08 10:00 - 2020.04.08 17:00",
  },
  {
    id: "3",
    imageUrl: slides.slide3.src,
    title: "2024 한터뮤직어워드",
    href: "https://www.hanteochart.com/",
    date: "2025.02.15 10:00 - 2025.02.16 17:00",
  },
];
