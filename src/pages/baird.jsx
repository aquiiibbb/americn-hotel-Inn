import React, { useState, useEffect } from 'react';
import './baird.css';

// --- 1. AccommodationCard Component ---
const BairdAccommodationCard = ({ accommodation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (accommodation.images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === accommodation.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [accommodation.images.length]);

  return (
    <div className="baird-page-room-card">
      <div className="baird-page-room-gallery">
        {accommodation.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${accommodation.title} view ${index + 1}`}
            className={`baird-page-room-image ${index === currentImageIndex ? 'active' : ''}`}
            loading="lazy"
          />
        ))}
        <div className="baird-page-gallery-dots">
          {accommodation.images.map((_, index) => (
            <span
              key={index}
              className={`baird-page-gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="baird-page-room-info">
        <h3 className="baird-page-room-heading">{accommodation.title}</h3>
        <p className="baird-page-room-description">{accommodation.subtitle}</p>

        <div className="baird-page-amenities-list">
          {accommodation.amenities.map((amenity, index) => (
            <span key={index} className="baird-page-amenity-badge">
              ✓ {amenity}
            </span>
          ))}
        </div>

        <button className="baird-page-book-button">
          <span>Book Now</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

// --- 2. PropertyHighlights Component ---
const BairdPropertyHighlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const highlights = [
    // First slide - 3 cards
    [
      {
        image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400",
        title: "AC",
        description: "Enjoy cool and comfortable air-conditioned rooms for a relaxing stay."
      },
      {
        image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400",
        title: "INTERNET - WiFi",
        description: "Stay connected with high-speed complimentary WiFi throughout the property."
      },
      {
        image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?w=400",
        title: "PARKING",
        description: "Safe and spacious parking area available for all guests."
      }
    ],
    // Second slide - 3 more cards
    [
      {
        image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400",
        title: "TWIN BEDS",
        description: "Comfortable twin beds designed for a peaceful and restful sleep."
      },
      {
        image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400",
        title: "24/7 FRONT DESK",
        description: "Round-the-clock assistance for all your needs and queries."
      },
      {
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
        title: "SWIMMING POOL",
        description: "Relax and refresh in our seasonal outdoor swimming pool."
      }
    ]
  ];

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [highlights.length, isPaused]);

  return (
    <div
      className="baird-page-highlights-showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="baird-page-highlights-title">
        <span className="baird-page-highlights-emoji"></span>
        Aminities
      </h2>

      <div className="baird-page-highlights-wrapper">
        <div className="baird-page-highlights-slides">
          {highlights.map((slideSet, slideIndex) => (
            <div
              key={slideIndex}
              className={`baird-page-highlights-slide ${slideIndex === currentSlide ? 'active' : ''}`}
            >
              {slideSet.map((highlight, cardIndex) => (
                <div key={cardIndex} className="baird-page-highlight-card">
                  <div className="baird-page-highlight-image">
                    <img src={highlight.image} alt={highlight.title} loading="lazy" />
                  </div>
                  <div className="baird-page-highlight-text">
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="baird-page-highlights-dots">
          {highlights.map((_, index) => (
            <button
              key={index}
              className={`baird-page-highlights-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. RoomsCarousel Component ---
const BairdRoomsCarousel = ({ rooms }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Group rooms into slides of 3
  const roomSlides = [];
  for (let i = 0; i < rooms.length; i += 3) {
    roomSlides.push(rooms.slice(i, i + 3));
  }

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % roomSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [roomSlides.length, isPaused]);

  return (
    <div
      className="baird-page-rooms-showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <h2 className="baird-page-rooms-title">
        <span className="baird-page-rooms-emoji"></span>
        Our Rooms
      </h2>

      <div className="baird-page-rooms-wrapper">
        <div className="baird-page-rooms-slides">
          {roomSlides.map((slideSet, slideIndex) => (
            <div
              key={slideIndex}
              className={`baird-page-rooms-slide ${slideIndex === currentSlide ? 'active' : ''}`}
            >
              {slideSet.map((room, cardIndex) => (
                <BairdAccommodationCard key={cardIndex} accommodation={room} />
              ))}
            </div>
          ))}
        </div>

        <div className="baird-page-rooms-dots">
          {roomSlides.map((_, index) => (
            <button
              key={index}
              className={`baird-page-rooms-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to room slide ${index + 1}`}
              aria-current={index === currentSlide ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 4. Main Component ---
const Baird = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [openSection, setOpenSection] = useState({
    cancellation: false,
    terms: false
  });

  const togglePolicy = () => {
    setIsPolicyOpen(!isPolicyOpen);
  };

  const toggleSection = (section) => {
    setOpenSection(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const hotelInfo = {
    name: 'American Star Inn - Baird',
    phone: '+13258648552',
    email: 'abvibaird@gmail.com',
    address: '500 I-20, Baird, TX 79504, USA Callahan County, Texas, United States - 79504',
    about: 'American Star Inn - Baird offers cozy, well-appointed rooms with private bathrooms, seating areas, TVs, refrigerators, free toiletries, and complimentary Wi-Fi for a comfortable stay. Guests can unwind by the seasonal outdoor swimming pool and enjoy the convenience of free on-site private parking and a 24-hour front desk. Located in the heart of Baird, the hotel is praised for its easy access to area highlights, including historic downtown Baird and local attractions.'
  };

  const rooms = [
    {
      title: "Standard Queen Room",
      subtitle: "Comfortable queen room with essential amenities for a pleasant stay.",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500"
      ],
      amenities: ["Free WiFi", "AC", "TV", "Room Service"]
    },
    {
      title: "Double Queen Standard",
      subtitle: "Spacious room with two queen beds, perfect for families or groups.",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500"
      ],
      amenities: ["Two Queen Beds", "City View", "Mini Fridge", "Work Desk"]
    },
    {
      title: "Superior Double Queen",
      subtitle: "Enhanced room with premium amenities and two comfortable queen beds.",
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500",
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=500",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500"
      ],
      amenities: ["Premium Bedding", "Garden View", "Coffee Maker", "Work Desk"]
    },
    {
      title: "Superior King",
      subtitle: "Upgraded king room with luxury touches and modern conveniences.",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500"
      ],
      amenities: ["King Bed", "Premium View", "Jacuzzi", "Mini Bar"]
    },
    {
      title: "Luxury King with Balcony",
      subtitle: "Premium king suite featuring a private balcony with stunning views.",
      images: [
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500",
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500"
      ],
      amenities: ["Private Balcony", "City View", "Luxury Amenities", "Concierge"]
    },
    {
      title: "Luxury Double Queen",
      subtitle: "High-end accommodation with two queen beds and luxury amenities.",
      images: [
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=500",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500"
      ],
      amenities: ["Two Queen Beds", "Garden View", "Luxury Amenities", "Spa Access"]
    }
  ];

  return (
    <div className="baird-page-container">
      <div className="baird-page-card">
        <h1 className="baird-page-name">{hotelInfo.name}</h1>

        <div className="baird-page-contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="baird-page-contact-item">
            <span className="icon">📍</span>
            <span>{hotelInfo.address}</span>
          </div>
          <div className="baird-page-contact-item">
            <span className="icon">📞</span>
            <a href={`tel:${hotelInfo.phone}`}>{hotelInfo.phone}</a>
          </div>
          <div className="baird-page-contact-item">
            <span className="icon">✉️</span>
            <a href={`mailto:${hotelInfo.email}`}>{hotelInfo.email}</a>
          </div>
        </div>

        <hr className="baird-page-divider" />

        <div className="baird-page-about-section">
          <h2 className="baird-page-about-title">About this resort</h2>
          <p className="baird-page-about-description">{hotelInfo.about}</p>
        </div>

        <hr className="baird-page-divider" />

        <BairdPropertyHighlights />

        <hr className="baird-page-divider" />

        <BairdRoomsCarousel rooms={rooms} />

        <hr className="baird-page-divider" />

        <div className="baird-page-rules-section">
          <h2 className="baird-page-about-title">House rules</h2>
          <div className="baird-page-policy-card">
            <div className="baird-page-policy-header" onClick={togglePolicy}>
              <div className="baird-page-policy-title-wrapper">
                <span className="baird-page-check-icon">✓</span>
                <h3 className="baird-page-policy-name">Cancellation Policy</h3>
              </div>
              <span className={`baird-page-policy-arrow ${isPolicyOpen ? 'open' : ''}`}>&#9660;</span>
            </div>
            {isPolicyOpen && (
              <p className="baird-page-policy-text">
                The hotel has a 24-hour cancellation policy. All rooms must be canceled 24 hours prior to the arrival date.
              </p>
            )}
          </div>

          <div className="baird-page-policy-card">
            <div className="baird-page-policy-header" onClick={() => toggleSection('terms')}>
              <div className="baird-page-policy-title-wrapper">
                <span className="baird-page-check-icon">✓</span>
                <h3 className="baird-page-policy-name">Terms & Conditions</h3>
              </div>
              <span className={`baird-page-policy-arrow ${openSection.terms ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openSection.terms && (
              <p className="baird-page-policy-text">
                The hotel has a 24-hour cancellation policy. All rooms must be canceled 24 hours prior to the arrival date.
              </p>
            )}
          </div>
        </div>

        <div className="baird-page-location-section">
          <h2 className="baird-page-about-title">Location</h2>
          <div className="baird-page-map-container">
            <iframe
              title="Baird Hotel Location"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3339.463365825316!2d-99.3931924!3d32.3945518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8654c6c9c6c9c6c9%3A0x0!2s620%20W%204th%20St%2C%20Baird%2C%20TX%2079504!5e0!3m2!1sen!2sus!4v1625687456123!5m2!1sen!2sus">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Baird;