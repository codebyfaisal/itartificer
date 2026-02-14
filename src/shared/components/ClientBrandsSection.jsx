import SectionHeader from "@/shared/components/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { clients as cards } from "@/shared/db/clients";

const ClientBrandsSection = () => {
  return (
    <section>
      <div className="container">
        <SectionHeader
          title="Our Growing Family of Brands"
          description="From training and tech to e-commerce and education, our group of companies is driving impact across multiple industries."
        />

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="w-full pl-8!"
        >
          {cards.map(({ href, src, alt }, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block max-w-45 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
              >
                <img
                  src={src}
                  alt={alt}
                  title={alt}
                  className="w-full h-auto object-contain"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientBrandsSection;
