import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hotel: "",
    subject: "",
    message: ""
  });

  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [status, setStatus] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Hotel options
  const hotelOptions = [
    { value: "munday", label: "American Star Inn - Munday" },
    { value: "baird", label: "American Star Inn - Baird" },
    { value: "abilene", label: "American Star Inn - Abilene" },
    { value: "floydada", label: "American Star Inn - Floydada" }
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What amenities are available at American Star Inn?",
      answer: "We offer comfortable rooms, complimentary Wi-Fi, free parking, and all the practical essentials for a pleasant stay at our locations."
    },
    {
      question: "Is American Star Inn suitable for business travelers?",
      answer: "Yes. Many business travelers choose American Star Inn for its convenient locations, reliable Wi-Fi, and comfortable atmosphere for work and rest."
    },
    {
      question: "Do you offer rooms for families and groups?",
      answer: "Yes. We offer room types suitable for families, groups and small teams at all our American Star Inn locations."
    },
    {
      question: "Is parking available?",
      answer: "Yes. Complimentary parking is available on-site at all American Star Inn locations."
    },
    {
      question: "What are your check-in and check-out times?",
      answer: "Standard check-in is at 3:00 PM and check-out is at 11:00 AM. Please contact us if you need special arrangements for early check-in or late check-out."
    }
  ];

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Toggle FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/contact", {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        hotel: formData.hotel,
        subject: formData.subject,
        checkIn: checkInDate ? checkInDate.toISOString().split('T')[0] : '',
        checkOut: checkOutDate ? checkOutDate.toISOString().split('T')[0] : '',
        message: formData.message
      });

      setStatus("Message Sent Successfully! We'll get back to you soon.");

      // Reset fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        hotel: "",
        subject: "",
        message: ""
      });
      setCheckInDate(null);
      setCheckOutDate(null);

    } catch (error) {
      console.error(error);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="asi-main-wrapper">
      {/* Hero Section */}
      <div className="asi-hero-banner">
        <div className="asi-hero-overlay"></div>
        <div className="asi-hero-content">
          <p className="asi-hero-welcome">WELCOME</p>
          <h1 className="asi-hero-title">A modern hotel for the modern world.</h1>
          <button className="asi-hero-btn">GET TO KNOW US</button>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="asi-bg-pattern"></div>

      {/* Why Contact Us Section */}
      <section className="asi-intro-section">
        <div className="asi-container">
          <div className="asi-section-header">
            <span className="asi-section-badge">Why Reach Out</span>
            <h2 className="asi-section-title">We're Always Here For You</h2>
            <p className="asi-section-subtitle">
              Whether you have questions, need assistance, or want to make a reservation, our dedicated team is ready to help 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="asi-form-wrapper">
        <div className="asi-container">
          <h1 className="asi-form-title">Reach Out to Us</h1>
          
          <div className="asi-form-box">
            <form onSubmit={handleSubmit} className="asi-form">
              {/* Name Field */}
              <div className="asi-form-group">
                <label className="asi-form-label">
                  NAME<span className="asi-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="asi-form-input"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="asi-form-group">
                <label className="asi-form-label">
                  EMAIL<span className="asi-required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email ID"
                  className="asi-form-input"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="asi-form-group">
                <label className="asi-form-label">
                  PHONE NUMBER<span className="asi-required">*</span>
                </label>
                <div className="asi-phone-group">
                  <select className="asi-country-select">
                    <option value="+91">🇮🇳 India (+91)</option>
                    <option value="+1">🇺🇸 United States (+1)</option>
                    <option value="+44">🇬🇧 United Kingdom (+44)</option>
                    <option value="+61">🇦🇺 Australia (+61)</option>
                    <option value="+33">🇫🇷 France (+33)</option>
                    <option value="+49">🇩🇪 Germany (+49)</option>
                    <option value="+81">🇯🇵 Japan (+81)</option>
                    <option value="+86">🇨🇳 China (+86)</option>
                    <option value="+7">🇷🇺 Russia (+7)</option>
                    <option value="+55">🇧🇷 Brazil (+55)</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your number"
                    className="asi-form-input asi-phone-input"
                    required
                  />
                </div>
              </div>

              {/* Hotel Selection */}
              <div className="asi-form-group">
                <label className="asi-form-label">
                  HOTEL<span className="asi-required">*</span>
                </label>
                <select
                  name="hotel"
                  value={formData.hotel}
                  onChange={handleChange}
                  className="asi-form-input"
                  required
                >
                  <option value="">Choose a hotel location</option>
                  {hotelOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Subject Field */}
              <div className="asi-form-group">
                <label className="asi-form-label">
                  SUBJECT<span className="asi-required">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="asi-form-input"
                  required
                />
              </div>

              {/* Date Fields - Updated to match other form fields */}
              <div className="asi-date-group">
                {/* Check In */}
                <div className="asi-form-group">
                  <label className="asi-form-label">
                    CHECK IN<span className="asi-required">*</span>
                  </label>
                  <DatePicker
                    selected={checkInDate}
                    onChange={(date) => setCheckInDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="asi-form-input"
                    popperClassName="asi-blue-popper"
                    placeholderText="Select Check In Date"
                    minDate={new Date('2026-02-01')}
                    maxDate={checkOutDate}
                    wrapperClassName="asi-date-picker-wrapper"
                    autoComplete="off"
                    required
                  />
                </div>

                {/* Check Out */}
                <div className="asi-form-group">
                  <label className="asi-form-label">
                    CHECK OUT<span className="asi-required">*</span>
                  </label>
                  <DatePicker
                    selected={checkOutDate}
                    onChange={(date) => setCheckOutDate(date)}
                    dateFormat="yyyy-MM-dd"
                    className="asi-form-input"
                    popperClassName="asi-blue-popper"
                    placeholderText="Select Check Out Date"
                    minDate={checkInDate}
                    maxDate={new Date('2026-12-31')}
                    wrapperClassName="asi-date-picker-wrapper"
                    autoComplete="off"
                    required
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="asi-form-group">
                <label className="asi-form-label">
                  MESSAGE<span className="asi-required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter messages or queries"
                  rows="5"
                  className="asi-form-textarea"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="asi-form-group">
                <button type="submit" className="asi-submit-btn">
                  SUBMIT
                </button>
              </div>

              {/* Status Message */}
              {status && (
                <div className={`asi-status-msg ${status.includes('Error') ? 'asi-error' : 'asi-success'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="asi-faq-section">
        <div className="asi-container">
          <div className="asi-section-header">
            <span className="asi-section-badge">FAQ</span>
            <h2 className="asi-section-title">Frequently Asked Questions</h2>
            <p className="asi-section-subtitle">
              Quick answers to common questions about our hotel and services
            </p>
          </div>
          
          <div className="asi-faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="asi-faq-item">
                <div 
                  className="asi-faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className={`asi-faq-icon ${openFAQ === index ? 'asi-faq-open' : ''}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
                <div className={`asi-faq-answer ${openFAQ === index ? 'asi-faq-open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="asi-map-section">
        <div className="asi-container">
          <div className="asi-section-header">
            <span className="asi-section-badge">Location</span>
            <h2 className="asi-section-title">Find Us Here</h2>
            <p className="asi-section-subtitle">
              Company Address: American Star Inn 851 E G St, Munday, TX 76371.
            </p>
          </div>
          
          <div className="asi-map-wrapper">
            <iframe
              title="map"
              src="https://www.google.com/maps/dir/23.2503889,77.4786162/American+Star+Inn+1633+W+Stamford+St,+Abilene,+TX+79601,+1633+W+Stamford+St,+Abilene,+TX+79601,+United+States/@2.7821785,-97.2256459,3.09z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x86568f2fbde216ab:0x86787cb784ed77a2!2m2!1d-99.7390209!2d32.4897124?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="asi-location-details">
            <div className="asi-detail-item">
              <i className="fa-solid fa-location-dot"></i>
              <span><strong>Address:</strong> 851 E G St, Munday, TX 76371</span>
            </div>
            
            <div className="asi-detail-item">
              <i className="fa-solid fa-phone"></i>
              <span><strong>Phone:</strong>+1 325-673-5424</span>
            </div>
            
            <div className="asi-detail-item">
              <i className="fa-solid fa-envelope"></i>
              <span><strong>Email:</strong> americaninn@gmail.com</span>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/UEmtAnmPCw5yX7QJ7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="asi-directions-btn"
            >
              <i className="fa-solid fa-diamond-turn-right"></i>
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );  
}