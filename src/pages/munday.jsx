import React, { useState, useEffect } from 'react';
import './munday.css';

// --- 1. RoomCard Component ---
const RoomCard = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === room.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => clearInterval(timer);
  }, [room.images.length]);

  return (
    <div className="room-card">
      <div className="room-image-wrapper">
        {room.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${room.title} view ${index + 1}`}
            className={`room-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <span className="gallery-badge">
          📷 {currentImageIndex + 1} / {room.images.length}
        </span>
      </div>

      <div className="room-details">
        <div>
          <h3 className="room-title">{room.title}</h3>
          <p className="room-subtitle">{room.subtitle}</p>
          <div className="room-icons">
            <span title="Wifi">🛜</span><span title="AC">❄️</span><span title="TV">📺</span><span title="Shower">🚿</span>
            <a href="#amenities" className="view-amenities">view all amenities</a>
          </div>
          <p className="room-description">{room.description}</p>
          <div className="availability-tag">⚡ {room.availability}</div>
        </div>
        <div className="rate-plans-container">
          {room.plans.map((plan, pIndex) => (
            <div key={pIndex} className="plan-row">
              <div className="plan-info">
                <div className="plan-name">
                  ▶ {plan.name} {plan.originalPrice && <span className="strikethrough">{plan.originalPrice}</span>}
                </div>
                <div className="plan-desc">{plan.desc}</div>
              </div>
              <button className="book-btn"><span className="plus">+</span> Book</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 2. Main Component ---
const Munday = () => {
  // State for Accordion (House Rules)
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);

  const togglePolicy = () => {
    setIsPolicyOpen(!isPolicyOpen);
  };
  // --- YE LOGIC MISSING HAI, ISKO ADD KAREIN ---
  const [openSection, setOpenSection] = useState({
    cancellation: false,
    terms: false
  });

  const toggleSection = (section) => {
    setOpenSection(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };
  // ---------------------------------------------

  const hotelInfo = {
    name: 'American Star Inn - Munday',
    phone: '+14239335223',
    email: 'americanstarinn76371@gmail.com',
    address: '851 E G St, Munday, TX 76371, USA Knox County, Texas, United States - 76371',
    amenities: [
      { icon: '📶', text: 'Free: Wi-fi' },
      { icon: '🚗', text: 'Parking: On Premise' },
      { icon: '👥', text: '24-hour: Front desk service' }
    ],
    about: 'American Star Inn - Munday Eloy Casa Grande in Eloy offers cozy, well-appointed rooms with private bathrooms, seating areas, TVs, refrigerators, free toiletries, and complimentary Wi-Fi for a comfortable stay. Guests can unwind by the seasonal outdoor swimming pool and enjoy the convenience of free on-site private parking and a 24-hour front desk. Located about 78 km from Phoenix–Mesa Gateway Airport, the hotel is praised for its easy access to area highlights, including the Arizona State Fairgrounds and the Arizona State Museum.'
  };

  const additionalAmenities = [
    { icon: '❄️', text: 'AC' }, { icon: '🛜', text: 'Internet – Wifi' }, { icon: '🅿️', text: 'Parking' }, { icon: '🛏️', text: 'Twin beds' }
  ];

  const rooms = [
    {
      title: "Non Smoking 1 Queen Bed",
      subtitle: "Non Smoking 1 Queen Bed",
      images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"],
      description: "Enjoy a comfortable stay in this smoke-free room featuring a cozy queen-size bed. Perfect for solo travelers or couples.",
      availability: "Last 7 rooms available",
      plans: [{ name: "ELOY CHAMBER @ $59.76", desc: "Special Rate", price: null, isSpecial: true }, { name: "Standard Plan @ $63.50", originalPrice: "$74.70", desc: "Standard Plan", price: null, isSpecial: false }]
    },
    {
      title: "Non Smoking 1 King Bed",
      subtitle: "Non Smoking 1 King Bed",
      images: ["https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=800&q=80"],
      description: "Relax in comfort in this spacious, smoke-free room featuring a plush king-size bed.",
      availability: "Last 12 rooms available",
      plans: [{ name: "ELOY CHAMBER @ $63.36", desc: "Special Rate", price: null, isSpecial: true }, { name: "Standard Plan @ $67.32", originalPrice: "$79.20", desc: "Standard Plan", price: null, isSpecial: false }]
    },
    {
      title: "Non Smoking 2 Queen Beds",
      subtitle: "Non Smoking 2 Queen Beds",
      images: ["https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"],
      description: "Perfect for families or groups, this spacious room offers two comfortable queen-sized beds.",
      availability: "Last 7 rooms available",
      plans: [{ name: "ELOY CHAMBER @ $73.44", desc: "Special Rate", price: null, isSpecial: true }, { name: "Standard Plan @ $78.03", originalPrice: "$91.80", desc: "Standard Plan", price: null, isSpecial: false }]
    },
    {
      title: "Non Smoking Suite With 2 Full Beds And Pull Out Sofa Bed",
      subtitle: "Non Smoking Suite With 2 Full Beds And Pull Out Sofa Bed",
      images: ["https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80"],
      description: "Perfect for families or groups, this spacious smoke-free suite offers two comfortable full-size beds.",
      availability: "Last 6 rooms available",
      plans: [{ name: "ELOY CHAMBER @ $84.96", desc: "Special Rate", price: null, isSpecial: true }, { name: "Standard Plan @ $90.27", originalPrice: "$106.20", desc: "Standard Plan", price: null, isSpecial: false }]
    }
  ];

  return (
    <div className="hotel-container">
      <div className="hotel-card">
        <span className="hotel-badge">Hotel</span>
        <h1 className="hotel-name">{hotelInfo.name}</h1>

        {/* Contact Info */}
        <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Address Line */}
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>{hotelInfo.address}</span>
          </div>

          {/* Phone Number Line */}
          <div className="contact-item">
            <span className="icon">📞</span>
            <a href={`tel:${hotelInfo.phone}`}>{hotelInfo.phone}</a>
          </div>

          {/* Email Line */}
          <div className="contact-item">
            <span className="icon">✉️</span>
            <a href={`mailto:${hotelInfo.email}`}>{hotelInfo.email}</a>
          </div>
        </div>

        {/* Top Amenities */}
        <div className="amenities">
          {hotelInfo.amenities.map((amenity, index) => (
            <div key={index} className="amenity-card"><span className="amenity-icon">{amenity.icon}</span><span className="amenity-text">{amenity.text}</span></div>
          ))}
        </div>
        <hr className="divider" />
        <div className="about-section"><h2 className="about-title">About this resort</h2><p className="about-description">{hotelInfo.about}</p></div>
        <hr className="divider" />
        <div className="amenities-section">
          <h2 className="about-title">Amenities</h2>
          <div className="amenities">
            {additionalAmenities.map((item, index) => (
              <div key={index} className="amenity-card"><span className="amenity-icon">{item.icon}</span><span className="amenity-text">{item.text}</span></div>
            ))}
          </div>
        </div>
        <hr className="divider" />
        <div className="rooms-section">
          <h2 className="about-title">Our Rooms</h2>
          {rooms.map((room, index) => <RoomCard key={index} room={room} />)}
        </div>
        <hr className="divider" />

        {/* --- UPDATED HOUSE RULES SECTION (Accordion Style) --- */}
        <div className="house-rules-section">
          <h2 className="about-title">House rules</h2>

          <div className="policy-card">
            {/* Click event yahan lagaya hai */}
            <div className="policy-header" onClick={togglePolicy}>
              <div className="policy-title-wrapper">
                <span className="check-icon">✓</span>
                <h3 className="policy-name">Cancellation Policy</h3>
              </div>
              {/* Arrow jo state ke hisab se ghumega */}
              <span className={`policy-arrow ${isPolicyOpen ? 'open' : ''}`}>&#9660;</span>
            </div>

            {/* Conditional Rendering: Jab state true hogi tabhi text dikhega */}
            {isPolicyOpen && (
              <p className="policy-text">
                The hotel has a 24-hour cancellation policy. All rooms must be canceled 24 hours prior to the arrival date. Reservations that do not have a valid credit card and ID upon check-in will be automatically canceled.
              </p>
            )}
          </div>
          <div className="policy-card">
            <div className="policy-header" onClick={() => toggleSection('terms')}>
              <div className="policy-title-wrapper">
                <span className="check-icon">✓</span>
                <h3 className="policy-name">Terms & Conditions</h3>
              </div>
              {/* Arrow jo state ke hisab se ghumega */}
              <span className={`policy-arrow ${openSection.terms ? 'open' : ''}`}>&#9660;</span>
            </div>

            {/* Content jo click karne par dikhega */}
            {openSection.terms && (
              <p className="policy-text">
                The hotel has a 24-hour cancellation policy. All rooms must be canceled 24 hours prior to the arrival date. Reservations that do not have a valid credit card and ID upon check-in will be automatically canceled.
              </p>
            )}
          </div>
        </div>
        {/* --- Location Section (Munday, TX) --- */}
        <div className="location-section">
          <h2 className="about-title">Location</h2>
          <div className="map-container">
            <iframe
              title="Munday Hotel Location"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.463365825316!2d-99.6231924!3d33.4475518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8654c6c9c6c9c6c9%3A0x0!2s851%20E%20G%20St%2C%20Munday%2C%20TX%2076371!5e0!3m2!1sen!2sus!4v1625687456123!5m2!1sen!2sus">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Munday;