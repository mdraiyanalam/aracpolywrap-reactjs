import React, { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import ProductSection from './components/productsection';
import Countdown from './components/countdown';
import ContactUs from './components/contactus';
import Footer from './components/footers';
import factoryImage from './components/images/carousel/1.jpg';

function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const updateBackToTopVisibility = () => {
      setShowBackToTop(window.scrollY > 360);
    };

    updateBackToTopVisibility();
    window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });

    return () => window.removeEventListener('scroll', updateBackToTopVisibility);
  }, []);

  return (
    <div className="app-shell">
      <NavBar />
      <main>
        <section className="story-section" id="About" aria-labelledby="story-heading">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <div className="story-image-wrap">
                  <img
                    className="story-image"
                    src={factoryImage}
                    alt="Arac Polywrap manufacturing facility"
                    loading="lazy"
                  />
                  <div className="story-image-note">
                    <span className="story-image-note-mark" aria-hidden="true">A</span>
                    <span>Arac Polywrap Limited<br />Flexible films. Reliable performance.</span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <p className="section-eyebrow">Your packaging partner</p>
                <h2 id="story-heading">Made to protect. Built around your needs.</h2>
                <p className="story-copy">
                  At Arac Polywrap, we make flexible packaging films for the
                  products people use and the industries that keep business
                  moving. Our range brings together stretch, shrink,
                  agricultural and custom film solutions.
                </p>
                <p className="story-copy">
                  From the right film properties to the right roll format, we
                  work with you to find a solution that fits your application.
                </p>
                <a className="text-link" href="#Product">
                  Discover our products <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <ProductSection />
        <section className="services-section" id="Services" aria-labelledby="services-heading">
          <div className="container">
            <div className="section-heading">
              <p className="section-eyebrow">How we work</p>
              <h2 id="services-heading">A solution shaped around your application</h2>
              <p>
                Practical support from film selection through production, with
                specifications designed around your product and process.
              </p>
            </div>
            <div className="row g-4">
              <div className="col-md-4">
                <article className="service-card">
                  <span className="service-card-number">01</span>
                  <h3>Specifications to fit</h3>
                  <p>
                    Choose the sizes, thicknesses, colors and film properties
                    that suit your packaging needs.
                  </p>
                </article>
              </div>
              <div className="col-md-4">
                <article className="service-card">
                  <span className="service-card-number">02</span>
                  <h3>Flexible manufacturing</h3>
                  <p>
                    Multi-layer co-extrusion and a wide range of film types for
                    diverse applications.
                  </p>
                </article>
              </div>
              <div className="col-md-4">
                <article className="service-card">
                  <span className="service-card-number">03</span>
                  <h3>Performance that matters</h3>
                  <p>
                    Film options designed around the qualities that matter to
                    you, from strength and clarity to barrier performance.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </section>
        <Countdown />
        <ContactUs />
      </main>
      <Footer />
      {showBackToTop && (
        <button
          className="back-to-top"
          type="button"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24">
            <path d="M12 19V5m-7 7 7-7 7 7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
