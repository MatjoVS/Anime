import React from 'react';
import { Link } from 'react-router-dom'

const Home = ()=> {
return(
    <div>
        <header>
        Anime Library
        </header>
        
        <div className="homepage">
        <Link to="/">Home</Link>
        <br/> 
        </div>

        <div className="AnimeList">
        <Link to="/MyFavorites">List of Anime A-Z</Link>
        <br/>   
        </div>

        <div className="TopTenAnime">
        <Link to="/TopTenAnime"> Top 10</Link>
        <br/> 
        </div>
            
        <div className="MyFavorites">
        <Link to="/MyFavorites">My Favorites</Link>
        <br/>   
        </div>


    </div>


);
};

export default Home;
