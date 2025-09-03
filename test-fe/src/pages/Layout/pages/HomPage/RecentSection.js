import gallery1 from "../../../../assets/imgs/Link → gallery_1_1.jpg.png";
import gallery2 from "../../../../assets/imgs/destination_1_2.jpg.png";
import gallery3 from "../../../../assets/imgs/destination_1_3.jpg.png";
import gallery4 from "../../../../assets/imgs/Link → gallery_1_4.jpg.png";
import gallery5 from "../../../../assets/imgs/Link → gallery_1_5.jpg.png";
import gallery6 from "../../../../assets/imgs/Link → gallery_1_6.jpg.png";
import gallery7 from "../../../../assets/imgs/Link → gallery_1_7.jpg.png";
import iconShape1 from '../../../../assets/imgs/shape_1.png.png';
import iconShape2 from '../../../../assets/imgs/shape_2.png.png';
import iconShape3 from '../../../../assets/imgs/shape_3.png.png';
import iconShape4 from "../../../../assets/imgs/shape_4.png.png";
import iconShape5 from '../../../../assets/imgs/shape_5.png.png';
import iconShape6 from '../../../../assets/imgs/shape_6.png.png';

export default function GallerySection() {
  return (
    <section className="gallery">
      <div className="gallery-shape4">
        <img src={iconShape4} alt="decorative shape" />
      </div>

      <div className="gallery__container">

        <div className="gallery__header">
          <p className="gallery__subtitle">Make Your Tour More Pleasure</p>
          <h4 className="gallery__title">Recent Gallery</h4>
        </div>

        <div className="gallery__grid">
          <div className="gallery__item">
            <img src={gallery1} alt="gallery1" />
          </div>
          <div className="gallery__item gallery__item--double">
            <img src={gallery2} alt="gallery2" />
            <img src={gallery3} alt="gallery3" />
          </div>
          <div className="gallery__item gallery__item--center">
            <img src={gallery4} alt="gallery4" />
          </div>
          <div className="gallery__item gallery__item--double">
            <img src={gallery5} alt="gallery5" />
            <img src={gallery6} alt="gallery6" />
          </div>
          <div className="gallery__item">
            <img src={gallery7} alt="gallery7" />
          </div>
        </div>

        <div className="gallery__stats">
          <div className="gallery-shape1"><img src={iconShape1} alt="iconShape1" /></div>
          <div className="gallery-shape2"><img src={iconShape2} alt="iconShape2" /></div>
          <div className="gallery-shape3"><img src={iconShape3} alt="iconShape3" /></div>
          <div className="gallery-shape5"><img src={iconShape5} alt="iconShape3" /></div>
          <div className="gallery__stats-card">
            <div className="gallery__stat">
              <div className="gallery__stat-dot"></div>
              <div className="gallery__stat-dot-small"></div>
              <h5 className="gallery__stat-number">12</h5>
              <p className="gallery__stat-label">Years Experience</p>
            </div>
            <div className="gallery__stat">
              <div className="gallery__stat-dot"></div>
              <h5 className="gallery__stat-number">97%</h5>
              <p className="gallery__stat-label">Retention Rate</p>
            </div>
            <div className="gallery__stat">
              <div className="gallery__stat-dot"></div>
              <h5 className="gallery__stat-number">8k</h5>
              <p className="gallery__stat-label">Tour Completed</p>
            </div>
            <div className="gallery__stat">
              <div className="gallery__stat-dot"></div>
              <h5 className="gallery__stat-number">19k</h5>
              <p className="gallery__stat-label">Happy Travellers</p>
            </div>
          </div>
        </div>

        <div className="gallery-shape6"><img src={iconShape6} alt="iconShape3" /></div>
      </div>

    </section>
  );
}
