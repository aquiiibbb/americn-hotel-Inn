import React from "react";
import "./amenities.css";
import { NavLink } from 'react-router-dom';
import image132 from "../assest/image/sala.png";
import image21 from "../assest/image/upar.png";
import image22 from "../assest/image/bich.png";
export default function AmenitiesPremium() {


  return (
    <div className="amenities-page">
      {/* Hero Image */}
      <div className="hero-image-container">
        <img src={image132} alt="Hotel" className="hero-image" />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">About Section</h1>
            <p className="hero-subtitle">Comfortable stay with essential facilities</p>
          </div>
        </div>
      </div>

      {/* Amenities Section */}
   


{/* end container section */}

      {/* About Section */}
      <div className="container-clone">
        <div className="about-grid-clone">
          <div className="about-image-left-clone">
            <img src={image21} alt="Luxury Hotel Lobby" />
          </div>
     
          <div className="about-content-clone">
            <span className="section-badge-clone">About Us:</span>
            <h2 style={{color:"blue"}} className="section-title-clone">American Star Inn</h2>
          <p className="about-text-clone">
  Hotel American Star Inn & Resort is where comfort, value, and the beauty of Ocean Shores come together. Located at 773 Ocean Shores Blvd NW, our property offers guests easy access to the beach—just a short two-minute walk away—while providing a peaceful place to relax after a day of exploring.
  <br /><br />
  With 62 rooms ranging from standard accommodations to ocean-view rooms, suites, and spa-jacuzzi options, we proudly welcome all types of travelers. Every guest room is equipped with essential amenities such as AC/heater, TV, mini-fridge, microwave, and a coffee maker to ensure a convenient and enjoyable stay.
  <br /><br />
  Our amenities are designed for both comfort and recreation, including free parking, complimentary Wi-Fi, daily breakfast, guest laundry facilities, a heated pool with hot tub, and an on-site mini golf area. We are also a pet-friendly property, so guests can travel comfortably with their furry companions.
</p>

          </div>

          <div className="about-image-right-clone">
            <img src={image22} alt="Hotel Room View" />
          </div>
        </div>
      </div>

      {/* Promises Section */}
      <div className="featured-wrapper">
        <div className="line left"></div>
        <div className="text-block">
          <p className="caption">Discover the Difference</p>
          <h2 className="title">AMERICAN STAR INN PROMISES</h2>
        </div>
        <div className="line right"></div>
      </div>

      {/* Cards Section */}
      <div className="container">
        <div className="clearfix widget-wrapper wt1imgtop-1tbbot imageDescriptionbottom1 wt-image-text-slider fullWidthWidget summit-collage-widget-mobile cards-container-4 cards-wrapper" id="iyssai">
          <div className="card-layout collage-grid">
            <div className="collage-box big">
              <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_751,w_4500,h_3000,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/3._24x7_support_&amp;_service_f222525a" alt="24/7 Support" />
              <div className="overlay">24/7 SUPPORT & FRIENDLY SERVICE</div>
            </div>

            <div className="collage-box big">
              <img src="https://assets.simplotel.com/simplotel/image/upload/x_118,y_0,w_4095,h_2730,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/crsip_linen_7f7d2d4a" alt="Crisp Linens" />
              <div className="overlay">COZY COMFORT WITH CRISP LINENS</div>
            </div>

            <div className="collage-box small">
              <img src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_0,w_5000,h_3333,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/DSC02324_384edf2d" alt="Local Cuisine" />
              <div className="overlay">LOCAL EXPERIENCE & CUISINE</div>
            </div>

            <div className="collage-box small">
              <img src="https://assets.simplotel.com/simplotel/image/upload/x_0,y_1496,w_4500,h_3001,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/6._Powerful_Shower_64757259" alt="Powerful Shower" />
              <div className="overlay">POWERFUL REFRESHING SHOWERS</div>
            </div>

            <div className="collage-box small">
              <img src="https://assets.simplotel.com/simplotel/image/upload/w_5000,h_3333/x_0,y_0,w_5000,h_3333,r_0,c_crop/q_60,w_1400,dpr_1,f_auto,fl_progressive,c_limit/summit-hotels-resorts/DSC09120_0efa5108" alt="Hotel Lobby" />
              <div className="overlay">ELEGANT LOBBY EXPERIENCE</div>
            </div>
          </div>
        </div>
      </div>

    
   

      {/* Reviews Section */}
   
{/* Testimonials Section - 5 Cards Inline */}
<section className="testimonials-section">
  <div className="testimonials-container">
    <div className="testimonials-header">
      <h2 className="testimonials-title">What Our Guests Say</h2>
      <p className="testimonials-subtitle">Real experiences from American Star Inn guests</p>
    </div>

    <div className="testimonials-grid">
      {[
        {
          name: "Mr. James Mitchell",
          location: "Ocean Shores, WA",
          stars: 5,
          text: "Wonderful beachfront location just steps from the sand. The rooms were immaculate and the staff was incredibly helpful. The complimentary breakfast was a nice touch!",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Ms. Sarah Anderson",
          location: "Seattle, WA",
          stars: 5,
          text: "American Star Inn exceeded all expectations. The ocean-view room was stunning, the heated pool was perfect, and the mini golf was a fun bonus. Definitely coming back!",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Mr. Robert Chen",
          location: "Portland, OR",
          stars: 5,
          text: "Great value for money. The rooms are spacious, Wi-Fi is reliable, and the location can't be beat. We brought our dog and they were very accommodating. Highly recommended!",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
        },
        {
          name: "Ms. Emily Rodriguez",
          location: "Tacoma, WA",
          stars: 5,
          text: "The spa-jacuzzi room was absolutely luxurious. Staff went above and beyond to make our anniversary special. The beach access is perfect for morning walks. Will definitely return!",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
        },
      
      ].map((review, index) => (
        <div key={index} className="testimonial-card">
          <div className="testimonial-top">
            <img src={review.image} alt={review.name} className="testimonial-avatar" />
            <div className="testimonial-info">
              <h4 className="testimonial-name">{review.name}</h4>
              <span className="testimonial-location">{review.location}</span>
            </div>
          </div>

          <div className="testimonial-stars">
            {[...Array(5)].map((_, i) => (
              <i key={i} className={i < review.stars ? "fa-solid fa-star" : "fa-regular fa-star"}></i>
            ))}
          </div>

          <p className="testimonial-text">{review.text}</p>
        </div>
      ))}
    </div>
  </div>
</section>
    </div>
  );
}















