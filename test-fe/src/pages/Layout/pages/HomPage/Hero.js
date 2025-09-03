import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import bg1 from '../../../../assets/imgs/Background.png';
import bg2 from '../../../../assets/imgs/3.png';
import bg3 from '../../../../assets/imgs/Background.png';
import iconArow from '../../../../assets/imgs/icon-arow.png';
import iconLeftArrow from '../../../../assets/imgs/left-arrow.svg.png';
import iconRightArrow from '../../../../assets/imgs/right-arrow.svg.png';
import TripFilter from "./TripFilter";

export default function Hero() {
  const slides = [bg1, bg2, bg3];

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [swiperReady, setSwiperReady] = useState(false);

  useEffect(() => {
    setSwiperReady(true);
  }, []);

  return (
    <>
    <section className="hero-wrapper">
      <div className="hero-main-content">
        <p className="hero-intro">Get unforgettable pleasure with us</p>
        <h3 className="hero-heading">Explore beauty of the whole world</h3>
        <div className="hero-btn-group">
          <a href="#" className="hero-btn hero-btn-primary">
            Explore Tours
            <img src={iconArow} alt="" className="hero-btn-icon" />
          </a>
          <a href="#" className="hero-btn hero-btn-secondary">
            Our Services
            <img src={iconArow} alt="" className="hero-btn-icon" />
          </a>
        </div>
      </div>

      {swiperReady && (
        <Swiper
          className="hero-slider"
          modules={[Navigation, Pagination, Autoplay]}
          loop
          autoplay={{ delay: 5000 }}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
           pagination={{ clickable: true }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
        >
          {slides.map((img, index) => (
            <SwiperSlide key={index} className="hero-slide-item">
              <div
                className="hero-slide-bg"
                style={{ backgroundImage: `url(${img})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div ref={prevRef} className="hero-nav-prev">
        <img src={iconLeftArrow} alt="Prev" />
      </div>
      <div ref={nextRef} className="hero-nav-next">
        <img src={iconRightArrow} alt="Next" />
      </div>
         <TripFilter/>
    </section>
     
    </>
  );
}
