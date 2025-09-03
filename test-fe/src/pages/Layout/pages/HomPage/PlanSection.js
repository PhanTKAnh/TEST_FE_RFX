import about1 from "../../../../assets/imgs/about_1_1.jpg.png";
import about2 from "../../../../assets/imgs/about_1_2.jpg.png";
import about3 from "../../../../assets/imgs/about_1_3.jpg.png";
import iconArow from '../../../../assets/imgs/icon-arow.png';
import iconTrip from '../../../../assets/imgs/map3.svg fill.png';
import iconGuide from '../../../../assets/imgs/guide.svg fill.png';
import iconShape1 from '../../../../assets/imgs/shape_1.png.png';
import iconShape2 from '../../../../assets/imgs/shape_2.png.png';
import iconShape3 from '../../../../assets/imgs/shape_3.png.png';
export default function PlanSection() {
    return (
        <section className="plan">
            <div className="plan-shape1"><img src={iconShape1} alt="iconShape1" /></div>
            <div className="plan-shape2"><img src={iconShape2} alt="iconShape2" /></div>
            <div className="plan-shape3"><img src={iconShape3} alt="iconShape3" /></div>
            <div className="container">
                <div className="plan__wrapp">
                    <div className="plan__images">
                        <div className="plan__image-main">
                            <img src={about1} alt="Main about" />
                        </div>
                        <div className="plan__image-side">
                            <img src={about2} alt="Side about 1" />
                            <img src={about3} alt="Side about 2" />
                        </div>
                    </div>

                    <div className="plan__content">
                        <div className="plan__subtitle">Let’s Go Together</div>
                        <div className="plan__title">Plan Your Trip With us</div>
                        <p className="plan__desc">
                            There are many variations of passages of available but the<br />
                            majority have suffered alteration in some form, by injected<br />
                            hum randomised words which don’t look even slightly.
                        </p>

                        <div className="plan__features">
                            <div className="plan__feature">
                                <div className="plan__feature-icon">
                                    <img src={iconTrip} alt="Exclusive Trip" />
                                </div>
                                <div>
                                    <div className="plan__feature-title">Exclusive Trip</div>
                                    <div className="plan__feature-desc">
                                        There are many variations of passages of available but the majority.
                                    </div>
                                </div>
                            </div>

                            <div className="plan__feature">
                                <div className="plan__feature-icon">
                                    <img src={iconGuide} alt="Professional Guide" />
                                </div>
                                <div>
                                    <div className="plan__feature-title">Professional Guide</div>
                                    <div className="plan__feature-desc">
                                        There are many variations of passages of available but the majority.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#" className="plan__btn hero-btn hero-btn-primary">
                            Learn More
                            <img src={iconArow} alt="" className="hero-btn-icon" />
                        </a>
                    </div>
                     
                </div>
            </div>
            <div className="plan-img"></div>
        </section>
    );
}
