import React, { useState, useEffect } from 'react';
import './abiline.css';

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

          {/* Room Specific Amenities (if available) */}
          {room.roomSpecificAmenities && (
            <div className="room-specific-amenities" style={{ marginTop: '12px' }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '8px' }}>Room Amenities:</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px', fontSize: '13px' }}>
                {room.roomSpecificAmenities.map((amenity, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ color: '#4CAF50' }}>✓</span>
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

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
              <button className="book-btn">
                <span className="plus">+</span> {plan.needsLogin ? 'Login to book' : 'Book'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- 2. Main Component ---
const Abiline = () => {
  
  const [openSection, setOpenSection] = useState({
    cancellation: false,
    child: false,
    pet: false,
    terms: false
  });

  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const toggleAmenitiesModal = () => {
    setIsAmenitiesModalOpen(!isAmenitiesModalOpen);
    if (!isAmenitiesModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const hotelInfo = {
    name: 'American Star Inn - Abilene',
    phone: '+14239335223',
    email: 'veidehi2001@gmail.com',
    address: '1633 W Stamford St, Abilene, TX 79601, USA Taylor County, Texas, United States - 79601',
    amenities: [
      { icon: '📶', text: 'Free: Wi-fi' },
      { icon: '🚗', text: 'Parking: On Premise' },
      { icon: '👥', text: '24-hour: Front desk service' }
    ],
    about: `"Abilene INN & SUITES Experience this Princeton, New Jersey hotel near Princeton University, New York City and Six Flags Great Adventure.

The Abilene Inn and Suites offers guests the highest quality of customer service and unbeatable amenities for an affordable price. Recently renovated, this New Jersey hotel offers convenient access to many popular attractions, shopping and dining options in and around Princeton NJ. Guests staying at this Princeton MHO INN & SUITES will enjoy well appointed guest rooms featuring cable satellite television, microwave, refrigerator and free high speed wireless internet access. This hotel serves a complimentary free coffee only every morning. To make life on the road comfortable in Princeton, the MHO INN & SUITES is the perfect choice when visiting Princeton, New Jersey. Centrally located, guests to this Hotel in Princeton NJ can spend the day enjoying some family fun at Six Flags Great Adventure or Wild Safari or exploring all that nearby New York City has to offer. Princeton University is close to the hotel making theMHO INN & SUITES ideal lodging while visiting students. Nearby Dow Jones, Guest Supply and Johnson and Johnson makes conducting business from this Princeton Best Western hotel easy and convenient.

The staff at the MHO INN & SUITES is ready to ensure an enjoyable stay in Princeton, New Jersey. Make a reservation today and save."`
  };

  const fullAmenitiesList = {
    hotelAmenities: [
      "Internet/Wi-Fi", "On Premise Parking", "24-hour front desk service",
      "Vending Machine", "Free parking on premises", "Non-smoking rooms",
      "Family rooms", "Carbon monoxide detectors", "Fire extinguishers"
    ],
    roomFacilities: [
      "Refrigerator", "Hair Dryer", "Microwave", "Air-conditioning"
    ],
    accessibility: [
      "Wheelchair Accessible"
    ]
  };

  const topAmenities = [
    { icon: '🛜', text: 'Internet – Wifi' },
    { icon: '🅿️', text: 'Parking' },
    { icon: '🍽️', text: 'Restaurant' },
    { icon: '🧹', text: 'Room service' }
  ];

  const detailedAmenities = [
    "Internet/Wi-Fi",
    "On Premise Parking",
    "24-hour front desk service",
    "Vending Machine",
    "Free parking on premises",
    "Non-smoking rooms",
    "Family rooms",
    "Carbon monoxide detectors",
    "Fire extinguishers"
  ];

  const rooms = [
    {
      title: "Non Smoking Two Queen Bed",
      subtitle: "Non Smoking Two Queen Bed",
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Enjoy a comfortable stay in this smoke-free room featuring two cozy queen-size beds. Perfect for families or groups.",
      availability: "Last 6 rooms available",
      roomSpecificAmenities: [
        "Clothes rack", "Trash cans", "Private entrance", "Microwave",
        "Refrigerator", "Linens", "Towels", "Toilet paper",
        "Soap, shampoo and conditioner, cup", "TV", "Cloth Hangars"
      ],
      plans: [
        {
          name: "ship Rates @ $68.85",
          desc: "15% off",
          price: 68.85,
          isSpecial: true,
          needsLogin: true
        },
        {
          name: "Standard Plan @ $75.33",
          originalPrice: "$81.00",
          desc: "Standard Plan",
          price: 75.33,
          isSpecial: false
        }
      ]
    },
    {
      title: "King Suites",
      subtitle: "King Suites",
      images: ["https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80"],
      description: "Relax in comfort in this spacious King Suite featuring a plush king-size bed and extra living space.",
      availability: "Last 1 rooms available",
      roomSpecificAmenities: [
        "Clothes rack", "Trash cans", "Private entrance", "Microwave",
        "Refrigerator", "Linens", "Towels", "Toilet paper",
        "Soap, shampoo and conditioner, cup", "TV", "Cloth Hangars"
      ],
      plans: [
        {
          name: "ship Rates @ $68.85",
          desc: "15% off",
          price: 68.85,
          isSpecial: true,
          needsLogin: true
        },
        {
          name: "Standard Plan @ $75.33",
          originalPrice: "$81.00",
          desc: "Standard Plan",
          price: 75.33,
          isSpecial: false
        }
      ]
    },
    {
      title: "Non Smoking 2 Queen Beds",
      subtitle: "Non Smoking 2 Queen Beds",
      images: [
        "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Perfect for families or groups, this spacious room offers two comfortable queen-sized beds.",
      availability: "Last 7 rooms available",
      plans: [
        { name: "ELOY CHAMBER @ $73.44", desc: "Special Rate", price: 73.44, isSpecial: true },
        { name: "Standard Plan @ $78.03", originalPrice: "$91.80", desc: "Standard Plan", price: 78.03, isSpecial: false }
      ]
    },
    {
      title: "Non Smoking Suite With 2 Full Beds And Pull Out Sofa Bed",
      subtitle: "Non Smoking Suite With 2 Full Beds And Pull Out Sofa Bed",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Perfect for families or groups, this spacious smoke-free suite offers two comfortable full-size beds.",
      availability: "Last 6 rooms available",
      plans: [
        { name: "ELOY CHAMBER @ $84.96", desc: "Special Rate", price: 84.96, isSpecial: true },
        { name: "Standard Plan @ $90.27", originalPrice: "$106.20", desc: "Standard Plan", price: 90.27, isSpecial: false }
      ]
    }
  ];

  return (
    <div className="hotel-container">
      <div className="hotel-card">
        <span className="hotel-badge">Hotel</span>
        <h1 className="hotel-name">{hotelInfo.name}</h1>

        <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div className="contact-item"><span>📍</span> {hotelInfo.address}</div>
          <div className="contact-item"><span>📞</span> <a href={`tel:${hotelInfo.phone}`}>{hotelInfo.phone}</a></div>
          <div className="contact-item"><span>✉️</span> <a href={`mailto:${hotelInfo.email}`}>{hotelInfo.email}</a></div>
        </div>

        <div className="amenities">
          {hotelInfo.amenities.map((amenity, index) => (
            <div key={index} className="amenity-card">
              <span className="amenity-icon">{amenity.icon}</span>
              <span className="amenity-text">{amenity.text}</span>
            </div>
          ))}
        </div>

        <hr className="divider" />

        <div className="about-section">
          <h2 className="about-title">About this resort</h2>
          <div className="about-description" style={{ fontSize: '15px', lineHeight: '1.8', color: '#333' }}>
            {showMoreAbout ? (
              hotelInfo.about.split('\n\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '15px' }}>{paragraph}</p>
              ))
            ) : (
              <p>{hotelInfo.about.slice(0, 400)}...</p>
            )}
          </div>
          <button className="toggle-about-btn" onClick={() => setShowMoreAbout(!showMoreAbout)} style={{ background: 'transparent', border: 'none', color: '#000', fontWeight: '700', cursor: 'pointer', textDecoration: 'underline' }}>
            {showMoreAbout ? 'Show Less' : 'Show More'}
          </button>
        </div>

        <hr className="divider" />

        <div className="amenities-section">
          <h2 className="about-title">Amenities</h2>
          <div className="amenities-top-row">
            {topAmenities.map((item, index) => (
              <div key={index} className="amenity-pill">
                <span className="amenity-icon">{item.icon}</span>
                <span className="amenity-text">{item.text}</span>
              </div>
            ))}
          </div>
          <div className="amenities-list-grid">
            {detailedAmenities.map((item, index) => (
              <div key={index} className="amenity-list-item">▪ {item}</div>
            ))}
          </div>
          <div className="amenities-button-wrapper">
            <button className="view-all-btn" onClick={toggleAmenitiesModal}>view all amenities</button>
          </div>
        </div>

        <hr className="divider" />

        <div className="rooms-section">
          <h2 className="about-title">Our Rooms</h2>
          {rooms.map((room, index) => <RoomCard key={index} room={room} />)}
        </div>

        <hr className="divider" />

        <div className="house-rules-section">
          <h2 className="about-title">House rules</h2>

          {/* Cancellation Policy */}
          <div className="policy-card">
            <div className="policy-header" onClick={() => toggleSection('cancellation')}>
              <div className="policy-title-wrapper">
                <span className="check-icon">✓</span>
                <h3 className="policy-name">Cancellation Policy</h3>
              </div>
              <span className={`policy-arrow ${openSection.cancellation ? 'open' : ''}`}>▼</span>
            </div>
            {openSection.cancellation && (
              <p className="policy-text">
                Guest will be refunded 100% when cancelled 24 Hours before 4:00PM check in date. And If the guest does not update his credit card details within given time frame, you will have an option to cancel this reservation
              </p>
            )}
          </div>

          {/* Child Policy */}
          <div className="policy-card">
            <div className="policy-header" onClick={() => toggleSection('child')}>
              <div className="policy-title-wrapper">
                <span className="check-icon">✓</span>
                <h3 className="policy-name">Child Policy</h3>
              </div>
              <span className={`policy-arrow ${openSection.child ? 'open' : ''}`}>▼</span>
            </div>
            {openSection.child && <p className="policy-text">Under 12 year old stay free with parent</p>}
          </div>

          {/* Pet Policy */}
          <div className="policy-card">
            <div className="policy-header" onClick={() => toggleSection('pet')}>
              <div className="policy-title-wrapper">
                <span className="check-icon">✓</span>
                <h3 className="policy-name">Pet Policy</h3>
              </div>
              <span className={`policy-arrow ${openSection.pet ? 'open' : ''}`}>▼</span>
            </div>
            {openSection.pet && (
              <div className="policy-text pet-policy-content" style={{ fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
                <p><strong>No Pets Allowed at any Time (pet fine $250.00).</strong> Service Animals are defined by Title II and Title III of the ADA.</p>

                <ol style={{ paddingLeft: '20px', marginTop: '10px' }}>
                  <li style={{ marginBottom: '8px' }}>
                    A service animal means any dog that is individually trained to do work or perform tasks for the benefit of an individual with a disability, including a physical, sensory, psychiatric, intellectual, or other mental disability. Tasks performed can include, among other things, pulling a wheelchair, retrieving dropped items, alerting a person to a sound, reminding a person to take medication, or pressing an elevator button.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    Emotional support animals, comfort animals, and therapy dogs are not service animals under Title II and Title III of the ADA. Other species of animals, whether wild or domestic, trained or untrained, are not considered service animals either.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    The work or tasks performed by a service animal must be directly related to the individual's disability. It does not matter if a person has a note from a doctor that states that the person has a disability and needs to have the animal for emotional support. A doctor's letter does not turn an animal into a service animal.
                  </li>
                  <li style={{ marginBottom: '8px' }}>
                    <strong>Examples of service animals:</strong>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px', marginTop: '5px' }}>
                      <li><strong>Guide Dog:</strong> Trained to serve as a travel tool for persons who are blind or have severe visual impairments.</li>
                      <li><strong>Hearing/Signal Dog:</strong> Trained to alert a person with significant hearing loss when a sound occurs (e.g., a knock on the door).</li>
                      <li><strong>Psychiatric Service Dog:</strong> Trained to detect the onset of psychiatric episodes and lessen their effects (e.g., reminding to take medicine, safety checks for PTSD).</li>
                      <li><strong>SSigDOG:</strong> Trained to assist persons with autism by alerting them to distracting repetitive movements.</li>
                      <li><strong>Seizure Response Dog:</strong> Trained to assist during a seizure by standing guard or going for help.</li>
                    </ul>
                  </li>
                  <li>
                    Under Title II and III of the ADA, service animals are limited to dogs. However, reasonable modifications must be made to allow miniature horses if they have been individually trained to perform tasks for individuals with disabilities.
                  </li>
                </ol>
              </div>
            )}
          </div>

          {/* Terms & Conditions */}
          <div className="policy-card">
            <div className="policy-header" onClick={() => toggleSection('terms')}>
              <div className="policy-title-wrapper">
                <span className="check-icon">✓</span>
                <h3 className="policy-name">Terms & Conditions</h3>
              </div>
              <span className={`policy-arrow ${openSection.terms ? 'open' : ''}`}>▼</span>
            </div>
            {openSection.terms && (
              <div className="policy-text terms-content" style={{ fontSize: '14px', lineHeight: '1.6', color: '#444' }}>
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
                  <li><strong>Smoking:</strong> 100% Smoke-Free Facility. Violators are subject to a $250.00 fine under the New Jersey Smoke-Free Air Act.</li>
                  <li><strong>Taxes:</strong> Total Tax is 14.625% (Sales 6.625% + Occupancy 5% + Municipal 3%).</li>
                  <li><strong>No Cooking:</strong> Cooking is strictly prohibited in the rooms.</li>
                  <li><strong>Refunds:</strong> Possible only within the first 15 minutes of check-in. No refunds due to acts of nature.</li>
                </ul>

                <p style={{ fontSize: '12px', fontStyle: 'italic', marginTop: '10px', borderTop: '1px solid #eee', paddingTop: '5px' }}>
                  Property is privately owned. Management is not responsible for accidents, injuries, or loss of money/jewelry.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="location-section">
          <h2 className="about-title">Location</h2>
          <div className="map-container">
            <iframe
              title="Location Map"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3056.4172449176375!2d-74.5518423!3d40.388544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c3e98717812953%3A0xc07469a79930e18!2s4191%20US-1%2C%20Monmouth%20Junction%2C%20NJ%2008852!5e0!3m2!1sen!2sus!4v1640000000000"
            ></iframe>
          </div>
        </div>
      </div>

      {/* AMENITIES MODAL */}
      {isAmenitiesModalOpen && (
        <div className="modal-overlay" onClick={toggleAmenitiesModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="close-modal-btn" onClick={toggleAmenitiesModal}>✕</button>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3 className="modal-section-title">Hotel Amenities</h3>
                <div className="modal-list">
                  {fullAmenitiesList.hotelAmenities.map((item, idx) => (
                    <div key={idx} className="modal-list-item"><span className="check-mark">✓</span> {item}</div>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h3 className="modal-section-title">Room facilities</h3>
                <div className="modal-list">
                  {fullAmenitiesList.roomFacilities.map((item, idx) => (
                    <div key={idx} className="modal-list-item"><span className="check-mark">✓</span> {item}</div>
                  ))}
                </div>
              </div>
              <div className="modal-section">
                <h3 className="modal-section-title">Accessibility Amenities</h3>
                <div className="modal-list">
                  {fullAmenitiesList.accessibility.map((item, idx) => (
                    <div key={idx} className="modal-list-item"><span className="check-mark">✓</span> {item}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Abiline;