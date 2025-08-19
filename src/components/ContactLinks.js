import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:mattclew21@gmail.com"
        >
          mattclew21@gmail.com
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.linkedin.com/in/matthew-clewley-79a915140"
        >
          LinkedIn
        </a>
      </span>
      <span>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://github.com/MattClewley"
        >
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </span>
    </div>
  );
};

export default ContactLinks;
