import React from 'react';
import { NavLink } from 'react-router-dom';
import "./footer.css"

export default function Footer(){
    return(
        <>
         <footer className="footer">
             <div className="footer-pattern"></div>
             <div className="footer-content">
               <div className="footer-section">
                 <div className="footer-logo">
                   <i className="fa-solid fa-crown"></i>
                   <h2 style={{color:"#df5334",fontSize:"30px",fontWeight:"600"}}>AMERICAN STAR INN</h2>
                 </div>
                 <p>
                   Experience a comfortable, luxurious stay with world-class hospitality. Your comfort is our priority.
                 </p>
                 <div className="social-icons">
                   <a href="#" className="social-icon">
                     <i className="fa-brands fa-facebook"></i>
                   </a>
                   <a href="#" className="social-icon">
                     <i className="fa-brands fa-twitter"></i>
                   </a>
                   <a href="#" className="social-icon">
                     <i className="fa-brands fa-instagram"></i>
                   </a>
                   <a href="#" className="social-icon">
                     <i className="fa-brands fa-youtube"></i>
                   </a>
                 </div>
               </div>
            
              <div className="footer-section">
                  <button
                    className="quick-links-toggle d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#quickLinksMenu"
                    aria-expanded="false"
                  >
                    Quick Links
                    <span className="arrow">+</span>
                  </button>

                  <div className="collapse d-lg-block" id="quickLinksMenu">
                    <ul className="footer-links">
                      <li><NavLink to="/">Home</NavLink></li>
                      <li><NavLink to="/rooms">Rooms</NavLink></li>
                      <li><NavLink to="/about">About Us</NavLink></li>
                      <li><NavLink to="/contact">Contact</NavLink></li>
                      <li className="terms-policy-item">
                        <NavLink to="/terms" className="terms-policy-link">
                          Terms & Policy
                        </NavLink>
                        <div className="policy-tooltip">
                          <div className="policy-content">
                            <h4>Hotel Policies</h4>
                            <ul>
                              <li><strong>Check-in Time:</strong> 2:00 PM onwards</li>
                              <li><strong>Check-out Time:</strong> 12:00 PM</li>
                              <li><strong>Refund Policy:</strong> Processed within 7-10 business days</li>
                              <li><strong>Child Policy:</strong> Children under 12 stay free with parents</li>
                              <li><strong>Extra Bed Policy:</strong> Available at ₹1500 per night</li>
                              <li><strong>Smoking Policy:</strong> Strictly non-smoking property</li>
                              <li><strong>Payment Policy:</strong> 50% advance required at booking</li>
                              <li><strong>ID Proof Policy:</strong> Valid government ID required at check-in</li>
                              <li><strong>Damage Policy:</strong> Charges applicable for property damage</li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
              </div>

               <div className="footer-section">
                 <h3>Contact Info</h3>
                 <div className="contact-details">
                   <div className="contact-detail-item">
                     <i className="fa-solid fa-location-dot"></i>
                     <span>851 E G St, Munday, TX 76371.</span>
                   </div>
                   <div className="contact-detail-item">
                     <i className="fa-solid fa-phone"></i>
                     <span>+13602892040 ,+13602892040 </span>
                   </div>
                   <div className="contact-detail-item">
                     <i className="fa-solid fa-envelope"></i>
                     <span>americaninn@gmail.com</span>
                   </div>
                 </div>
               </div>
             </div>
     
             <div className="footer-bottom">
                <p>© 2025 American Star Inn. All Rights Reserved. | Designed with <i className="fa-solid fa-heart"></i> for Excellence</p>
             </div>
           </footer>
        </>
    )
}