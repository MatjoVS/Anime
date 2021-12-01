import React from 'react';
import { Link } from 'react-router-dom'

const Home = ()=> {
return(
    <div className="homepage">
        
        <Link className="header-link" to="/Upcoming"> Upcoming Anime</Link>
        <Link className="header-link" to="/TopTenAnime"> Top Ten Anime</Link>
        <Link className="header-link" to="/MyFavorite">My Favorite</Link>

    </div>


);
};

export default Home;
