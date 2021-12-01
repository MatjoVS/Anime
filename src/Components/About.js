import React, { useEffect} from 'react';
import { Link } from 'react-router-dom'
import axios from "axios";

const About = ()=> {

  return (
    <div>
      <main className="home-icon">
        <Link to="/">Home</Link>
        <br />
        <p> Animes and Mangas </p>
      </main>
    </div>
  );
};

export default About;