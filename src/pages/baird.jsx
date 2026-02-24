import React, { useState, useEffect } from 'react';
import './baird.css';

// --- 1. AccommodationCard Component ---
const AccommodationCard = ({ accommodation }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === accommodation.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

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
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNVLwhe6PzWVRODajp5frunTgd99h8pbLLSQ&s",
        title: "AC",
        description: "Enjoy cool and comfortable air-conditioned rooms for a relaxing stay."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsDxvedfx1nhcV89HWJzJDGQg3kGorqetl0Q&s",
        title: "INTERNET - WiFi",
        description: "Stay connected with high-speed complimentary WiFi throughout the property."
      },
      {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGRQggRMrme5m_8OuCYROpn_MUZgi4Ks3eAQ&s",
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
      }
    ]
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % highlights.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [highlights.length]);

  return (
    <div className="hotel-page-highlights-showcase">
      <h2 className="hotel-page-highlights-title">
        <span className="hotel-page-highlights-emoji"></span>
        Amenities
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
    }, 5000);
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

// --- 4. TVTRCarousel Component ---
const TVTRCarousel = ({ tvtrItems }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Group TV & TR items into slides of 3
  const tvtrSlides = [];
  for (let i = 0; i < tvtrItems.length; i += 3) {
    tvtrSlides.push(tvtrItems.slice(i, i + 3));
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % tvtrSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [tvtrSlides.length]);

  return (
    <div className="hotel-page-rooms-showcase">
      <h2 className="hotel-page-rooms-title">
        <span className="hotel-page-rooms-emoji"></span>
         RV & RV T
      </h2>

      <div className="hotel-page-rooms-wrapper">
        <div className="hotel-page-rooms-slides">
          {tvtrSlides.map((slideSet, slideIndex) => (
            <div
              key={slideIndex}
              className={`hotel-page-rooms-slide ${slideIndex === currentSlide ? 'active' : ''}`}
            >
              {slideSet.map((item, cardIndex) => (
                <AccommodationCard key={cardIndex} accommodation={item} />
              ))}
            </div>
          ))}
        </div>

        <div className="hotel-page-rooms-dots">
          {tvtrSlides.map((_, index) => (
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

// --- 5. Main Component ---
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
    name: 'American Star Inn - Baird',
    phone: '+13258648552',
    email: 'abvibaird@gmail.com',
    address: '500 I-20, Baird, TX 79504, USA Callahan County, Texas, United States - 79504',
    about: 'American Star Inn - Baird offers cozy, well-appointed rooms with private bathrooms, seating areas, TVs, refrigerators, free toiletries, and complimentary Wi-Fi for a comfortable stay. Guests can unwind by the seasonal outdoor swimming pool and enjoy the convenience of free on-site private parking and a 24-hour front desk. Located in the heart of Baird, the hotel is praised for its easy access to area highlights, including historic downtown Baird and local attractions.'
  };

  const rooms = [
    {
      title: "Double Bed Queen Non Smoking",
      subtitle: "1 room, 2 guests maximum",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32285/12357/21a348df-8b1f-4c53-9af2-f73db0445dfd",
       
      ],
      amenities: ["Free WiFi", "AC", "TV", "Room Service"]
    },
    {
      title: "Double Bed Smoking",
      subtitle: "1 room, 2 guests maximum",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32285/12356/0b7335a3-7ad5-4e19-8c6f-cbd1b711dc2f",
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32285/12356/0b7335a3-7ad5-4e19-8c6f-cbd1b711dc2f"
      ],
      amenities: ["Two Queen Beds", "Mini Fridge", "Balcony"]
    },
    {
      title: "King Non Smoking",
      subtitle: "1 room, 2 guests maximum",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32285/12355/2a4909b4-e75d-4d4f-86fd-41299852caae",
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32285/12355/2a4909b4-e75d-4d4f-86fd-41299852caae"
      ],
      amenities: ["Premium Bedding",  "Coffee Maker", "Work Desk"]
    },
  ];

  const tvtrItems = [
    
    {
      title: "RV Spacke Backup",
      subtitle: "1 room, 2 guests maximum",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32285/12360/a6bb8a9a-234a-460d-a9bd-17ec2a7a135d"
      ],
      amenities: ["King Bed", "Premium View", "Mini Bar"]
    },
    {
      title: "RV Park Pull Threw",
      subtitle: "1 room, 2 guests maximum",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32285/12359/9340a986-7768-4d92-b7fe-b81486bf8d32",
      ],
      amenities: ["Private Balcony","Luxury Amenities", "Concierge"]
    },
    {
      title: "Kitchenette Queen Non Smoking",
      subtitle: "1 room, 2 guests maximum.",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32698/12355/365ebc77-1956-449c-a5c2-d38c8aae600f",
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32698/12355/365ebc77-1956-449c-a5c2-d38c8aae600f"
      ],
      amenities: ["Two Queen Beds", "Luxury Amenities", "Spa Access"]
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
          <p className="hotel-page-about-description">{hotelInfo.about}</p>
        </div>

        <hr className="hotel-page-divider" />

        <PropertyHighlights />

        <hr className="hotel-page-divider" />

        <RoomsCarousel rooms={rooms} />

        <hr className="hotel-page-divider" />

        <TVTRCarousel tvtrItems={tvtrItems} />

        <hr className="hotel-page-divider" />

        <div className="hotel-page-rules-section">
          <h2 className="hotel-page-about-title">House Rules</h2>
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
              src="https://www.google.com/maps?ll=32.395127,-99.400739&z=16&t=m&hl=en&gl=US&mapclient=embed&q=620+W+4th+St+Baird,+TX+79504">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Munday;