import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import image12 from "../assest/image/s4logo.jpeg";
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isBookingDropdownOpen, setIsBookingDropdownOpen] = useState(false);
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Hotel booking links - updated with correct URLs
  const hotelBookingLinks = {
    munday: "https://bookingengine.stayflexi.com/?hotel_id=32698",   // American Star Inn - Munday
    baird: "https://bookingengine.stayflexi.com/?hotel_id=32285",    // American Star Inn - Baird  
    abilene: "https://bookingengine.stayflexi.com/?hotel_id=32249" ,  // American Star Inn - Abilene
    floydada: "https://bookingengine.stayflexi.com/?hotel_id=32250"   // American Star Inn - Floydada
  };

  return (
    <header className={`site-header ${scrolled ? 'site-header--scrolled' : ''}`}>
      {/* Top Notice Bar */}
      <div className="notice-banner">
        <div className="notice-banner__content">
          <span className="notice-banner__text">
        Hotel American Star Inn is a comfortable and luxurious hotel offering beautiful surroundings, modern rooms, quality services, and a relaxing stay for guests.
          </span>
        </div>
        <div className="contact-banner">
          <div className="contact-banner__item">
            <span className="contact-banner__icon">📞</span>
            <span className="contact-banner__text">CONTACT US -+1 325-673-5424</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header-main">
        <div className="header-main__container">
          {/* Logo */}
          <div className="brand-logo">
            <img src={image12} alt="Ocean Paradise Hotel" className="brand-logo__image" />
          </div>

          {/* Desktop Navigation */}
          <nav className="primary-nav">
            <ul className="primary-nav__list">
              <li className="primary-nav__item">
                <NavLink to="/" className={({ isActive }) => `primary-nav__link ${isActive ? '' : ''}`}>
                  Hotels
                </NavLink>
              </li>

              <li className="primary-nav__item">
                <NavLink to="/amenities" className={({ isActive }) => `primary-nav__link ${isActive ? '' : ''}`}>
                 About Us
                </NavLink>
              </li>
                        
              <li className="primary-nav__item">
                <NavLink to="/contact" className={({ isActive }) => `primary-nav__link ${isActive ? '' : ''}`}>
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Right Side Items */}
          <div className="header-actions">
            <div className="rate-guarantee">
              <span className="rate-guarantee__text">BEST RATE</span>
              <span className="rate-guarantee__subtext">GUARANTEED</span>
            </div>
            
            {/* Book Now with Hotel Dropdown */}
            <div 
              className="booking-widget"
              onMouseEnter={() => setIsBookingDropdownOpen(true)}
              onMouseLeave={() => setIsBookingDropdownOpen(false)}
            >
              <button className="booking-widget__trigger">
                BOOK NOW
                <span className="booking-widget__arrow">▼</span>
              </button>
              
              {isBookingDropdownOpen && (
                <div className="hotel-selector">
                  <div className="hotel-selector__header">
                    <span className="hotel-selector__title">Select Hotel Location</span>
                  </div>
                  
                  <a 
                    href={hotelBookingLinks.munday}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hotel-selector__option"
                  >
                    <span className="hotel-selector__icon">🏨</span>
                    <div className="hotel-selector__content">
                      <span className="hotel-selector__name">American Star Inn</span>
                      <span className="hotel-selector__location">Munday, Texas</span>
                    </div>
                    <span className="hotel-selector__chevron">→</span>
                  </a>
                  
                  <a 
                    href={hotelBookingLinks.baird}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hotel-selector__option"
                  >
                    <span className="hotel-selector__icon">🏨</span>
                    <div className="hotel-selector__content">
                      <span className="hotel-selector__name">American Star Inn</span>
                      <span className="hotel-selector__location">Baird, Texas</span>
                    </div>
                    <span className="hotel-selector__chevron">→</span>
                  </a>
                  
                  <a 
                    href={hotelBookingLinks.abilene}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hotel-selector__option"
                  >
                    <span className="hotel-selector__icon">🏨</span>
                    <div className="hotel-selector__content">
                      <span className="hotel-selector__name">American Star Inn</span>
                      <span className="hotel-selector__location">Abilene, Texas</span>
                    </div>
                    <span className="hotel-selector__chevron">→</span>
                  </a>
                  <a 
                    href={hotelBookingLinks.floydada}
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hotel-selector__option"
                  >
                    <span className="hotel-selector__icon">🏨</span>
                    <div className="hotel-selector__content">
                      <span className="hotel-selector__name">American Star Inn</span>
                      <span className="hotel-selector__location">Floydada, Texas</span>
                    </div>
                    <span className="hotel-selector__chevron">→</span>
                  </a>
                </div>
              )}
            </div>
          </div>
          
         {/* Mobile Menu Toggle */}
          <button 
            className={`mobile-toggle ${isMenuOpen ? 'mobile-toggle--active' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="mobile-toggle__line"></span>
            <span className="mobile-toggle__line"></span>
            <span className="mobile-toggle__line"></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'mobile-nav--open' : ''}`}>
          <ul className="mobile-nav__list">
            <li className="mobile-nav__item">
              <NavLink 
                to="/" 
                className={({ isActive }) => `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                onClick={closeMenu}
              >
                <span className="mobile-nav__icon">🏠</span> Hotels
              </NavLink>
            </li>

            <li className="mobile-nav__item">
              <NavLink 
                to="/amenities" 
                className={({ isActive }) => `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                onClick={closeMenu}
              >
                <span className="mobile-nav__icon">👇</span> About Us
              </NavLink>
            </li>
            
            <li className="mobile-nav__item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => `mobile-nav__link ${isActive ? 'mobile-nav__link--active' : ''}`}
                onClick={closeMenu}
              >
                <span className="mobile-nav__icon">📞</span> Contact Us
              </NavLink>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;