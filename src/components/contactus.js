import React from 'react';
import '../styles/contactus.css';

function ContactUs() {
  return (
    <section className="contact-section" id="ContactUs" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow">We’re here to help</p>
          <h2 id="contact-heading">Let’s talk packaging</h2>
          <p>Visit one of our offices or find us on the map.</p>
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-5">
            <div className="contact-details">
              <div className="contact-office">
                <span className="contact-office-label">Head Office</span>
                <p>House 50 (13th floor), Road 11, Block C, Banani, Dhaka-1213.</p>
              </div>
              <div className="contact-office">
                <span className="contact-office-label">Corporate Office</span>
                <p>House 16 (1st floor), Road 127, Gulshan-1, Dhaka-1212.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-map">
              <iframe
                title="Map to Arac Polywrap Limited"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3636.699060158806!2d90.4182548748085!3d24.287239667956147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37567057adf39b2d%3A0xa96eaae4c2af96b5!2sARAC%20Polywrap%20Limited!5e0!3m2!1sen!2sbd!4v1708185321676!5m2!1sen!2sbd"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
