import React from 'react';

function SocialList({ socials }){
  return (
    <ul className="social-list">
      {socials.map(social => 
        <li><a href={social.link} className={`btn social-icon ${social.channel}`}>{social.channel}</a></li>
      )}
    </ul>
  );
};

export default SocialList;
