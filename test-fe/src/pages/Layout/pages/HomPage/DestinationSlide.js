import { useEffect, useState } from "react";
import iconArow from "../../../../assets/imgs/icon-arow.png";

import destination1 from "../../../../assets/imgs/destination_1_1.jpg.png";
import destination2 from "../../../../assets/imgs/destination_1_2.jpg.png";
import destination3 from "../../../../assets/imgs/destination_1_3.jpg.png";
import destination4 from "../../../../assets/imgs/destination_1_4.jpg.png";
import destination5 from "../../../../assets/imgs/destination_1_5.jpg.png";

export default function DestinationSide() {
  const slides = [
    { img: destination5, title: "Nepal" },
    { img: destination2, title: "Maldives" },
    { img: destination1, title: "Thailand" },
    { img: destination3, title: "Belgium" },
    { img: destination4, title: "Island" },
  ];

  const [current, setCurrent] = useState(2); 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [slides.length]);

  const getIndex = (offset) =>
    (current + offset + slides.length) % slides.length;

  return (
    <section className="destination">
      <div className="destination-container">
        <div className="destination__header">
          <p className="destination__subtitle">Top Destination</p>
          <h3 className="destination__title">Popular Destination</h3>
        </div>

        <div className="destination__slider flex justify-center">
          {[getIndex(-2), getIndex(-1), current, getIndex(1), getIndex(2)].map(
            (idx, pos) => (
              <div
                key={idx}
                className={`destination__slide ${pos === 2
                    ? "swiper-slide-active"
                    : pos === 1
                      ? "swiper-slide-prev"
                      : pos === 3
                        ? "swiper-slide-next"
                        : pos === 0
                          ? "swiper-slide-first"
                          : pos === 4
                            ? "swiper-slide-last"
                            : ""
                  }`}
                style={{ backgroundImage: `url(${slides[idx].img})` }}
              >
                <div className="destination__slide-bg" />
                <div className="destination__slide-content">
                  <div className="destination__slide-info">
                    <h4 className="destination__slide-title">
                      {slides[idx].title}
                    </h4>
                    <p className="destination__slide-count">22 Listing</p>
                  </div>

                  <a href="#" className="destination__slide-link">
                    View All
                    <img src={iconArow} alt="" className="hero-btn-icon" />
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
