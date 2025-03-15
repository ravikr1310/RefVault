
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

import BusinessMan from '../../images/smiling-businessman-his-office.png';
import { CaroselRightArrow, CaroselLeftArrow } from '../constant/SvgFile';

const features = [
  {
    title: "Slide One",
    img: "your_image_url_1", // Replace with actual image URL
    description: "Description two",
  },
  {
    title: "Slide One",
    img: "your_image_url_1", // Replace with actual image URL
    description: "Description two",
  },
  {
    title: "Slide One",
    img: "your_image_url_1", // Replace with actual image URL
    description: "Description two",
  },
  {
    title: "Slide One",
    img: "your_image_url_1", // Replace with actual image URL
    description: "Description two",
  },
  {
    title: "Slide One",
    img: "your_image_url_1", // Replace with actual image URL
    description: "Description two",
  },
  {
    title: "Slide One",
    img: "your_image_url_1", // Replace with actual image URL
    description: "Description two",
  },
  {
    title: "Slide One",
    img: "your_image_url_1", // Replace with actual image URL
    description: "Description two",
  },
  {
    title: "Slide One",
    img: "your_image_url_1", // Replace with actual image URL
    description: "Description two",
  },
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Track active slide

  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-teal-500 py-12">
 
      <div className="relative max-w-5xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
        //   slidesPerView={3}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true} 
          initialSlide={0}  
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{
            // el: ".custom-pagination",
            clickable: true,
            // renderBullet: function (index, className) {
            //   return `<span class="${className} custom-bullet">_</span>`;
            // },
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeIndex === index ? "scale-110 shadow-2xl" : "scale-90 opacity-70"
                } bg-white rounded-lg shadow-lg p-4 w-72 text-center`}
              >
                <img
                  src={BusinessMan}
                  alt={feature.title}
                  className="w-full h-44 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                {feature.description && (
                  <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <button className="prev-btn absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md">
          <CaroselLeftArrow />
        </button>
        <button className="next-btn absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md">
          <CaroselRightArrow />
        </button>
      </div>
      <style>
        {`
          .custom-pagination {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 6px;
            margin-top: 10px;
          }

          .swiper-pagination-bullet {
            width: 20px;
            height: 4px;
            background-color: gray;
            border-radius: 4px;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background-color: white;
            width: 30px;
          }
        `}
      </style>
    </div>
  );
}
