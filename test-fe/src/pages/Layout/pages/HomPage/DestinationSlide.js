import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import iconArow from '../../../../assets/imgs/icon-arow.png';

import destination1 from "../../../../assets/imgs/destination_1_1.jpg.png";
import destination2 from "../../../../assets/imgs/destination_1_2.jpg.png";
import destination3 from "../../../../assets/imgs/destination_1_3.jpg.png";
import destination4 from "../../../../assets/imgs/destination_1_4.jpg.png";
import destination5 from "../../../../assets/imgs/destination_1_5.jpg.png";

export default function DestinationSide() {
  const [slides, setSlides] = useState([
    { img: destination5, title: "Nepal" },
    { img: destination2, title: "Maldives" },
    { img: destination1, title: "Thailand" },
    { img: destination3, title: "Belgium" },
    { img: destination4, title: "Island" },
  ]);

  const swiperRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlides((prev) => {
        const newSlides = [...prev];
        newSlides.push(newSlides.shift()); // xoay mảng: phần tử đầu → cuối
        return newSlides;
      });

      // ép Swiper chọn lại slide giữa (index = 2)
      if (swiperRef.current) {
        swiperRef.current.slideTo(2, 0);
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="destination">
      <div className="destination-container">
        <div className="destination__header">
          <p className="destination__subtitle">Top Destination</p>
          <h3 className="destination__title">Popular Destination</h3>
        </div>

        <Swiper
          className="destination__slider"
          modules={[EffectCoverflow]}
          slidesPerView={5}
          initialSlide={2}
          spaceBetween={-194}
          centeredSlides={true}
          loop={false}
          allowTouchMove={false}
          simulateTouch={false}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            depth: 300,
            modifier: 1.2,
            slideShadows: false,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((item, idx) => (
            <SwiperSlide key={idx} className="destination__slide">
              <div
                className="destination__slide-bg"
                style={{ backgroundImage: `url(${item.img})` }}
              />
              <div className="destination__slide-content">
                <div className="destination__slide-info">
                  <h4 className="destination__slide-title">{item.title}</h4>
                  <p className="destination__slide-count">22 Listing</p>
                </div>

                <a href="#" className="destination__slide-link">
                  View All
                  <img src={iconArow} alt="" className="hero-btn-icon" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
