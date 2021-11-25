import React from 'react';
import { Link } from 'react-router-dom'


const NotFound = ()=> {
return(
    <div>
    <header className="home-icon">
        <Link to="/">Home</Link>
        <br />
      <p>Not found</p>
      </header>
    </div>


);
};

export default NotFound;