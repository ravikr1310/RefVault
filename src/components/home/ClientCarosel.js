
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

import BusinessMan from '../../images/smiling-businessman-his-office.png';
import Scanner from '../../images/person-scanning-qr-code.png';
import YoungBusiness from '../../images/young-businessmanimg.png';
import CarouselRightArrow from '../../images/CarouselRightArrow.png';
import CarouselLeftArrow from '../../images/CarouselLeftArrow.png';
import OpenWhiteDoubleCot from '../../images/OpenWhiteDoubleCott.png';
import CloseWhiteDoubleCOt from '../../images/CloseWhiteDoubleCott.png';

const testimonials = [
  {
    name: "John Smith",
    position: "CEO Agency",
    image: "https://via.placeholder.com/80", // Replace with actual image
    feedback:
      "The product exceeded my expectations! The quality is top-notch, and it arrived earlier than expected. However, I think the packaging could be improved to avoid any possible damage during shipping. Overall, great purchase!",
  },
  {
    name: "Jane Doe",
    position: "Product Manager",
    image: "https://via.placeholder.com/80", // Replace with actual image
    feedback: "Great experience! The support team was very helpful and responsive.",
  },
  {
    name: "Michael Johnson",
    position: "Designer",
    image: "https://via.placeholder.com/80", // Replace with actual image
    feedback: "Amazing product with fantastic customer service!"
  }
];

export default function FeatureCarousel() {
  const [activeIndex, setActiveIndex] = useState(1); // Track active slide

  return (
    <div className="relative py-12 client-custom-carousel">

      <div className="relative max-w-5xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          // spaceBetween={20}
          centeredSlides={true}
          slidesPerView={1}
          loop={true}
          initialSlide={0}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          navigation={{
            prevEl: ".prev-btn",
            nextEl: ".next-btn",
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="relative"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center relative">
              <div className="bg-[#256F77] text-white rounded-lg p-8 text-center shadow-lg max-w-[600px] h-[339px] m-auto">
                <div className="flex flex-col justify-end items-end pb-[34px]">
                  <h3 className="text-xl font-poppins font-bold">{testimonial.name}</h3>
                  <p className="text-sm font-notoSans font-light">{testimonial.position}</p>
                </div>
                <div className="relative">
                  <img src={OpenWhiteDoubleCot} alt="open double cott" className="relative -right-5" />
                  <blockquote className="max-w-[408px] m-auto text-base font-light font-notoSans">{testimonial.feedback}</blockquote>
                  <img src={CloseWhiteDoubleCOt} alt="close double cott" className="absolute right-0" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-0 z-10 left-[46%]">
          <img
            src={BusinessMan}
            alt={"testimonial.name"}
            className="w-20 h-20 rounded-full mx-auto -mt-12 mb-4"
          />
        </div>
        {/* Navigation Arrows */}
        <div className="flex justify-between">
          <button className="prev-btn absolute -left-[80px] top-[45%] transform -translate-y-1/2 p-2 ">
            <img src={CarouselLeftArrow} alt="Left Arrow" />
          </button>
          <button className="next-btn absolute -right-[80px] top-[45%] transform -translate-y-1/2 p-2">
            <img src={CarouselRightArrow} alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}
