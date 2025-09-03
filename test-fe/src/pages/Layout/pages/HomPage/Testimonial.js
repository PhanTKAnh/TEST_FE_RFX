import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import testty1 from '../../../../assets/imgs/testi_2_1.png.png';
import testty2 from '../../../../assets/imgs/testi_2_2.png.png';
import testty3 from '../../../../assets/imgs/testi_2_3.png.png';
import iconStar from '../../../../assets/imgs/icon-star.png';
import testiQuote from '../../../../assets/imgs/testi-quote.svg.png';
import testiQuoteActive from '../../../../assets/imgs/testi-quote.svg fill.png';
import imgTesti1 from '../../../../assets/imgs/16.png';
import imgTesti2 from '../../../../assets/imgs/brand_1_3.svg.png';
import imgTesti3 from '../../../../assets/imgs/wornderful.png';
import imgTesti4 from '../../../../assets/imgs/explorer.png';
import imgTesti5 from '../../../../assets/imgs/blue-lake.png';
import iconShape7 from '../../../../assets/imgs/shape_7.png.png';


export default function Testimonial() {
  const testimonial = [
    { img: testty3, name: "Maria Doe", text: "Traveller", description: "“The home boasts sleek, contemporary architecture<br/>with clean lines and expansive windows, allowing<br/>natural light to flood the interiors It incorporates passive<br/>design principles”" },
    { img: testty1, name: "Angelina Rose", text: "Traveller", description: "“Solar panels adorn the roof, harnessing renewableb<br/>energy  to power the home and even feed excess<br/>electricity back into the grid. High - performance<br/>insulation and triple- glazed”" },
    { img: testty2, name: "Andrew Simon", text: "Traveller", description: "“A home that perfectly blends sustainability with luxury until<br/>iscovered Ecoland Residence. The moment I stepped<br/>community, I knew it was where I wanted to live.”" },
    { img: testty3, name: "Maria Doe", text: "Traveller", description: "“The home boasts sleek, contemporary architecture<br/>with clean lines and expansive windows, allowing<br/>natural light to flood the interiors It incorporates passive<br/>design principles”" },
    { img: testty1, name: "Angelina Rose", text: "Traveller", description: "“Solar panels adorn the roof, harnessing renewableb<br/>energy  to power the home and even feed excess<br/>electricity back into the grid. High - performance<br/>insulation and triple- glazed”" },
    { img: testty2, name: "Andrew Simon", text: "Traveller", description: "“A home that perfectly blends sustainability with luxury until<br/>iscovered Ecoland Residence. The moment I stepped<br/>community, I knew it was where I wanted to live.”" },
  ];
  return (
    <>
      <section className="testimonial">
        <div className="testimonial__container">
          <div className="testimonial__header">
            <div className="testimonial__subtitle">Testimonial</div>
            <h3 className="testimonial__title">What Client Say About us</h3>
          </div>
          <div className="testimonial-shape7"><img src={iconShape7} alt="iconShape7" /></div>
          
          <Swiper
            centeredSlides={true}
            slidesPerView={3}
            slidesPerGroup={1}
            loop={true}
            initialSlide={1}
            pagination={{
              clickable: true,
              el: '.testimonial-pagination',
            }}
            modules={[Pagination]}
            className="testimonial__list"
                       breakpoints={{
    768: { slidesPerView: 3, spaceBetween: 10 },
    1024: { slidesPerView: 3, spaceBetween: 30 },
    1280: { slidesPerView: 3},
  }}
          > 

            {testimonial.map((test, index) => (
              <SwiperSlide key={index} className="testimonial__card">
                <div className="testimonial__user">
                  <div className="testimonial__user-info">
                    <img src={test.img} alt={test.name} className="testimonial__avatar" />
                    <div>
                      <h6 className="testimonial__name">{test.name}</h6>
                      <p className="testimonial__role">{test.text}</p>
                    </div>
                  </div>
                  <div className="testimonial__stars">
                    {[...Array(5)].map((_, i) => (
                      <img src={iconStar} alt="star" key={i} />
                    ))}
                  </div>
                </div>
                <div className="testimonial__description" dangerouslySetInnerHTML={{ __html: test.description }}></div>
                <div className="testimonial__quote">
                  <img src={testiQuote} alt="quote" className="icon-isactive" />
                  <img src={testiQuoteActive} alt="quote" className="icon-active" />

                </div>

              </SwiperSlide>
            ))}
          </Swiper>
          <div className="testimonial-pagination"></div>

        </div>
        <div className="testimonial__brands">
          <img src={imgTesti1} alt="brand 1" className="testimonial__brand" />
          <img src={imgTesti2} alt="brand 2" className="testimonial__brand" />
          <img src={imgTesti3} alt="brand 3" className="testimonial__brand" />
          <img src={imgTesti4} alt="brand 4" className="testimonial__brand" />
          <img src={imgTesti3} alt="brand 5" className="testimonial__brand" />
          <img src={imgTesti1} alt="brand 6" className="testimonial__brand" />
          <img src={imgTesti5} alt="brand 7" className="testimonial__brand" />
          <img src={imgTesti2} alt="brand 8" className="testimonial__brand" />
        </div>
      </section>

    </>
  )
}