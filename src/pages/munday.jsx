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

  return (
    <div className="accommodation-card-layout">
      <div className="accommodation-gallery-wrapper">
        {accommodation.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${accommodation.title} view ${index + 1}`}
            className={`accommodation-gallery-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className="gallery-navigation-dots">
          {accommodation.images.map((_, index) => (
            <span
              key={index}
              className={`navigation-dot ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="accommodation-info-section">
        <h3 className="accommodation-heading">{accommodation.title}</h3>
        <p className="accommodation-description">{accommodation.subtitle}</p>
        
        <div className="accommodation-amenities-list">
          {accommodation.amenities.map((amenity, index) => (
            <span key={index} className="amenity-badge">
              ✓ {amenity}
            </span>
          ))}
        </div>
        
        <button className="reservation-button">
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
    // First set of 3 cards
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
  },
  {
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400",
    title: "TWIN BEDS",
    description: "Comfortable twin beds designed for a peaceful and restful sleep."
  }
]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 8000); // Slower - changed from 5000 to 8000
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="property-highlights-showcase">
      <h2 className="highlights-main-title">
        <span className="highlights-emoji-icon">🏨</span>
        Property Highlights
      </h2>
      
      <div className="highlights-carousel-wrapper">
        <div className="highlights-slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {highlights.map((slideSet, slideIndex) => (
            <div key={slideIndex} className="highlights-single-slide">
              {slideSet.map((highlight, cardIndex) => (
                <div key={cardIndex} className="highlights-feature-card">
                  <div className="highlights-card-image">
                    <img src={highlight.image} alt={highlight.title} />
                  </div>
                  <div className="highlights-card-text">
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        
        <div className="highlights-pagination-dots">
          {highlights.map((_, index) => (
            <button
              key={index}
              className={`highlights-pagination-dot ${index === currentSlide ? 'active' : ''}`}
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
    }, 8000);
    return () => clearInterval(timer);
  }, [roomSlides.length]);

  return (
    <div className="rooms-carousel-showcase">
      <h2 className="rooms-main-title">
        <span className="rooms-emoji-icon">🏨</span>
        Our Rooms
      </h2>
      
      <div className="rooms-carousel-wrapper">
        <div className="rooms-slides-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {roomSlides.map((slideSet, slideIndex) => (
            <div key={slideIndex} className="rooms-single-slide">
              {slideSet.map((room, cardIndex) => (
                <AccommodationCard key={cardIndex} accommodation={room} />
              ))}
            </div>
          ))}
        </div>
        
        <div className="rooms-pagination-dots">
          {roomSlides.map((_, index) => (
            <button
              key={index}
              className={`rooms-pagination-dot ${index === currentSlide ? 'active' : ''}`}
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
    <div className="hotel-container">
      <div className="hotel-card">        
        <h1 className="hotel-name">{hotelInfo.name}</h1>

        <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="contact-item">
            <span className="icon">📍</span>
            <span>{hotelInfo.address}</span>
          </div>
          <div className="contact-item">
            <span className="icon">📞</span>
            <a href={`tel:${hotelInfo.phone}`}>{hotelInfo.phone}</a>
          </div>
          <div className="contact-item">
            <span className="icon">✉️</span>
            <a href={`mailto:${hotelInfo.email}`}>{hotelInfo.email}</a>
          </div>
        </div>
        
        <hr className="divider" />
        
        <div className="about-section">
          <h2 className="about-title">About this resort</h2>
          <p className="about-description">{hotelInfo.about}</p>
        </div>
        
        <hr className="divider" />
        
        <PropertyHighlights />
        
        <hr className="divider" />
        
        <RoomsCarousel rooms={rooms} />
        
        <hr className="divider" />

        <div className="house-rules-section">
          <h2 className="about-title">House rules</h2>
          <div className="policy-card">
            <div className="policy-header" onClick={togglePolicy}>
              <div className="policy-title-wrapper">
                <span className="check-icon">✓</span>
                <h3 className="policy-name">Cancellation Policy</h3>
              </div>
              <span className={`policy-arrow ${isPolicyOpen ? 'open' : ''}`}>&#9660;</span>
            </div>
            {isPolicyOpen && (
              <p className="policy-text">
                The hotel has a 24-hour cancellation policy. All rooms must be canceled 24 hours prior to the arrival date.
              </p>
            )}
          </div>
          
          <div className="policy-card">
            <div className="policy-header" onClick={() => toggleSection('terms')}>
              <div className="policy-title-wrapper">
                <span className="check-icon">✓</span>
                <h3 className="policy-name">Terms & Conditions</h3>
              </div>
              <span className={`policy-arrow ${openSection.terms ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openSection.terms && (
              <p className="policy-text">
                The hotel has a 24-hour cancellation policy. All rooms must be canceled 24 hours prior to the arrival date.
              </p>
            )}
          </div>
        </div>

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