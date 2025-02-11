"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { useState } from "react";
import "swiper/css";
import Chart from "@/components/featured/home/chart";
import Whook from "@/components/featured/home/whook";
import Event from "@/components/featured/home/event";
import News from "@/components/featured/home/news";
import Store from "@/components/featured/home/store";
import Charging from "@/components/featured/home/charging";
import { tabItems } from "@/lib/constants/tabItems";

const tabContents = [
  {
    value: "chart",
    component: <Chart />,
  },
  {
    value: "whook",
    component: <Whook />,
  },
  {
    value: "event",
    component: <Event />,
  },
  {
    value: "news",
    component: <News />,
  },
  {
    value: "store",
    component: <Store />,
  },
  {
    value: "charging",
    component: <Charging />,
  },
];

const Home = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeTab, setActiveTab] = useState(tabItems[0].value);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    const index = tabItems.findIndex((item) => item.value === value);
    swiper?.slideTo(index);
  };

  const handleSlideChange = (swiper: SwiperType) => {
    const newValue = tabItems[swiper.activeIndex].value;
    setActiveTab(newValue);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
      <div className="max-w-[600px] w-full fixed top-0 bg-primary z-50">
        <TabsList className="w-full h-14 justify-between bg-transparent">
          {tabItems.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="text-white data-[state=active]:text-black font-bold"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={handleSlideChange}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full"
      >
        {tabContents.map(({ value, component }) => (
          <SwiperSlide key={value}>
            <TabsContent
              value={value}
              forceMount
              className="bg-muted p-4 min-h-screen"
            >
              {component}
            </TabsContent>
          </SwiperSlide>
        ))}
      </Swiper>
    </Tabs>
  );
};
export default Home;
