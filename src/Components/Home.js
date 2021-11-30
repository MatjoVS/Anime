import React from 'react';
import { Link } from 'react-router-dom'

const Home = ()=> {
return(
    <div>
        {/* <header>
        Anime Library
        </header> */}
        
        {/* <div className="homepage">
        <Link to="/">Home</Link>
        <br/> 
        </div> */}

        <div className="searchbar">
        <Link to="/"> Search for an Anime</Link>
        <br/>   
        </div>

        <div className="Upcoming">
        <Link to="/Upcoming"> Upcoming Anime</Link>
        <br/>   
        </div>

        <div className="TopTenAnime">
        <Link to="/TopTenAnime"> Top 10</Link>
        <br/> 
        </div>
            
        <div className="Favorite">
        <Link to="/Favorite">My Favorite</Link>
        <br/>   
        </div>


    </div>


);
};

export default Home;
