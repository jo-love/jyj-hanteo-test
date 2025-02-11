"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { Slide } from "@/app/\btypes/slide";
import Link from "next/link";

interface SliderProps {
  slides: Slide[];
}
const Slider = ({ slides }: SliderProps) => {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, playOnInit: false }),
  );
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <Carousel
      className="mt-14 pt-2 h-[324px]"
      plugins={[plugin.current]}
      setApi={setApi}
      opts={{
        align: "center",
        loop: true,
        skipSnaps: false,
        dragFree: false,
      }}
    >
      <CarouselContent className="px-4 gap-[10px] ">
        {slides.map((slide) => (
          <CarouselItem className="py-5" key={slide.id}>
            <Link
              href={slide.href}
              target="_blank"
              className="flex flex-col w-full rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="w-full h-[200px] relative">
                <Image
                  src={slide.imageUrl}
                  alt={slide.id}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-2">
                <p className="font-bold truncate">{slide.title}</p>
                <p className="text-sm text-right truncate">{slide.date}</p>
              </div>
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex justify-center gap-2 mt-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index ? "bg-primary w-4" : "bg-gray-300"
            }`}
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </Carousel>
  );
};

export default Slider;
