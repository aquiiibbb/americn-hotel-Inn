import React, { useState, useEffect } from 'react';
import './munday.css';

// --- 1. AccommodationCard Component ---
const AccommodationCard = ({ accommodation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === accommodation.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, [accommodation.images.length]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="hotel-page-room-card">
      <div className="hotel-page-room-gallery">
        {accommodation.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${accommodation.title} view ${index + 1}`}
            className={`hotel-page-room-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className="hotel-page-gallery-dots">
          {accommodation.images.map((_, index) => (
            <span
              key={index}
              className={`hotel-page-gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="hotel-page-room-info">
        <h3 className="hotel-page-room-heading">{accommodation.title}</h3>
        <p className="hotel-page-room-description">{accommodation.subtitle}</p>

        <div className="hotel-page-amenities-list">
          {accommodation.amenities.map((amenity, index) => (
            <span key={index} className="hotel-page-amenity-badge">
              ✓ {amenity}
            </span>
          ))}
        </div>

        <button className="hotel-page-book-button">
          <span>Book Now</span>
          <span className="arrow">→</span>
        </button>
      </div>
    </div>
  );
};

// --- 2. PropertyHighlights Component ---
const PropertyHighlights = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

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
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  return (
    <div className="hotel-page-highlights-showcase">
      <h2 className="hotel-page-highlights-title">
        <span className="hotel-page-highlights-emoji"></span>
        Aminities
      </h2>

      <div className="hotel-page-highlights-wrapper">
        <div className="hotel-page-highlights-slides">
          {highlights.map((slideSet, slideIndex) => (
            <div
              key={slideIndex}
              className={`hotel-page-highlights-slide ${slideIndex === currentSlide ? 'active' : ''}`}
            >
              {slideSet.map((highlight, cardIndex) => (
                <div key={cardIndex} className="hotel-page-highlight-card">
                  <div className="hotel-page-highlight-image">
                    <img src={highlight.image} alt={highlight.title} />
                  </div>
                  <div className="hotel-page-highlight-text">
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="hotel-page-highlights-dots">
          {highlights.map((_, index) => (
            <button
              key={index}
              className={`hotel-page-highlights-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 3. RoomsCarousel Component ---
const RoomsCarousel = ({ rooms }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Group rooms into slides of 3
  const roomSlides = [];
  for (let i = 0; i < rooms.length; i += 3) {
    roomSlides.push(rooms.slice(i, i + 3));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % roomSlides.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [roomSlides.length]);

  return (
    <div className="hotel-page-rooms-showcase">
      <h2 className="hotel-page-rooms-title">
        <span className="hotel-page-rooms-emoji"></span>
        Our Rooms
      </h2>

      <div className="hotel-page-rooms-wrapper">
        <div className="hotel-page-rooms-slides">
          {roomSlides.map((slideSet, slideIndex) => (
            <div
              key={slideIndex}
              className={`hotel-page-rooms-slide ${slideIndex === currentSlide ? 'active' : ''}`}
            >
              {slideSet.map((room, cardIndex) => (
                <AccommodationCard key={cardIndex} accommodation={room} />
              ))}
            </div>
          ))}
        </div>

        <div className="hotel-page-rooms-dots">
          {roomSlides.map((_, index) => (
            <button
              key={index}
              className={`hotel-page-rooms-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 4. Main Component ---
const Munday = () => {
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
    name: 'American Star Inn - Munday',
    phone: '+14239335223',
    email: 'americanstarinn76371@gmail.com',
    address: '851 E G St, Munday, TX 76371, USA Knox County, Texas, United States - 76371',
    about: 'American Star Inn - Munday Eloy Casa Grande in Eloy offers cozy, well-appointed rooms with private bathrooms, seating areas, TVs, refrigerators, free toiletries, and complimentary Wi-Fi for a comfortable stay. Guests can unwind by the seasonal outdoor swimming pool and enjoy the convenience of free on-site private parking and a 24-hour front desk. Located about 78 km from Phoenix–Mesa Gateway Airport, the hotel is praised for its easy access to area highlights, including the Arizona State Fairgrounds and the Arizona State Museum. '
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
      amenities: ["Two Queen Beds", "Ocean View", "Mini Fridge", "Balcony"]
    },
    {
      title: "Superior Double Queen",
      subtitle: "Enhanced room with premium amenities and two comfortable queen beds.",
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500",
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=500",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500"
      ],
      amenities: ["Premium Bedding", "Sea View", "Coffee Maker", "Work Desk"]
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
      amenities: ["Private Balcony", "Ocean View", "Luxury Amenities", "Concierge"]
    },
    {
      title: "Luxury Double Queen",
      subtitle: "High-end accommodation with two queen beds and luxury amenities.",
      images: [
        "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=500",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=500",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=500"
      ],
      amenities: ["Two Queen Beds", "Sea Garden View", "Luxury Amenities", "Spa Access"]
    }
  ];

  return (
    <div className="hotel-page-container">
      <div className="hotel-page-card">
        <h1 className="hotel-page-name">{hotelInfo.name}</h1>

        <div className="hotel-page-contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="hotel-page-contact-item">
            <span className="icon">📍</span>
            <span>{hotelInfo.address}</span>
          </div>
          <div className="hotel-page-contact-item">
            <span className="icon">📞</span>
            <a href={`tel:${hotelInfo.phone}`}>{hotelInfo.phone}</a>
          </div>
          <div className="hotel-page-contact-item">
            <span className="icon">✉️</span>
            <a href={`mailto:${hotelInfo.email}`}>{hotelInfo.email}</a>
          </div>
        </div>

        <hr className="hotel-page-divider" />

        <div className="hotel-page-about-section">
          <h2 className="hotel-page-about-title">About this resort</h2>
          <p className="hotel-page-about-description">{hotelInfo.about}</p>
        </div>

        <hr className="hotel-page-divider" />

        <PropertyHighlights />

        <hr className="hotel-page-divider" />

        <RoomsCarousel rooms={rooms} />

        <hr className="hotel-page-divider" />

        <div className="hotel-page-rules-section">
          <h2 className="hotel-page-about-title">House rules</h2>
          <div className="hotel-page-policy-card">
            <div className="hotel-page-policy-header" onClick={togglePolicy}>
              <div className="hotel-page-policy-title-wrapper">
                <span className="hotel-page-check-icon">✓</span>
                <h3 className="hotel-page-policy-name">Cancellation Policy</h3>
              </div>
              <span className={`hotel-page-policy-arrow ${isPolicyOpen ? 'open' : ''}`}>&#9660;</span>
            </div>
            {isPolicyOpen && (
              <p className="hotel-page-policy-text">
                The hotel has a 24-hour cancellation policy. All rooms must be canceled 24 hours prior to the arrival date.
              </p>
            )}
          </div>

          <div className="hotel-page-policy-card">
            <div className="hotel-page-policy-header" onClick={() => toggleSection('terms')}>
              <div className="hotel-page-policy-title-wrapper">
                <span className="hotel-page-check-icon">✓</span>
                <h3 className="hotel-page-policy-name">Terms & Conditions</h3>
              </div>
              <span className={`hotel-page-policy-arrow ${openSection.terms ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openSection.terms && (
              <p className="hotel-page-policy-text">
                The hotel has a 24-hour cancellation policy. All rooms must be canceled 24 hours prior to the arrival date.
              </p>
            )}
          </div>
        </div>

        <div className="hotel-page-location-section">
          <h2 className="hotel-page-about-title">Location</h2>
          <div className="hotel-page-map-container">
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