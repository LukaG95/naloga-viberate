import React from 'react';

const ArtistSocialLinks = ({ socialLinks }) => {
  return (
    <ul className="social-list">
      {socialLinks.map((social, i) => (
        <li key={social + i}>
          <a href={social.link} className={`btn social-icon ${social.channel}`}>{social.channel}</a>
        </li>
      ))}
    </ul>
  );
};

export default ArtistSocialLinks;
