import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';

function SocialMedia() {
  return (
    <div class="social-media">
            <FontAwesomeIcon className='icon' icon={faTwitter} />
            <FontAwesomeIcon className='icon'icon={faInstagram} />
            <FontAwesomeIcon className='icon' icon={faFacebook} />
          </div>
  )
}

export default SocialMedia;