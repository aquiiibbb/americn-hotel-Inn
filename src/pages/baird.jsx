import React, { useState, useEffect } from 'react';
import './baird.css';

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
const Baird = () => {
  
  // --- STATE LOGIC ---
  const [openSection, setOpenSection] = useState({
    cancellation: false,
    terms: false
  });

  const [showMoreAbout, setShowMoreAbout] = useState(false);
  
  // NEW: State for Amenities Modal
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(prevState => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  const toggleAmenitiesModal = () => {
    setIsAmenitiesModalOpen(!isAmenitiesModalOpen);
    // Jab modal khule to piche ka scroll band kar do
    if (!isAmenitiesModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };
  // -------------------

  const hotelInfo = {
    name: 'American Star Inn - Baird',
    phone: '+13258648552',
    email: 'abvibaird@gmail.com',
    address: '500 I-20, Baird, TX 79504, USA Callahan County, Texas, United States - 79504',
    amenities: [
      { icon: '📶', text: 'Free: Wi-fi' },
      { icon: '🚗', text: 'Parking: On Premise' },
      { icon: '👥', text: '24-hour: Front desk service' }
    ],
    about: ` Baird Hotel, the right hotel in Bordentown NJ when you need an affordable stop that’s a pleasant place to stay on business or pleasure. We’re near several institutions of higher learning, including Princeton University, Rider University, The College of New Jersey – and so much more.

When you make us your hotel in Bordentown, New Jersey, additional attractions nearby include Roebling Museum, Waterfront Park, CURE Insurance Arena, Trenton War Memorial Theater, Old Barracks Museum, Six Flags Great Adventure, New Egypt Speedway Fort Dix and many more things too numerous to mention.

We may be a bargain hotel, but we feature excellent amenities, including a free wifi, In-room features like refrigerators, microwaves. It all adds up to exceptional value.

The smart decision is to book with us right away – so you don’t have to worry about us being fully booked on your dates. At MHO Hotel in Bordentown NJ, we’re a budget-friendly independent hotel with a competent, caring staff, plenty of amenities and rates well below what you might expect. Why not come stay with us? You’re sure to enjoy our well-liked, well-located property.

Business Travel
We love to serve our valued business travelers at this motel in Bordentown NJ. We’re pleased to be the most affordable business hotel you’ll find in this area and a place that travelers of all kinds opt for over and over again. Select us when you want a Bordentown hotel close to I-195 or hotels near downtown Trenton NJ because our property is designed with the unique needs of business travelers in mind. When you stay with us while on business, you’ll benefit from an in-room microwave, fridge and so much more. Turn to this property with confidence when you’re looking for a hotel that will more than meet your expectations.

Family Travel
Everyone in our hotel family looks forward to the opportunity to serve your family at this Bordentown hotel near Roebling Museum. Whether you’re looking for a well-located Bordentown hotel close to Waterfront Park or perhaps hotels near Six Flags Great Adventure NJ that travelers can rely on, we’re here for you. When family travel brings you to New Jersey for any reason, it makes sense to stay in comfort and style where there are plenty of amenities sure to satisfy everyone. That’s why it makes real sense to spend the night at this respected selection of hotels near Trenton NJ. Why not reserve with us now to ensure that a room is available when you arrive?

Best Hotel Deal
On group bookings or individual nights, expect the best hotel deal from this Bordentown, New Jersey motel – a respected place that smart travelers to the area pick again and again. We feel a real obligation to provide quality at a fair price. Plus, we take genuine pride in offering amenities that enhance comfort as well, including free wifi and more. Whether you need a Bordentown hotel near Rider University, for example or are seeking, perhaps, hotels near CURE Insurance Arena NJ, we’re right for you. Reserve now with us and you’ll be glad you did. We make the extra effort to make everyone feel at home every day.

Safe And Peaceful Stay
Want a smart option in Bordentown NJ hotels that you can depend on for convenience as well as quality of accommodations? Need a place that you and your family or coworkers are sure to like? Want the most affordable place in town for one night or more than one? Safety and peace of mind always come first here for our guests at this place to stay in Bordentown and near Trenton. That’s among the reasons our property is one of the most sensible discount hotels you’ll find in our state. While you may find good rates at other motels in the region, can you be sure they share our commitments to you?`
  };

  // --- AMENITIES DATA (For Modal) ---
  const fullAmenitiesList = {
    hotelAmenities: [
      "Accessible rooms", "Free expanded cable", "Copy Machine*", 
      "Fax Machine", "Voice Mail", "Vending Machines", 
      "Interior Corridors", "Government Travelers: FEMA Approved",
      "Mass Transit", "Racing", "Gym", "Restaurant Nearby"
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
    "Accessible rooms",
    "Free expanded cable",
    "Copy Machine*",
    "Fax Machine",
    "Voice Mail",
    "Vending Machines",
    "Interior Corridors"
  ];

  const rooms = [
    {
      title: "Non Smoking Two Queen Bed",
      subtitle: "Non Smoking Two Queen Bed",
      // Note: Image mein alag photo hai, lekin aapki purani images array yahan barkarar hai
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80"
      ],
      description: "Enjoy a comfortable stay in this smoke-free room featuring two cozy queen-size beds. Perfect for families or groups.",
      availability: "Last 6 rooms available", // Image ke hisaab se '6'
      plans: [
        {
          name: "ship Rates @ $68.85",
          desc: "15% off",
          price: 68.85,
          isSpecial: true,
          needsLogin: true // Image mein 'Login to book' button hai
        },
        {
          name: "Standard Plan @ $75.33",
          originalPrice: "$81.00", // Image ke hisaab se strikethrough price
          desc: "Standard Plan",
          price: 75.33,
          isSpecial: false
        }
      ]
    },
    {
      title: "Non Smoking Two Queen Bed",
      subtitle: "Non Smoking Two Queen Bed",
      images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=800&q=80"],
      description: "Enjoy a comfortable stay in this smoke-free room featuring two cozy queen-size beds. Perfect for families or groups.",
      availability: "Last 6 rooms available",
      icons: ["🛜", "❄️", "📺", "📱"],
      // Naya: Room specific amenities from image_6dba4f.png
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
          needsLogin: true // 'Login to book' button ke liye
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
      icons: ["🛜", "❄️", "♨️", "🚿"],
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
      images: ["https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1590490359683-658d3d23f972?auto=format&fit=crop&w=800&q=80", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80"],
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

        {/* --- Top Amenities (Legacy/Original) --- */}
        <div className="amenities">
          {hotelInfo.amenities.map((amenity, index) => (
            <div key={index} className="amenity-card"><span className="amenity-icon">{amenity.icon}</span><span className="amenity-text">{amenity.text}</span></div>
          ))}
        </div>

        <hr className="divider" />

        {/* --- ABOUT SECTION --- */}
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
          <button
            onClick={() => setShowMoreAbout(!showMoreAbout)}
            style={{ marginTop: '5px', background: 'transparent', border: 'none', color: '#000', fontWeight: '700', cursor: 'pointer', fontSize: '15px', padding: 0, textDecoration: 'underline' }}>
            {showMoreAbout ? 'Show Less' : 'Show More'}
          </button>
        </div>

        <hr className="divider" />

        {/* --- NEW AMENITIES SECTION (Photo Jaisa) --- */}
        <div className="amenities-section">
          <h2 className="about-title">Amenities</h2>

          {/* Top Row Cards */}
          <div className="amenities-top-row">
            {topAmenities.map((item, index) => (
              <div key={index} className="amenity-pill">
                <span className="amenity-icon">{item.icon}</span>
                <span className="amenity-text">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Detailed List Grid */}
          <div className="amenities-list-grid">
            {detailedAmenities.map((item, index) => (
              <div key={index} className="amenity-list-item">
                <span className="bullet-point">▪</span> {item}
              </div>
            ))}
          </div>

          {/* View All Button with Click Event */}
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
              <span className={`policy-arrow ${openSection.terms ? 'open' : ''}`}>▼</span>
            </div>
            {openSection.terms && (
              <p className="policy-text">
                The hotel has a 24-hour cancellation policy. All rooms must be canceled 24 hours prior to the arrival date. Reservations that do not have a valid credit card and ID upon check-in will be automatically canceled.
              </p>
            )}
          </div>
        </div>

        {/* Location Section */}
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

      {/* --- AMENITIES MODAL (POPUP) --- */}
      {isAmenitiesModalOpen && (
        <div className="modal-overlay" onClick={toggleAmenitiesModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <button className="close-modal-btn" onClick={toggleAmenitiesModal}>✕</button>
            </div>
            
            <div className="modal-body">
              {/* Hotel Amenities Section */}
              <div className="modal-section">
                <h3 className="modal-section-title">Hotel Amenities</h3>
                <div className="modal-list">
                  {fullAmenitiesList.hotelAmenities.map((item, idx) => (
                    <div key={idx} className="modal-list-item">
                      <span className="check-mark">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Room Facilities Section */}
              <div className="modal-section">
                <h3 className="modal-section-title">Room facilities</h3>
                <div className="modal-list">
                  {fullAmenitiesList.roomFacilities.map((item, idx) => (
                    <div key={idx} className="modal-list-item">
                      <span className="check-mark">✓</span> {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Accessibility Section */}
              <div className="modal-section">
                <h3 className="modal-section-title">Accessibility Amenities</h3>
                <div className="modal-list">
                  {fullAmenitiesList.accessibility.map((item, idx) => (
                    <div key={idx} className="modal-list-item">
                      <span className="check-mark">✓</span> {item}
                    </div>
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

export { Baird };
export default Baird;