import React from 'react';
import './SocMedia.css'; // Import the CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

export function SocMedia () {
  return (
    <div className="social-media-bubbles">
      <a href="https://www.facebook.com/" target="_blank" className="bubble facebook">
        <FontAwesomeIcon icon={faFacebookF} />
      </a>
      <a href="https://www.twitter.com/" target="_blank" className="bubble twitter">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.instagram.com/thestewart.collection/" target="_blank" className="bubble instagram">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}
