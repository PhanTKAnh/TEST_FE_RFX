import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import iconArow from '../../../../assets/imgs/icon-arow.png';
import iconPos from '../../../../assets/imgs/icon-pos.png';
import iconClock from '../../../../assets/imgs/Icon-clock.png';
import iconArrowBlue from '../../../../assets/imgs/icon-arrow-blue.png';

import tourBox1 from '../../../../assets/imgs/tour_box_1.jpg.png';
import tourBox2 from '../../../../assets/imgs/tour_box_2.jpg.png';
import tourBox3 from '../../../../assets/imgs/tour_box_3.jpg.png';
import tourBox4 from '../../../../assets/imgs/tour_box_4.jpg.png';

export default function PopularSlide() {
  const slides = [
    { img: tourBox2, title: "Ghorepani Poon Hill Trek", position: "Bhutan, Pokhara", price: "$569.00", days: "5 Days" },
    { img: tourBox3, title: "Langtang Valley Trekking", position: "Bhutan, India, Pokhara", price: "$600.00", days: "6 Days" },
    { img: tourBox4, title: "Short Trek around Pokhara", position: "Bhutan, India, Tibet", price: "$250.00", days: "6 Days" },
    { img: tourBox1, title: "Island Peak Climbing", position: "Nepal, Pokhara, Tibet", price: "$569.00", days: "3 Days" },
    { img: tourBox1, title: "Island Peak Climbing", position: "Nepal, Pokhara, Tibet", price: "$569.00", days: "3 Days" },
    
  ];

  return (
    <section className="popular">
      <div className="container">
        <div className="popular__header">
          <div className="popular__subtitle">Best Recommended Places</div>
          <h3 className="popular__title">Popular Destination we offer for all</h3>
          <div className="popular__desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor<br />
            incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
            el: '.popular-pagination', 
          }}
          modules={[Pagination]}
          className="popular__slider"
           breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 15 },
    480: { slidesPerView: 1, spaceBetween: 15 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 25 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 4, spaceBetween: 30 },
  }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="popular__card">
              <img src={slide.img} alt={slide.title} className="popular__image" />
              <div className="popular__content">
                <div className="popular__tour-title">{slide.title}</div>
                <div className="popular__location"><img src={iconPos} />{slide.position}</div>
                <div className="popular__price">{slide.price}<span>/Person</span></div>
              </div>
              <div className="popular__footer">
                <div className="popular__days"><img src={iconClock} />{slide.days}</div>
                <a href="#" className="popular__btn">
                  Book Now
                  <img src={iconArrowBlue} alt="" className="popular__btnicon" />
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="popular-pagination"></div>


      </div>
    </section>
  );
}
