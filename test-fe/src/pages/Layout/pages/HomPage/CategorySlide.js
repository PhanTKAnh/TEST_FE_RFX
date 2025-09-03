import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useRef } from "react";

import category1 from "../../../../assets/imgs/category_1_4.jpg.png";
import category2 from "../../../../assets/imgs/category_1_5.jpg.png";
import category3 from "../../../../assets/imgs/category_1_1.jpg.png";
import category4 from "../../../../assets/imgs/category_1_2.jpg.png";
import category5 from "../../../../assets/imgs/category_1_3.jpg.png";

export default function CategorySide() {
  const paginationRef = useRef(null);

  const slides = [
    { img: category1, title: "Wildlife" },
    { img: category2, title: "Walking" },
    { img: category3, title: "Cruises" },
    { img: category4, title: "Hiking" },
    { img: category5, title: "Airbirds" },
        { img: category1, title: "Wildlife" },
    { img: category2, title: "Walking" },
    { img: category3, title: "Cruises" },
    { img: category4, title: "Hiking" },
    { img: category5, title: "Airbirds" },
  ];

  return (
    <section className="category">
      <div className="category-container">
        <div className="category-header">
          <p className="category-subtitle">Wornderful Place For You</p>
          <h3 className="category-title">Tour Categories</h3>
        </div>

      <Swiper
  className="category-slider"
  slidesPerView={5}
  spaceBetween={39}
   slidesPerGroup={2}
  rewind={true} 
  centeredSlides={true}
  initialSlide={2}
  pagination={{ clickable: true }}

  loopFillGroupWithBlank={true}
  modules={[Pagination]}
  breakpoints={{
    320: { slidesPerView: 2, spaceBetween: 10 },
    480: { slidesPerView: 2, spaceBetween: 15 },
    768: { slidesPerView: 3, spaceBetween: 20 },
    1024: { slidesPerView: 4, spaceBetween: 30 },
    1280: { slidesPerView: 5, spaceBetween: 39 },
  }}
>
  {slides.map((item, idx) => (
    <SwiperSlide key={idx} className="category-slide">
      <img src={item.img} alt={item.title} />
      <div className="category-content">
        <h4 className="category-slide-tl">{item.title}</h4>
        <a href="#" className="category-slide-lk">See More</a>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

      </div>
    </section>
  );
}
