import { useRef, useState } from "react";
import { Button } from "@/shared/ui";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import cn from "@/shared/utils/cn";

const AUTOPLAY_DELAY = 2100;
const TRANSITION_SPEED = 1500;

const slides = [
  {
    image: "/images/home/hero-1.webp",
    title: ["We deliver because of", "our culture"],
    color: "#32a8a4",
  },
  {
    image: "/images/home/hero-2.webp",
    title: ["Engineering", "Digital Excellence"],
    color: "#8da832",
  },
  {
    image: "/images/home/deliver.webp",
    title: ["Innovating For", "The Future"],
    color: "#cc56db",
  },
];

const HomeHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
    setProgressKey((prev) => prev + 1);
  };

  const handleProgressClick = (index) => {
    if (!swiperRef.current) return;
    swiperRef.current.slideToLoop(index);
  };

  return (
    <section>
      <div className="relative h-screen min-h-150 overflow-hidden">
        {/* Swiper */}
        <div className="absolute inset-0 z-10">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={TRANSITION_SPEED}
            autoplay={{
              delay: AUTOPLAY_DELAY,
              disableOnInteraction: false,
            }}
            loop
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={handleSlideChange}
            className="h-full"
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <img
                  src={slide.image}
                  className="w-full h-full object-cover"
                  alt="hero"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 z-10 bg-linear-to-r from-black/60 to-transparent"></div>
        <div className="absolute inset-0 z-10 bg-linear-to-r from-white/10 to-white/5"></div>
        <div className="absolute inset-0 z-10 bg-linear-to-r from-transparent to-secondary/80"></div>

        {/* Content */}
        <div className="container relative z-20 flex flex-col justify-end h-5/6 pb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal capitalize text-foreground flex flex-col">
            <span className="transition-all duration-500 ease-in-out">
              {slides[activeIndex].title[0]}
            </span>
            <span
              className="transition-all duration-500 ease-in-out"
              style={{ color: slides[activeIndex].color }}
            >
              {slides[activeIndex].title[1]}
            </span>
          </h1>

          <div className="flex items-center gap-6 mt-6 flex-wrap justify-between">
            <Button className="uppercase font-bold px-6 lg:px-8">
              Contact Now
            </Button>

            {/* Navigation */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="w-10 h-10 rounded-full bg-foreground/40 flex items-center justify-center hover:bg-foreground/50 transition cursor-pointer border"
                style={{ borderColor: slides[activeIndex].color }}
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>

              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="w-10 h-10 rounded-full bg-foreground/40 flex items-center justify-center hover:bg-foreground/50 transition cursor-pointer border"
                style={{ borderColor: slides[activeIndex].color }}
              >
                <ArrowRight className="w-5 h-5 text-foreground" />
              </button>

              {/* Progress Segments */}
              <div
                className="relative h-10 bg-foreground/40 border rounded-full grid grid-cols-3 gap-2 px-4 overflow-hidden"
                style={{
                  gridTemplateColumns: `repeat(${slides.length}, minmax(0, 1fr))`,
                  width: `${slides.length * 50}px`,
                  borderColor: slides[activeIndex].color,
                }}
              >
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className="h-1 self-center rounded-full cursor-pointer z-10 relative overflow-hidden bg-foreground/30"
                    onClick={() => handleProgressClick(index)}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-foreground origin-left",
                        index === activeIndex && "animate-progress",
                        index < activeIndex ? "w-full" : "w-0",
                        index === activeIndex && "w-full",
                      )}
                      style={{
                        animationDuration:
                          index === activeIndex
                            ? `${
                                activeIndex === 0 && progressKey === 0
                                  ? AUTOPLAY_DELAY
                                  : AUTOPLAY_DELAY + TRANSITION_SPEED
                              }ms`
                            : undefined,
                        animationPlayState:
                          index === activeIndex ? "running" : "paused",
                      }}
                      key={index === activeIndex ? progressKey : undefined}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Animation */}
      <style>
        {`
          @keyframes progress {
            from { transform: scaleX(0); }
            to { transform: scaleX(1); }
          }

          .animate-progress {
            animation-name: progress;
            animation-timing-function: linear;
            animation-fill-mode: forwards;
          }
        `}
      </style>
    </section>
  );
};

export default HomeHero;
