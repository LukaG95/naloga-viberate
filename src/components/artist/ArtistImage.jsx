import React from 'react';

const ArtistImage = ({ artist }) => {
  return (
    <div className="visual">
      <figure style={{ backgroundImage: `url(${artist.image})` }}>
        <figcaption>
          <button className="btn btn-claim-music-id">Claim music_id</button>
        </figcaption>
      </figure>
    </div>
  );
};

export default ArtistImage;
