
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

import BusinessMan from '../../images/smiling-businessman-his-office.png';
import Scanner from '../../images/person-scanning-qr-code.png';
import YoungBusiness from '../../images/young-businessmanimg.png';
import { CaroselRightArrow, CaroselLeftArrow } from '../constant/SvgFile';

const features = [
  {
    title: "Role-Specific Questionnaires",
    img: Scanner, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Role-Specific Questionnaires",
    img: BusinessMan, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Multisource Feedback Collection",
    img: YoungBusiness, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Role-Specific Questionnaires",
    img: Scanner, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Role-Specific Questionnaires",
    img: BusinessMan, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Multisource Feedback Collection",
    img: YoungBusiness, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Role-Specific Questionnaires",
    img: Scanner, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Role-Specific Questionnaires",
    img: BusinessMan, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Multisource Feedback Collection",
    img: YoungBusiness, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Role-Specific Questionnaires",
    img: Scanner, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Role-Specific Questionnaires",
    img: BusinessMan, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
  {
    title: "Multisource Feedback Collection",
    img: YoungBusiness, // Replace with actual image URL
    description: "These are customized surveys designed to assess the skills, qualifications, and experiences relevant to a particular job or role.",
  },
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Track active slide

  return (
    <div className="relative py-12 feature-custom-carousel">

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
                className={`transition-all duration-300 ease-in-out ${activeIndex === index ? "scale-100 shadow-2xl pt-[10px] h-[375px]" : "scale-90 mt-[41px] opacity-70"
                  } bg-white rounded-lg shadow-lg p-[10px] w-[270px] text-center`}
              >
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="w-[250px] h-[172px] object-cover rounded-md mb-[30px]"
                />
                <h3 className="text-lg font-semibold pb-5">{feature.title}</h3>
                {activeIndex === index && (
                  <p className="text-sm text-gray-600 pb-[30px]">{feature.description}</p>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Arrows */}
        <div className="flex justify-between">
          <button className="prev-btn absolute -left-[80px] top-[33%] transform -translate-y-1/2 p-2 rounded-full shadow-md">
            <CaroselLeftArrow />
          </button>
          <button className="next-btn absolute -right-[80px] top-[33%] transform -translate-y-1/2 p-2 rounded-full shadow-md">
            <CaroselRightArrow />
          </button>
        </div>
      </div>
      <style>
        {/* {`
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
        `} */}
      </style>
    </div>
  );
}
