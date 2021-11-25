import React from 'react';
import { Link } from 'react-router-dom'


const AnimeList = ()=> {
return(
    <div>
    <header className="home-icon">
        <Link to="/">Home</Link>
        <br />
      <p>List of Anime A-Z</p>
      </header>
    </div>


);
};

export default AnimeList;