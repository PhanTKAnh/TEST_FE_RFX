import tourmImg1 from "../../../../assets/imgs/blog-s-1-1-420x347.jpg.png";
import tourmImg2 from "../../../../assets/imgs/blog-s-1-3-420x347.jpg.png";
import tourmImg3 from "../../../../assets/imgs/blog-s-1-4-420x347.jpg.png";
import iconArrowBlue from "../../../../assets/imgs/icon-arrow-blue.png";
import iconShape1 from '../../../../assets/imgs/shape_1.png.png';
import iconShape2 from '../../../../assets/imgs/shape_2.png.png';
import iconShape3 from '../../../../assets/imgs/shape_3.png.png';
export default function TourmSection() {
  const Tourms = [
    {
      img: tourmImg1,
      title: "Enrich Your Mind Envision Your Future Education for Success",
      date: "Jul 10, 2024",
      read: "3 min read",
    },
    {
      img: tourmImg2,
      title: "Exploring The Green Spaces Of Realar Residence Harmony with",
      date: "Jul 10, 2024",
      read: "3 min read",
    },
    {
      img: tourmImg3,
      title: "Living sustainability: A day in the life atrealar residence",
      date: "Jul 10, 2024",
      read: "3 min read",
    },
  ];
  return (
    <section className="tourm">
     <div class="container">
         <div className="tourm__header">
  <div className="tourm__text">
    <div className="tourm__subtitle">About Us Restaurant</div>
    <h5 className="tourm__title">News & Articles From Tourm</h5>
  </div>
  <a href="#" className="tourm__btn">
    See More Articles
    <img src={iconArrowBlue} alt="" className="tourm__btn-icon" />
  </a>
</div>


      <div className="tourm__list">
        <div className="tourm-shape1"><img src={iconShape1} alt="iconShape1" /></div>
                  <div className="tourm-shape2"><img src={iconShape2} alt="iconShape2" /></div>
                  <div className="tourm-shape3"><img src={iconShape3} alt="iconShape3" /></div>
        {Tourms.map((Tourm, index) => (
          <div key={index} className="tourm__card">
            <img src={Tourm.img} alt={Tourm.title} className="tourm__image" />

            <div className="tourm__content">
              <div className="tourm__meta">
                {Tourm.date} <span className="line"></span> <span>{Tourm.read}</span>
              </div>
              <div className="tourm__card-title">{Tourm.title}</div>
            </div>

            <div className="tourm__footer">
              <a href="#" className="tourm__btn">
                Read More
                <img src={iconArrowBlue} alt="" className="tourm__btn-icon" />
              </a>
            </div>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
}
