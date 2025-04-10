import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import logoV from '../exercise-01_files/logo-v.svg';
import axios from 'axios';

function Header() {
  const [artists, setArtists] = useState();
  
  useEffect(() => { 
    axios.get('https://mocky.viberate.com/api/v1/navbar').then(res => {
      if (res.data) setArtists(res.data);
    }).catch(err => {
      console.log("error getting navbar info", err);
    })
  }, []) 
  
  return (
    <header className="header">
      <div className="page">
        <a href="#" className="logo">
          <img src={logoV} alt="Viberate" /> Viberate
        </a>
        <nav className="navigation-primary">
          <ul className="menu-sys">
            <li> <button className="btn btn-menu search">Search</button> </li>
            <li> <button className="btn btn-menu more">More</button> </li>
          </ul>
          <ul className="menu">
            { artists && artists.map(artist => 
              <li key={artist.artist_uuid}> 
                <Link to={`/${artist.artist_uuid}`}>{artist.artist_name}</Link> 
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
