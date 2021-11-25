import React from 'react';
import { Link } from 'react-router-dom'


const MyFavorites = ()=> {
return(
   
    <div>
      <header className="home-icon">
        <Link to="/">Home</Link>
        <br />
        <p>My Favorites</p>
      </header>
    </div>


);
};

export default MyFavorites;