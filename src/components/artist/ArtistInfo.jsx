import React from 'react';

const ArtistInfo = ({ artist }) => {
  return (
    <div className="col-info">
      <div className="row">
        <button className="btn btn-save long">Follow</button>
        <button className="btn btn-share">Share</button>
      </div>
      <div className="row">
        <label>Origin</label>
        <a className="btn btn-filter-tag">{artist.country.name}</a>
      </div>
      <div className="row">
        <label>Genre</label>
        <span className="btn btn-filter-tag">{artist.genre.name}</span>
      </div>
      <div className="row">
        <label>Subgenres</label>
        {artist.subgenres.map((sub, i) => (
          <span className="btn btn-filter-tag" key={sub + i}>
            {sub.name}
          </span>
        ))}
       
       <div className="tooltip-wrapper">
          <button className="btn btn-add">Add links</button>
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


      </div>
    </div>
  );
};

export default ArtistInfo;
