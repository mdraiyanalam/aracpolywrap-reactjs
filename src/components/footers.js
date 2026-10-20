import React from 'react';

// custom CSS import
import '../styles/footers.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faSkype } from '@fortawesome/free-brands-svg-icons';
import imgLogo from './images/navbar/logo.png';

function Footers() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <a className="footer-brand" href="#Home" aria-label="Arac Polywrap home">
            <img src={imgLogo} alt="Arac Polywrap" />
          </a>
          <p>Flexible packaging films for a changing world.</p>
          <ul className="social-links" aria-label="Social media">
            <li>
              <a
                href="https://www.facebook.com/aracpoly"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Arac Polywrap on Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a
                href="https://join.skype.com/invite/U0B0PM1mxx9k"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Arac Polywrap on Skype"
              >
                <FontAwesomeIcon icon={faSkype} />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Arac Polywrap Limited. All rights reserved.</span>
          <span>
            <a href="https://www.linkedin.com/in/mdraiyanalam/" target="_blank" rel="noopener noreferrer">
              Designed by Md Raiyan Alam
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footers;
