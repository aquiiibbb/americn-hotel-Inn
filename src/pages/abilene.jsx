import React, { useState, useEffect } from 'react';
import './abiline.css';

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
    name: 'American Star Inn - Abiline',
    phone: '+14239335223',
    email: 'veidehi2001@gmail.com',
    address: '11633 W Stamford St, Abilene, TX 79601, USA Taylor County, Texas, United States - 79601',
    about: 'Abiline INN & SUITES Experience this Princeton, New Jersey hotel near Princeton University, New York City and Six Flags Great Adventure. The Abiline Inn and Suites offers guests the highest quality of customer service and unbeatable amenities for an affordable price. Recently renovated, this New Jersey hotel offers convenient access to many popular attractions, shopping and dining options in and around Princeton NJ. Guests staying at this Princeton MHO INN & SUITES will enjoy well appointed guest rooms featuring cable satellite television, microwave, refrigerator and free high speed wireless internet access. This hotel serves a complimentary free coffee only every morning. To make life on the road comfortable in Princeton, the MHO INN & SUITES is the perfect choice when visiting Princeton, New Jersey. Centrally located, guests to this Hotel in Princeton NJ can spend the day enjoying some family fun at Six Flags Great Adventure or Wild Safari or exploring all that nearby New York City has to offer. Princeton University is close to the hotel making theMHO INN & SUITES ideal lodging while visiting students. Nearby Dow Jones, Guest Supply and Johnson and Johnson makes conducting business from this Princeton Best Western hotel easy and convenient. The staff at the MHO INN & SUITES is ready to ensure an enjoyable stay in Princeton, New Jersey. Make a reservation today and save.'
  };

  const rooms = [
    {
      title: "King Single Non Smoking",
      subtitle: "1 room, 3 guests maximum.",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32249/12358/568ef924-3263-48eb-9b3c-9400beb2873f",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxObb1Q4LRwQKcysrAE2W6tWDKgo9TWhTGFA&shttps://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500"
      ],
      amenities: ["Free WiFi", "AC", "TV", "Room Service"]
    },
    {
      title: "King Single Smoking",
      subtitle: "1 room, 3 guests maximum.",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32698/12353/a1f2eedc-7838-41be-8d4d-aec3b55d3167",
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32249/12356/9cd9c235-8dbe-4755-9501-e9a28a2431a5"
      ],
      amenities: ["Two Queen Beds", "Mini Fridge", "Balcony"]
    },
    {
      title: "Queen Single Non Smoking",
      subtitle: "1 room, 3 guests maximum.",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32249/12356/9cd9c235-8dbe-4755-9501-e9a28a2431a5",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkXERbJebRwWrDGlgKjn9VFc4P6kNvHedRfg&s"
      ],
      amenities: ["Premium Bedding",  "Coffee Maker", "Work Desk"]
    },
  ];

  const tvtrItems = [
    
    {
      title: "APT",
      subtitle: "1 room, 3 guests maximum",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/roomtype-images/32698/12357/0c1ffe20-3251-46d2-864e-64e8d5ae9fc3"
      ],
      amenities: ["King Bed", "Premium View", "Mini Bar"]
    },
    {
      title: "RV",
      subtitle: "1 Tv, 2 guest chair.",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/hotel-images/32249/cec38c7c-d342-46ef-90b0-d0cd3da4bed7",
      ],
      amenities: ["Private Balcony","Luxury Amenities", "Concierge"]
    },
    {
      title: "Reception",
      subtitle: "Premium Reception Area",
      images: [
        "https://prodimagesbucket.blob.core.windows.net/hotel-images/32249/c5f86633-2824-44bc-9a2f-4fef2f27c445",
        "https://prodimagesbucket.blob.core.windows.net/hotel-images/32249/d503fe8b-1d8c-4399-98c4-5c42c81d8898"
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
              src="https://www.google.com/maps?ll=32.489628,-99.739365&z=17&t=m&hl=en-IN&gl=US&mapclient=embed&q=1633+W+Stamford+St+Abilene,+TX+79601">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Munday;