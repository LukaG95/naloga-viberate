import React from 'react';

const ArtistHeader = ({ artist }) => {
  return (
    <div className="title-wrapper">
      <button className="btn btn-solid border btn-booking-request">Booking Request</button>
      <h1 className="title">
        {artist.name}
        <div className="tooltip-wrapper">
          <span className="profile-claimed">Profile claimed</span>
          <div className="tooltip">
            <h3>Vote for subgenres</h3>
            <p>Don’t agree with the subgenres? Add the ones you think are missing or vote for existing to get yours on top!</p>
            <div className="stats-sheet">
              {
                artist.subgenres.map((sub, i) => { 
                  const randomNumber = Math.floor(Math.random() * 100) + 1;
                  return (
                  <div className="row" key={sub+i}>
                    <h5>{sub.name}</h5>
                    <div className="graph-line">
                      <span className="line" style={{width: `${randomNumber}%`}}>{randomNumber}%</span>
                    </div>
                  </div>
                  )
                })
              }
            </div>
            <p>
              <button className="btn btn-shadow">Vote now</button>
            </p>
          </div>
        </div>
        <span className="trending-icon">Trending</span>
      </h1>
    </div>
  );
};

export default ArtistHeader;
