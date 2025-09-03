import footerLogo from "../../../assets/imgs/logo.svg fill.png";
import iconFace from "../../../assets/imgs/icon-fb.png";
import iconTwi from "../../../assets/imgs/icon-twi.png";
import iconLink from "../../../assets/imgs/icon-link.png";
import iconLine from "../../../assets/imgs/icon-line.png";
import iconInsta from "../../../assets/imgs/icon-instar.png";
import iconPlane from "../../../assets/imgs/plane.svg.png";
import iconArrowRight from "../../../assets/imgs/icon-arrow-right.png";
import iconPhone from "../../../assets/imgs/icon-phone.png";
import iconMail from "../../../assets/imgs/icon-mail.png";
import iconPosition from "../../../assets/imgs/iconPosition.png";
import gallery1 from "../../../assets/imgs/gallery_1_1.jpg.png";
import gallery2 from "../../../assets/imgs/gallery_1_2.jpg.png";
import gallery3 from "../../../assets/imgs/gallery_1_3.jpg.png";
import gallery4 from "../../../assets/imgs/gallery_1_4.jpg.png";
import gallery5 from "../../../assets/imgs/gallery_1_5.jpg.png";
import gallery6 from "../../../assets/imgs/gallery_1_6.jpg.png";
import galleryCards from "../../../assets/imgs/cards.png.png";
import iconButtonUp from "../../../assets/imgs/icon-button-up.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Newsletter */}
        <div className="footer__newsletter">
          <h4 className="footer__newsletter-title">
            Get updated the latest newsletter
          </h4>
          <form className="footer__form">
            <input
              type="email"
              placeholder="Enter your Email"
              className="footer__input"
            />
            <button className="footer__btn">
              Subscribe Now <img src={iconPlane} alt="send" />
            </button>
          </form>
        </div>

        {/* Footer content */}
        <div className="footer__content">
          {/* Logo + text */}
          <div className="footer__col footer__col--about">
            <h1 className="footer__logo">
              <img src={footerLogo} alt="logo" />
            </h1>
            <p className="footer__desc">
              Rapidiously myocardinate cross-platform<br/> intellectual capital
              model. Appropriately<br/>  create interactive infrastructures
            </p>
            <div className="footer__socials">
              <img src={iconFace} alt="facebook" />
              <img src={iconTwi} alt="twitter" />
              <img src={iconLink} alt="linkedin" />
              <img src={iconLine} alt="line" />
              <img src={iconInsta} alt="instagram" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__col footer__col--links">
            <h5 className="footer__title">Quick Links</h5>
            <ul className="footer__links">
              <li><a href="#"><img src={iconArrowRight} /> Home</a></li>
              <li><a href="#"><img src={iconArrowRight} /> About Us</a></li>
              <li><a href="#"><img src={iconArrowRight} /> Services</a></li>
              <li><a href="#"><img src={iconArrowRight} /> Tour Guide</a></li>
              <li><a href="#"><img src={iconArrowRight} /> Contact Us</a></li>
            </ul>
          </div>

          {/* Get In Touch */}
          <div className="footer__col footer__col--contact">
            <h5 className="footer__title">Get In Touch</h5>
            <a className="footer__contact">
              <img src={iconPhone} alt="phone" />
              <div>
                <p>+01 234 567 890</p>
                <p>+09 999 999 999</p>
              </div>
            </a>
            <a className="footer__contact">
              <img src={iconMail} alt="mail" />
              <div>
                <p>mailinfo00@tours.com</p>
                <p>support24@tours.com</p>
              </div>
            </a>
            <a className="footer__contact">
              <img src={iconPosition} alt="location" />
              <div>
                <p>789 Inner Lane, Holy park,<br/> California, USA</p>
              </div>
            </a>
          </div>

          {/* Instagram */}
          <div className="footer__col footer__col--gallery">
            <h5 className="footer__title">Instagram Post</h5>
            <div className="footer__gallery">
              <img src={gallery1} />
              <img src={gallery2} />
              <img src={gallery3} />
              <img src={gallery4} />
              <img src={gallery5} />
              <img src={gallery6} />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="footer-container footer__bottom-inner">
          <div className="footer__copy">Copyright 2025 Tours. All Rights Reserved.</div>
          <div className="footer__payment">
            <p>We Accept</p>
            <img src={galleryCards} />
          </div>
          <a href="#" className="footer__backtop">
            <img src={iconButtonUp} alt="back to top" />
          </a>
        </div>
      </div>
    </footer>
  );
}
