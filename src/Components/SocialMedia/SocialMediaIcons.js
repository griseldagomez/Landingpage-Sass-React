import React from 'react';
import CardPhoto from '../Sections/CardPhoto';
import Twitter from '../../images/twitter-logo.png';
import Instagram from '../../images/instagram-logo.png';
import Facebook from '../../images/facebook-logo.png';


function SocialMediaIcons() {
  return (
    <div class="social-media">
              <CardPhoto photo={Twitter}/>
              <CardPhoto photo={Instagram}/>
              <CardPhoto photo={Facebook}/>
          </div>
  )
}

export default SocialMediaIcons