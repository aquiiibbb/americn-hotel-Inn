import './home.css'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import image16 from "../assest/image/hmm.png";
import image17 from "../assest/image/area.png";
import image18 from "../assest/image/pic2.png";
import image21 from "../assest/image/upar.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaWhatsapp } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowCircleDown } from "react-icons/fa";
import {
  FaWifi,
  FaCar,
  FaUtensils,
  FaSnowflake,
  FaBuilding,
  FaCogs,
  FaMapMarkerAlt,
  FaHeart,
  FaRegHeart,
  FaArrowRight
} from 'react-icons/fa';

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState('');
  const [favorites, setFavorites] = useState({});
  const [checkInDate, setCheckInDate] = useState(new Date('2026-02-10'));
  const [checkOutDate, setCheckOutDate] = useState(new Date('2026-02-12'));

  // MOVE THESE ARRAYS TO THE TOP - BEFORE ANY FUNCTIONS THAT USE THEM
  const sliderImages = [image16, image18, image17, image21];
  const properties = [
    {
      id: 1,
      name: "American Star Inn - Munday",
      location: "Texas",
      link: "/munday",
      image: "https://prodimagesbucket.blob.core.windows.net/hotel-images/32698/7c4b8b9d-3c9c-48fe-a45d-1c6f2cf2a311",
      amenities: [
        { icon: <FaWifi />, name: "WiFi" },
        { icon: <FaCar />, name: "Parking" },
        { icon: <FaUtensils />, name: "Restaurant" },
        { icon: <FaCogs />, name: "Service" }
      ]
    },
    {
      id: 2,
      name: "American Star Inn - Baird",
      location: "Texas",
      link: "/baird",
      image: "https://prodimagesbucket.blob.core.windows.net/hotel-images/32285/36e0148d-0570-4ffc-b870-bf8af8d13129",
      amenities: [
        { icon: <FaSnowflake />, name: "AC" },
        { icon: <FaWifi />, name: "WiFi" },
        { icon: <FaCar />, name: "Parking" },
        { icon: <FaCogs />, name: "Service" }
      ]
    },
    {
      id: 3,
      name: "American Star Inn - Abilene",
      location: "Texas",
      link: "/abilene",
      image: "https://prodimagesbucket.blob.core.windows.net/hotel-images/32249/6bdf7323-3312-4327-b138-687f0fac1619",
      amenities: [
        { icon: <FaSnowflake />, name: "AC" },
        { icon: <FaWifi />, name: "WiFi" },
        { icon: <FaCar />, name: "Parking" },
        { icon: <FaBuilding />, name: "Business" }
      ]
    },
    {
      id: 4,
      name: "American Star Inn - Floydada",
      location: "Texas",
      link: "/floydada",
      image: "https://static.readytotrip.com/upload/information_system_24/7/4/1/item_741709/information_items_741709.jpg",
      amenities: [
        { icon: <FaSnowflake />, name: "AC" },
        { icon: <FaWifi />, name: "WiFi" },
        { icon: <FaCar />, name: "Parking" },
        { icon: <FaBuilding />, name: "Business" }
      ]
    }
  ];

  // NOW THE FUNCTIONS CAN USE properties SAFELY
  const handleBooking = () => {
    if (!selectedHotel) {
      alert('Please select a hotel first');
      return;
    }

    const hotelLinks = {
      'hotel1': 'https://bookingengine.stayflexi.com/?hotel_id=32698',
      'hotel2': 'https://bookingengine.stayflexi.com/?hotel_id=32285',
      'hotel3': 'https://bookingengine.stayflexi.com/?hotel_id=32249',
      'hotel4': 'https://bookingengine.stayflexi.com/?hotel_id=32249'
    };

    const url = hotelLinks[selectedHotel];
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // useEffects
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const labelStyle = {
    color: 'rgba(255,255,255,0.95)',
    fontSize: isMobile ? '11px' : '14px',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: isMobile ? '6px' : '8px',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
    textTransform: 'uppercase',
    letterSpacing: '0.8px'
  };

  return (
    <div className="home-container">
      <style jsx>{`
        .custom-datepicker-input {
          padding: ${isMobile ? '8px 12px' : '12px 16px'} !important;
          width: 100% !important;
          height: ${isMobile ? '32px' : '48px'} !important;
          border: 2px solid rgba(212,175,55,0.5) !important;
         
          font-size: ${isMobile ? '10px' : '14px'} !important;
          font-weight: 600 !important;
          color: #052a54 !important;
          background: linear-gradient(135deg, rgba(255,255,255,0.98) 0%, rgba(248,248,248,0.95) 100%) !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.25) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer !important;
          font-family: inherit !important;
          border-color: rgba(212,175,55,0.5) !important;
        }
        .custom-datepicker-input:hover {
          border-color: #FFD700 !important;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3) !important;
          background: linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,250,240,0.98) 100%) !important;
        }
        .custom-datepicker-input:focus {
          border-color: #FFD700 !important;
          box-shadow: 0 0 0 4px rgba(212,175,55,0.3), 0 8px 25px rgba(0,0,0,0.2) !important;
          transform: translateY(-2px) !important;
        }
        .gold-popper .react-datepicker {
          border: 2px solid #D4AF37 !important;
         
          box-shadow: 0 20px 50px rgba(212,175,55,0.4), 0 8px 30px rgba(0,0,0,0.5) !important;
          background: linear-gradient(145deg, #fffdf9 0%, #f8f6f0 100%) !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif !important;
          padding: 16px !important;
          margin-top: 8px !important;
        }
        .gold-popper .react-datepicker__header {
          background: linear-gradient(135deg, #052a54 0%, #073f76 100%) !important;
          border-radius: 10px 10px 0 0 !important;
          border-bottom: 2px solid #D4AF37 !important;
          margin: -16px -16px 16px -16px !important;
          padding: 20px !important;
        }
        .gold-popper .react-datepicker__current-month,
        .gold-popper .react-datepicker__navigation {
          color: #FFD700 !important;
          font-weight: 700 !important;
          font-size: 16px !important;
        }
        .gold-popper .react-datepicker__day-names,
        .gold-popper .react-datepicker__day-name {
          color: #D4AF37 !important;
          font-weight: 600 !important;
          font-size: 12px !important;
        }
        .gold-popper .react-datepicker__day--selected,
        .gold-popper .react-datepicker__day--in-selecting-range,
        .gold-popper .react-datepicker__day--in-range,
        .gold-popper .react-datepicker__day--today {
          background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%) !important;
          color: #052a54 !important;
          font-weight: 600 !important;
          border-radius: 8px !important;
          box-shadow: 0 4px 12px rgba(212,175,55,0.5) !important;
          transform: scale(1.05) !important;
        }
        .gold-popper .react-datepicker__day:hover {
          background: linear-gradient(135deg, #FFD700 0%, #ffed4a 100%) !important;
          transform: scale(1.1) !important;
          transition: all 0.2s ease !important;
          color: #052a54 !important;
          box-shadow: 0 4px 15px rgba(212,175,55,0.4) !important;
        }
        .gold-popper .react-datepicker__day--keyboard-selected {
          background: linear-gradient(135deg, #052a54 0%, #073f76 100%) !important;
          color: #FFD700 !important;
        }
        @media (max-width: 768px) {
          .gold-popper .react-datepicker {
            font-size: 16px !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 auto !important;
            max-width: 320px !important;
          }
        }
      `}</style>

      {/* Hero Section */}
      <div style={{
        position: 'relative',
        minHeight: isMobile ? '50vh' : '90vh',
        backgroundImage: `url(${sliderImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'flex',
        alignItems: 'flex-end',
        overflow: 'hidden',
        marginTop: isMobile ? '20px' : '30px',
        transition: 'background-image 0.8s ease-in-out',
      }}>
        {/* Social Icons */}
      <div style={{
  position: 'fixed',
  right: isMobile ? '8px' : '15px',
  top: isMobile ? '30%' : '60%',
  transform: 'translateY(-50%)',
  zIndex: 10,
  display: 'flex',
  flexDirection: 'column',
  gap: isMobile ? '8px' : '12px'
}}>
          {[
            { icon: <FaArrowCircleDown />, bg: '#06469a', href: '#contact', title: 'Contact Us' },
            { icon: <FaInstagramSquare />, bg: '#960620', href: 'https://instagram.com/yourhandle', title: 'Follow on Instagram' },
            { icon: <FaFacebookSquare />, bg: '#1877F2', href: 'https://facebook.com/yourpage', title: 'Like on Facebook' },
            { icon: <FaWhatsapp />, bg: '#25D366', href: 'https://wa.me/919876543210?text=Hi%20there!%20I%20want%20to%20know%20more%20about%20your%20services', title: 'Chat on WhatsApp' }
          ].map((item, index) => (
            <a key={index} href={item.href} target={item.href.startsWith('http') ? '_blank' : '_self'} rel={item.href.startsWith('http') ? 'noopener noreferrer' : ''} title={item.title} style={{
              width: isMobile ? '35px' : '45px',
              height: isMobile ? '35px' : '45px',
              backgroundColor: item.bg,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: isMobile ? '13px' : '18px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              boxShadow: '0 3px 8px rgba(0,0,0,0.2)',
              cursor: 'pointer'
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = isMobile ? 'scale(1.05) translateX(-2px)' : 'scale(1.1) translateX(-3px)';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.3)';
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateX(0)';
              e.currentTarget.style.boxShadow = '0 3px 8px rgba(0,0,0,0.2)';
            }}>
              {item.icon}
            </a>
          ))}
        </div>

        {/* Booking Form */}
        <div style={{
          width: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.1)',
          padding: isMobile ? '8px 6px' : '14px 18px',
          display: 'flex',
          justifyContent: 'center',
          borderTop: '1px solid rgba(255,255,255,0.15)',
          minHeight: isMobile ? 'auto' : '120px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '8px' : '16px',
            maxWidth: '1000px',
            width: '100%',
            padding: isMobile ? '0' : '0'
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              gap: isMobile ? '6px' : '16px',
              width: '100%',
              flex: isMobile ? 'none' : '1'
            }}>

              {/* Hotel Selection */}
              <div style={{ flex: isMobile ? '1.5' : '1.2', minWidth: '0' }}>
                <label style={labelStyle}>🏨 Hotel</label>
                <select
                  value={selectedHotel}
                  onChange={(e) => setSelectedHotel(e.target.value)}
                  style={{
                    padding: isMobile ? '8px 35px 8px 12px' : '12px 45px 12px 16px',
                    width: '100%',
                    height: isMobile ? '32px' : '48px',
                    border: '2px solid rgba(92, 79, 36, 0.5)',
                    fontSize: isMobile ? '10px' : '14px',
                    boxSizing: 'border-box',
                    outline: 'none',
                    background: 'white',
                    fontFamily: 'inherit',
                    fontWeight: '600',
                    color: selectedHotel ? '#052a54' : '#666',
                    appearance: 'none',
                    backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23D4AF37' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: `right ${isMobile ? '10px' : '14px'} center`,
                    backgroundSize: isMobile ? '16px' : '18px'
                  }}
                >
                  <option value="" style={{ color: '#999', fontWeight: '700' }}>
                    🏨 Choose Your Hotel
                  </option>
                  <option value="hotel1" style={{ color: '#000', fontWeight: '600' }}>
                    ⭐ American Star Inn - Munday
                  </option>
                  <option value="hotel2" style={{ color: '#000', fontWeight: '600' }}>
                    ⭐ American Star Inn - Baird
                  </option>
                  <option value="hotel3" style={{ color: '#000', fontWeight: '600' }}>
                    ⭐ American Star Inn - Abilene
                  </option>
                  <option value="hotel4" style={{ color: '#000', fontWeight: '600' }}>
                    ⭐ American Star Inn - Floydada
                  </option>
                </select>
              </div>

              {/* Check In */}
              <div style={{ flex: '1', minWidth: '0' }}>
                <label style={labelStyle}>📅 Check In</label>
                <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="custom-datepicker-input"
                  popperClassName="gold-popper"
                  placeholderText={isMobile ? "Check In" : "Select Check In Date"}
                  minDate={new Date('2026-02-01')}
                  maxDate={checkOutDate}
                  wrapperClassName="date-picker-wrapper"
                  autoComplete="off"
                />
              </div>

              {/* Check Out */}
              <div style={{ flex: '1', minWidth: '0' }}>
                <label style={labelStyle}>📅 Check Out</label>
                <DatePicker
                  selected={checkOutDate}
                  onChange={(date) => setCheckOutDate(date)}
                  dateFormat="yyyy-MM-dd"
                  className="custom-datepicker-input"
                  popperClassName="gold-popper"
                  placeholderText={isMobile ? "Check Out" : "Select Check Out Date"}
                  minDate={checkInDate}
                  maxDate={new Date('2026-12-31')}
                  wrapperClassName="date-picker-wrapper"
                  autoComplete="off"
                />
              </div>

              {/* Book Button Desktop */}
              {!isMobile && (
                <div style={{ flex: '0 0 auto', display: 'flex', alignItems: 'flex-end' }}>
                  <div style={{ height: '22px' }} />
                  <button
                    onClick={handleBooking}
                    disabled={!selectedHotel}
                    style={{
                      height: '44px',
                      background: selectedHotel ? 'linear-gradient(135deg, #052a54 0%, #073f76 50%, #0a4d8a 100%)' : 'linear-gradient(135deg, #666 0%, #888 50%, #999 100%)',
                      color: 'white',
                      border: `2px solid ${selectedHotel ? '#D4AF37' : '#999'}`,
                     
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: selectedHotel ? 'pointer' : 'not-allowed',
                      transition: 'all 0.25s ease',
                      boxShadow: '0 3px 12px rgba(5,42,84,0.3)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.8px',
                      position: 'relative',
                      overflow: 'hidden',
                      fontFamily: 'inherit',
                      top: '-14px',
                      padding: '23px 38px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      opacity: selectedHotel ? 1 : 0.6
                    }}
                    onMouseOver={(e) => {
                      if (selectedHotel) {
                        e.currentTarget.style.transform = 'translateY(-1px)';
                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(5,42,84,0.4)';
                        e.currentTarget.style.borderColor = '#FFD700';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #073f76 0%, #0a4d8a 50%, #0d5ba0 100%)';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (selectedHotel) {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 3px 12px rgba(5,42,84,0.3)';
                        e.currentTarget.style.borderColor = '#D4AF37';
                        e.currentTarget.style.background = 'linear-gradient(135deg, #052a54 0%, #073f76 50%, #0a4d8a 100%)';
                      }
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                    </svg>
                    Search Now
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Book Button */}
            {isMobile && (
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={handleBooking}
                  disabled={!selectedHotel}
                  style={{
                    height: '32px',
                    width: '120px',
                    background: selectedHotel ? 'linear-gradient(135deg, #052a54 0%, #073f76 50%, #0a4d8a 100%)' : 'linear-gradient(135deg, #666 0%, #888 50%, #999 100%)',
                    color: 'white',
                    border: `2px solid ${selectedHotel ? '#D4AF37' : '#999'}`,
                    borderRadius: '4px',
                    fontSize: '10px',
                    fontWeight: '700',
                    cursor: selectedHotel ? 'pointer' : 'not-allowed',
                    transition: 'all 0.25s ease',
                    boxShadow: '0 3px 12px rgba(5,42,84,0.3)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.3px',
                    position: 'relative',
                    overflow: 'hidden',
                    fontFamily: 'inherit',
                    padding: '6px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px',
                    opacity: selectedHotel ? 1 : 0.6
                  }}
                  onMouseOver={(e) => {
                    if (selectedHotel) {
                      e.currentTarget.style.transform = 'scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(5,42,84,0.4)';
                    }
                  }}
                  onMouseOut={(e) => {
                    if (selectedHotel) {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 3px 12px rgba(5,42,84,0.3)';
                    }
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                  </svg>
                  Search Now
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Properties Section - Static Grid */}
   <div className="properties-section">
  <h2>Properties to choose from....</h2>
  <div className="properties-container">
    <div className="properties-slider">
      {properties.map((property) => (
        <div key={property.id} className="property-card">
          <div className="property-image">
            <img src={property.image} alt={property.name} />
            <button
              className="favorite-btn"
              onClick={() => toggleFavorite(property.id)}
              aria-label={`${favorites[property.id] ? 'Remove from' : 'Add to'} favorites`}
            >
              {favorites[property.id] ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
          <div className="property-content">
            <div className="location">
              <FaMapMarkerAlt className="location-icon" />
              <span className="location-text">{property.location}</span>
            </div>
            <h3 className="property-name">{property.name}</h3>
            <div className="property-amenities">
              {property.amenities.map((amenity, index) => (
                <div key={index} className="amenity-icon" title={amenity.name}>
                  {amenity.icon}
                </div>
              ))}
            </div>
            <NavLink to={property.link} className="explore-btn">
              <span>Explore Now</span>
              <FaArrowRight className="explore-arrow" />
            </NavLink>
          </div>
        </div>
      ))}
    </div>
    <div className="scroll-indicator">← Swipe to see more →</div>
  </div>
</div>
    </div>
  );
}