import { useState, useEffect } from "react";
import iconPosition from '../../../assets/imgs/icon-position.png';
import iconClock from '../../../assets/imgs/Icon-clock.png';
import iconDropLang from '../../../assets/imgs/icon-drop-language.png';
import iconDropdown from '../../../assets/imgs/icon-dropdown.png';
import logo from '../../../assets/imgs/logo.svg fill.png';
import iconArow from '../../../assets/imgs/icon-arow.png';
import menuIcon from '../../../assets/imgs/menu-black.png';
import closeIcon from '../../../assets/imgs/menu-close.png';

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const languages = ["English", "Vietnamese", "Japanese"];
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // // Bắt sự kiện scroll
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <header className={`header-container ${menuOpen ? "active" : ""} ${isScrolled ? "scrolled" : ""}`}>

      {/* Top bar */}
      {!isScrolled && (
        <div className="header-area">
          <div className="header-contact">
            <p className="contact-item">
              <img src={iconPosition} alt="Địa chỉ" className="contact-icon" />
              45 New Eskaton Road, Austria
            </p>
            <span className="contact-divider"></span>
            <p className="contact-item">
              <img src={iconClock} alt="Giờ làm việc" className="contact-icon" />
              Sun to Friday: 8.00 am - 7.00 pm, Austria
            </p>
          </div>

          <div className="header-support">
            <div className="lang-dropdown">
              <button className="lang-button" onClick={() => setLangOpen(!langOpen)}>
                <span>Language</span>
                <img src={iconDropLang} alt="Ngôn ngữ" className="button-icon" />
              </button>

              {langOpen && (
                <ul className="lang-menu">
                  {languages.map((lang, index) => (
                    <li key={index} className="lang-item" onClick={() => setLangOpen(false)}>
                      {lang}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <a href="#" className="support-link">Faq</a>
            <a href="#" className="support-link">Support</a>
            <a href="#" className="support-link register-link">
              <span>Sign in/ Register</span>
              <img src={iconDropdown} alt="icon" className="dropdown-icon" />
            </a>
          </div>
        </div>
      )}

      {/* Main header (sticky/fixed) */}
      <div className="header-main">
        <div className="header-left">
          <div className="logo-wrapper">
            <img src={logo} alt="logo" />
          </div>

          <nav className="header-nav">
            <ul className="nav-menu">
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Home <img src={iconDropdown} alt="icon" className="dropdown-icon" /></a></li>
              <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Destinations <img src={iconDropdown} alt="icon" className="dropdown-icon" /></a></li>
              <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Trip <img src={iconDropdown} alt="icon" className="dropdown-icon" /></a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Pages <img src={iconDropdown} alt="icon" className="dropdown-icon" /></a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Blog <img src={iconDropdown} alt="icon" className="dropdown-icon" /></a></li>
              <li className="nav-item"><a href="#" className="nav-link dropdown-link">Contact Us</a></li>
            </ul>
          </nav>
        </div>

        <div className="header-right">
          <div className="request-btn-wrapper">
            <a href="#" className="request-btn">
              Request a quote
              <img src={iconArow} alt="" className="request-btn-icon" />
            </a>
          </div>

          <button className="hamburger-btn" onClick={toggleMenu}>
            <img src={menuOpen ? closeIcon : menuIcon} alt="Menu" />
          </button>
        </div>
      </div>
      <ul className="sp_nav_main_list">
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Destinations</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Trip</a></li>
        <li><a href="#">Pages</a></li>
        <li><a href="#">Blog</a></li>
        <li><a href="#">Contact Us</a></li>
        <li>
          <div className="header-area">
            <div className="header-contact">
              <p className="contact-item">
                <img src={iconPosition} alt="Địa chỉ" className="contact-icon" />
                45 New Eskaton Road, Austria
              </p>
              <span className="contact-divider"></span>
              <p className="contact-item">
                <img src={iconClock} alt="Giờ làm việc" className="contact-icon" />
                Sun to Friday: 8.00 am - 7.00 pm, Austria
              </p>
            </div>

            <div className="header-support">
              <div className="lang-dropdown">
                <button className="lang-button" onClick={() => setLangOpen(!langOpen)}>
                  <span>Language</span>
                  <img src={iconDropLang} alt="Ngôn ngữ" className="button-icon" />
                </button>

                {langOpen && (
                  <ul className="lang-menu">
                    {languages.map((lang, index) => (
                      <li key={index} className="lang-item" onClick={() => setLangOpen(false)}>
                        {lang}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <a href="#" className="support-link">Faq</a>
              <a href="#" className="support-link">Support</a>
              <a href="#" className="support-link register-link">
                <span>Sign in/ Register</span>
                <img src={iconDropdown} alt="icon" className="dropdown-icon" />
              </a>
            </div>
          </div>
        </li>
         <li>
          <div className="request-btn-wrapper">
            <a href="#" className="request-btn">
              Request a quote
              <img src={iconArow} alt="" className="request-btn-icon" />
            </a>
          </div>
        </li>
      </ul>

    </header>
  );
}
