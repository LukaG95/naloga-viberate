import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import StatGraph from './StatGraph';
import ArtistHeader from './ArtistHeader';
import ArtistInfo from './ArtistInfo';
import ArtistSocialLinks from './ArtistSocialLinks';
import ArtistImage from './ArtistImage';

const ArtistDetailPage = () => {
  const { artist_uuid } = useParams();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    if (artist_uuid) {
      axios.get(`https://mocky.viberate.com/api/v1/${artist_uuid}`)
        .then(res => {
          if (res.data) setArtist(res.data.data);
        })
        .catch(err => {
          console.error("Error fetching artist details:", err);
        });
    }
  }, [artist_uuid]);

  if (!artist) return <div>Loading...</div>;

  return (
    <main className="main">
      <section className="section section-artist-detail trending claimed">
        <div className="page">
          <ArtistImage artist={artist} />

          <div className="col-wrapper">
            <div className="col info">
              <div className="col-content">
                <ArtistHeader artist={artist} />
                <ArtistInfo artist={artist} />
                <div className="footer-detail">
                  <ArtistSocialLinks socialLinks={artist.social_links} />
                  <div className="tooltip-wrapper">
                    <button className="btn btn-add">Add links</button>
                    <div className="tooltip">
                      <h3>Got more info?</h3>
                      <p>Add Place's links so everyone can see their social media highlights.</p>
                      <p> <button className="btn btn-shadow">Add links</button> </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col stats">
              <div className="col-content">
                <StatGraph artist={artist} />
              </div>
            </div>
          </div>

          <button className="btn btn-scroll-down">Scroll down</button>
        </div>
      </section>
    </main>
  );
};

export default ArtistDetailPage;
