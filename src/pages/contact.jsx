import React, { useState } from "react";
import axios from "axios";
import "./contact.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    hotel: "", // NEW
    subject: "",
    checkIn: "",
    checkOut: "",
    message: ""
  });

  const [status, setStatus] = useState("");
  const [openFAQ, setOpenFAQ] = useState(null);

  // Hotel options
  const hotelOptions = [
    { value: "munday", label: "American Star Inn - Munday" },
    { value: "baird", label: "American Star Inn - Baird" },
    { value: "abilene", label: "American Star Inn - Abilene" },
    { value: "floydada", label: "American Star Inn - Floydada" }
  ];

  // FAQ Data - UPDATED
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
        hotel: formData.hotel, // NEW
        subject: formData.subject,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        message: formData.message
      });

      setStatus("Message Sent Successfully! We'll get back to you soon.");

      // Reset fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        hotel: "", // NEW
        subject: "",
        checkIn: "",
        checkOut: "",
        message: ""
      });

    } catch (error) {
      console.error(error);
      setStatus("Error sending message. Please try again.");
    }
  };

  return (
    <div className="contact-main-wrapper">
      {/* Hero Section */}
      <div className="contact-hero-banner">
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-content">
          <p className="contact-hero-welcome">WELCOME</p>
          <h1 className="contact-hero-title">A modern hotel for the modern world.</h1>
          <button className="contact-hero-btn">GET TO KNOW US</button>
        </div>
      </div>

      {/* Decorative Pattern */}
      <div className="contact-bg-pattern"></div>

      {/* Why Contact Us Section */}
      <section className="contact-intro-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="contact-section-badge">Why Reach Out</span>
            <h2 className="contact-section-title">We're Always Here For You</h2>
            <p className="contact-section-subtitle">
              Whether you have questions, need assistance, or want to make a reservation, our dedicated team is ready to help 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <div className="contact-form-wrapper">
        <div className="contact-container">
          <h1 className="contact-form-title">Reach Out to Us</h1>
          
          <div className="contact-form-box">
            <form onSubmit={handleSubmit} className="contact-form">
              {/* Name Field */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  NAME<span className="contact-required">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  EMAIL<span className="contact-required">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email ID"
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  PHONE NUMBER<span className="contact-required">*</span>
                </label>
                <div className="contact-phone-group">
                  <select className="contact-country-select">
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
                    className="contact-form-input contact-phone-input"
                    required
                  />
                </div>
              </div>

              {/* Hotel Selection - NEW */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  HOTEL<span className="contact-required">*</span>
                </label>
                <select
                  name="hotel"
                  value={formData.hotel}
                  onChange={handleChange}
                  className="contact-form-input"
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
              <div className="contact-form-group">
                <label className="contact-form-label">
                  SUBJECT<span className="contact-required">*</span>
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Check-in Date */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  CHECK-IN<span className="contact-required">*</span>
                </label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Check-out Date */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  CHECK-OUT<span className="contact-required">*</span>
                </label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={handleChange}
                  className="contact-form-input"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="contact-form-group">
                <label className="contact-form-label">
                  MESSAGE<span className="contact-required">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Enter messages or queries"
                  rows="5"
                  className="contact-form-textarea"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="contact-form-group">
                <button type="submit" className="contact-submit-btn">
                  SUBMIT
                </button>
              </div>

              {/* Status Message */}
              {status && (
                <div className={`contact-status-msg ${status.includes('Error') ? 'contact-error' : 'contact-success'}`}>
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="contact-faq-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="contact-section-badge">FAQ</span>
            <h2 className="contact-section-title">Frequently Asked Questions</h2>
            <p className="contact-section-subtitle">
              Quick answers to common questions about our hotel and services
            </p>
          </div>
          
          <div className="contact-faq-container">
            {faqData.map((faq, index) => (
              <div key={index} className="contact-faq-item">
                <div 
                  className="contact-faq-question" 
                  onClick={() => toggleFAQ(index)}
                >
                  <h3>{faq.question}</h3>
                  <span className={`contact-faq-icon ${openFAQ === index ? 'contact-faq-open' : ''}`}>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>
                <div className={`contact-faq-answer ${openFAQ === index ? 'contact-faq-open' : ''}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-section">
        <div className="contact-container">
          <div className="contact-section-header">
            <span className="contact-section-badge">Location</span>
            <h2 className="contact-section-title">Find Us Here</h2>
            <p className="contact-section-subtitle">
              Company Address: American Star Inn 851 E G St, Munday, TX 76371.
            </p>
          </div>
          
          <div className="contact-map-wrapper">
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
          
          <div className="contact-location-details">
            <div className="contact-detail-item">
              <i className="fa-solid fa-location-dot"></i>
              <span><strong>Address:</strong> 851 E G St, Munday, TX 76371</span>
            </div>
            
            <div className="contact-detail-item">
              <i className="fa-solid fa-phone"></i>
              <span><strong>Phone:</strong>+1 325-673-5424</span>
            </div>
            
            <div className="contact-detail-item">
              <i className="fa-solid fa-envelope"></i>
              <span><strong>Email:</strong> americaninn@gmail.com</span>
            </div>
            
            <a 
              href="https://maps.app.goo.gl/UEmtAnmPCw5yX7QJ7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-directions-btn"
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