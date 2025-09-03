import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import team1 from '../../../../assets/imgs/team_1_1.jpg.png';
import team2 from '../../../../assets/imgs/team_1_2.jpg.png';
import team3 from '../../../../assets/imgs/team_1_3.jpg.png';
import team4 from '../../../../assets/imgs/team_1_4.jpg.png';

import iconFace from '../../../../assets/imgs/icon-facebook.png';
import iconTw from '../../../../assets/imgs/icon-tw.png';
import iconInsta from '../../../../assets/imgs/icon-insta.png';
import iconYoutube from '../../../../assets/imgs/icon-youtube.png';

export default function TourGuide() {
    const guides = [
        { img: team2, name: "Jane Cooper", role: "Tourist Guide" },
        { img: team3, name: "Guy Hawkins", role: "Tourist Guide" },
        { img: team4, name: "Jenny Wilson", role: "Tourist Guide" },
        { img: team1, name: "Jacob Jones", role: "Tourist Guide" },
        { img: team2, name: "Jane Cooper", role: "Tourist Guide" },
        { img: team3, name: "Guy Hawkins", role: "Tourist Guide" },
        { img: team4, name: "Jenny Wilson", role: "Tourist Guide" },
        { img: team1, name: "Jacob Jones", role: "Tourist Guide" },
    ];

    return (
        <section className="tour-guide">
            <div className="container">
                <div className="tour-guide__header">
                    <div className="tour-guide__subtitle">Meet with Guide</div>
                    <h4 className="tour-guide__title">Tour Guide</h4>
                </div>
               <Swiper
  slidesPerView={4}
  slidesPerGroup={1}
  pagination={{
    clickable: true,
    el: '.tour-guide-pagination', 
  }}
  modules={[Pagination]}
  className="tour-guide__list"
           breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 15 },
    480: { slidesPerView: 1, spaceBetween: 15 },
    640: { slidesPerView: 2, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 25 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 4},
  }}
>
  {guides.map((guide, index) => (
    <SwiperSlide key={index} className="tour-guide__card">
      <div className="tour-guide__image">
        <img src={guide.img} alt={guide.name} />
      </div>
      <div className="tour-guide__content">
        <div className="tour-guide__name">{guide.name}</div>
        <div className="tour-guide__role">{guide.role}</div>
        <div className="tour-guide__socials">
          <img src={iconFace} alt="Facebook" className="tour-guide__social" />
          <img src={iconTw} alt="Twitter" className="tour-guide__social" />
          <img src={iconInsta} alt="Instagram" className="tour-guide__social" />
          <img src={iconYoutube} alt="YouTube" className="tour-guide__social" />
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

<div className="tour-guide-pagination"></div>

            </div>
        </section>
    );
}
