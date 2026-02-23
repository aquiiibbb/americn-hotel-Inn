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
    }, 3000);

    return () => clearInterval(timer);
  }, [accommodation.images.length]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="abiline-page-room-card">
      <div className="abiline-page-room-gallery">
        {accommodation.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${accommodation.title} view ${index + 1}`}
            className={`abiline-page-room-image ${index === currentImageIndex ? 'active' : ''}`}
          />
        ))}
        <div className="abiline-page-gallery-dots">
          {accommodation.images.map((_, index) => (
            <span
              key={index}
              className={`abiline-page-gallery-dot ${index === currentImageIndex ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      <div className="abiline-page-room-info">
        <h3 className="abiline-page-room-heading">{accommodation.title}</h3>
        <p className="abiline-page-room-description">{accommodation.subtitle}</p>

        <div className="abiline-page-amenities-list">
          {accommodation.amenities.map((amenity, index) => (
            <span key={index} className="abiline-page-amenity-badge">
              ✓ {amenity}
            </span>
          ))}
        </div>

        <button className="abiline-page-book-button">
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
        title: "VENDING MACHINE",
        description: "Convenient vending machines available for snacks and beverages."
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
    <div className="abiline-page-highlights-showcase">
      <h2 className="abiline-page-highlights-title">
        <span className="abiline-page-highlights-emoji"></span>
        Aminities
      </h2>

      <div className="abiline-page-highlights-wrapper">
        <div className="abiline-page-highlights-slides">
          {highlights.map((slideSet, slideIndex) => (
            <div
              key={slideIndex}
              className={`abiline-page-highlights-slide ${slideIndex === currentSlide ? 'active' : ''}`}
            >
              {slideSet.map((highlight, cardIndex) => (
                <div key={cardIndex} className="abiline-page-highlight-card">
                  <div className="abiline-page-highlight-image">
                    <img src={highlight.image} alt={highlight.title} />
                  </div>
                  <div className="abiline-page-highlight-text">
                    <h3>{highlight.title}</h3>
                    <p>{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="abiline-page-highlights-dots">
          {highlights.map((_, index) => (
            <button
              key={index}
              className={`abiline-page-highlights-dot ${index === currentSlide ? 'active' : ''}`}
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
    <div className="abiline-page-rooms-showcase">
      <h2 className="abiline-page-rooms-title">
        <span className="abiline-page-rooms-emoji"></span>
        Our Rooms
      </h2>

      <div className="abiline-page-rooms-wrapper">
        <div className="abiline-page-rooms-slides">
          {roomSlides.map((slideSet, slideIndex) => (
            <div
              key={slideIndex}
              className={`abiline-page-rooms-slide ${slideIndex === currentSlide ? 'active' : ''}`}
            >
              {slideSet.map((room, cardIndex) => (
                <AccommodationCard key={cardIndex} accommodation={room} />
              ))}
            </div>
          ))}
        </div>

        <div className="abiline-page-rooms-dots">
          {roomSlides.map((_, index) => (
            <button
              key={index}
              className={`abiline-page-rooms-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 4. Main Component ---
const Abiline = () => {
  const [isPolicyOpen, setIsPolicyOpen] = useState(false);
  const [openSection, setOpenSection] = useState({
    cancellation: false,
    child: false,
    pet: false,
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
    about: `Abiline INN & SUITES Experience this Princeton, New Jersey hotel near Princeton University, New York City and Six Flags Great Adventure.

The Abiline Inn and Suites offers guests the highest quality of customer service and unbeatable amenities for an affordable price. Recently renovated, this New Jersey hotel offers convenient access to many popular attractions, shopping and dining options in and around Princeton NJ. Guests staying at this Princeton MHO INN & SUITES will enjoy well appointed guest rooms featuring cable satellite television, microwave, refrigerator and free high speed wireless internet access. This hotel serves a complimentary free coffee only every morning. To make life on the road comfortable in Princeton, the MHO INN & SUITES is the perfect choice when visiting Princeton, New Jersey. Centrally located, guests to this Hotel in Princeton NJ can spend the day enjoying some family fun at Six Flags Great Adventure or Wild Safari or exploring all that nearby New York City has to offer. Princeton University is close to the hotel making theMHO INN & SUITES ideal lodging while visiting students. Nearby Dow Jones, Guest Supply and Johnson and Johnson makes conducting business from this Princeton Best Western hotel easy and convenient.

The staff at the MHO INN & SUITES is ready to ensure an enjoyable stay in Princeton, New Jersey. Make a reservation today and save.`
  };

  const rooms = [
    {
      title: "Non Smoking Two Queen Bed",
      subtitle: "Comfortable queen room with essential amenities for a pleasant stay.",
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Free WiFi", "AC", "TV", "Microwave", "Refrigerator"]
    },
    {
      title: "King Suites",
      subtitle: "Spacious suite with king bed, perfect for a luxurious stay.",
      images: [
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=500",
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=500"
      ],
      amenities: ["King Bed", "Premium View", "Mini Fridge", "Work Desk"]
    },
    {
      title: "Non Smoking 2 Queen Beds",
      subtitle: "Enhanced room with two comfortable queen beds and modern amenities.",
      images: [
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["Two Queen Beds", "Coffee Maker", "AC", "WiFi"]
    },
    {
      title: "Non Smoking Suite With 2 Full Beds And Pull Out Sofa Bed",
      subtitle: "Upgraded suite with luxury touches and modern conveniences.",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80"
      ],
      amenities: ["2 Full Beds", "Sofa Bed", "Microwave", "Refrigerator"]
    }
  ];

  return (
    <div className="abiline-page-container">
      <div className="abiline-page-card">
        <h1 className="abiline-page-name">{hotelInfo.name}</h1>

        <div className="abiline-page-contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="abiline-page-contact-item">
            <span className="icon">📍</span>
            <span>{hotelInfo.address}</span>
          </div>
          <div className="abiline-page-contact-item">
            <span className="icon">📞</span>
            <a href={`tel:${hotelInfo.phone}`}>{hotelInfo.phone}</a>
          </div>
          <div className="abiline-page-contact-item">
            <span className="icon">✉️</span>
            <a href={`mailto:${hotelInfo.email}`}>{hotelInfo.email}</a>
          </div>
        </div>

        <hr className="abiline-page-divider" />

        <div className="abiline-page-about-section">
          <h2 className="abiline-page-about-title">About this resort</h2>
          <p className="abiline-page-about-description">{hotelInfo.about}</p>
        </div>

        <hr className="abiline-page-divider" />

        <PropertyHighlights />

        <hr className="abiline-page-divider" />

        <RoomsCarousel rooms={rooms} />

        <hr className="abiline-page-divider" />

        <div className="abiline-page-rules-section">
          <h2 className="abiline-page-about-title">House rules</h2>

          {/* Cancellation Policy */}
          <div className="abiline-page-policy-card">
            <div className="abiline-page-policy-header" onClick={() => toggleSection('cancellation')}>
              <div className="abiline-page-policy-title-wrapper">
                <span className="abiline-page-check-icon">✓</span>
                <h3 className="abiline-page-policy-name">Cancellation Policy</h3>
              </div>
              <span className={`abiline-page-policy-arrow ${openSection.cancellation ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openSection.cancellation && (
              <p className="abiline-page-policy-text">
                Guest will be refunded 100% when cancelled 24 Hours before 4:00PM check in date. And If the guest does not update his credit card details within given time frame, you will have an option to cancel this reservation
              </p>
            )}
          </div>

          {/* Child Policy */}
          <div className="abiline-page-policy-card">
            <div className="abiline-page-policy-header" onClick={() => toggleSection('child')}>
              <div className="abiline-page-policy-title-wrapper">
                <span className="abiline-page-check-icon">✓</span>
                <h3 className="abiline-page-policy-name">Child Policy</h3>
              </div>
              <span className={`abiline-page-policy-arrow ${openSection.child ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openSection.child && (
              <p className="abiline-page-policy-text">
                Under 12 year old stay free with parent
              </p>
            )}
          </div>

          {/* Pet Policy */}
          <div className="abiline-page-policy-card">
            <div className="abiline-page-policy-header" onClick={() => toggleSection('pet')}>
              <div className="abiline-page-policy-title-wrapper">
                <span className="abiline-page-check-icon">✓</span>
                <h3 className="abiline-page-policy-name">Pet Policy</h3>
              </div>
              <span className={`abiline-page-policy-arrow ${openSection.pet ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openSection.pet && (
              <div className="abiline-page-policy-text" style={{ fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
                <p><strong>No Pets Allowed at any Time (pet fine $250.00).</strong> Service Animals are defined by Title II and Title III of the ADA.</p>

                <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    A service animal means any dog that is individually trained to do work or perform tasks for the benefit of an individual with a disability, including a physical, sensory, psychiatric, intellectual, or other mental disability.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    Emotional support animals, comfort animals, and therapy dogs are not service animals under Title II and Title III of the ADA.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    The work or tasks performed by a service animal must be directly related to the individual's disability.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Examples of service animals:</strong>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><strong>Guide Dog:</strong> Trained to serve as a travel tool for persons who are blind or have severe visual impairments.</li>
                      <li><strong>Hearing/Signal Dog:</strong> Trained to alert a person with significant hearing loss when a sound occurs.</li>
                      <li><strong>Psychiatric Service Dog:</strong> Trained to detect the onset of psychiatric episodes and lessen their effects.</li>
                      <li><strong>Seizure Response Dog:</strong> Trained to assist during a seizure by standing guard or going for help.</li>
                    </ul>
                  </li>
                  <li>
                    Under Title II and III of the ADA, service animals are limited to dogs. However, reasonable modifications must be made to allow miniature horses if they have been individually trained.
                  </li>
                </ol>
              </div>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className="abiline-page-policy-card">
            <div className="abiline-page-policy-header" onClick={() => toggleSection('terms')}>
              <div className="abiline-page-policy-title-wrapper">
                <span className="abiline-page-check-icon">✓</span>
                <h3 className="abiline-page-policy-name">Terms & Conditions</h3>
              </div>
              <span className={`abiline-page-policy-arrow ${openSection.terms ? 'open' : ''}`}>&#9660;</span>
            </div>
            {openSection.terms && (
              <div className="abiline-page-policy-text" style={{ fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
                <p><strong>Check-in & Identification:</strong></p>
                <ul style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                  <li>Valid photo ID (Driver's License, Passport, or proof of age card) and a valid Credit Card are required at check-in.</li>
                  <li>Positive ID is mandatory for all occupants, including name, address, signature, and age.</li>
                  <li>Registered guests must be 21 years of age or older; no visitors are allowed at any time.</li>
                </ul>

                <p><strong>Timing & Stay Limits:</strong></p>
                <ul style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                  <li>Check-in: 4:00 PM EST. Early check-in will incur an extra charge.</li>
                  <li>Check-out: 11:00 AM EST.</li>
                  <li>Maximum stay is limited to 28 days only.</li>
                </ul>

                <p><strong>Fees & Policies:</strong></p>
                <ul style={{ paddingLeft: '20px', marginBottom: '10px' }}>
                  <li><strong>Smoking:</strong> 100% Smoke-Free Facility. Violators are subject to a $250.00 fine.</li>
                  <li><strong>Taxes:</strong> Total Tax is 14.625% (Sales 6.625% + Occupancy 5% + Municipal 3%).</li>
                  <li><strong>No Cooking:</strong> Cooking is strictly prohibited in the rooms.</li>
                  <li><strong>Refunds:</strong> Possible only within the first 15 minutes of check-in.</li>
                </ul>

                <p style={{ fontSize: '12px', fontStyle: 'italic', marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '5px' }}>
                  Property is privately owned. Management is not responsible for accidents, injuries, or loss of money/jewelry.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="abiline-page-location-section">
          <h2 className="abiline-page-about-title">Location</h2>
          <div className="abiline-page-map-container">
            <iframe
              title="Abiline Hotel Location"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.4172449176375!2d-99.7518423!3d32.448544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e98717812953%3A0xc07469a79930e18!2s1633%20W%20Stamford%20St%2C%20Abiline%2C%20TX%2079601!5e0!3m2!1sen!2sus!4v1640000000000">
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abiline;