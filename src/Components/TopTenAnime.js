import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



const TopTenAnime = ()=> {
    // set the Hook useState tied to react
    const [topTenAnimeArr, setTopTenAnimeArr] = React.useState([])

    useEffect(() =>{
    axios
        .get( "https://api.jikan.moe/v3/top/anime/1/bypopularity" )
        .then ((info)=>{
            setTopTenAnimeArr(info.slice(0,10));
            // console.log(info)
        // console shows top 50 
        // slice top 10   
        }) 
        // set catch error
        .catch((err) => {
           console.log('something is wrong', err);
         })
  },[]);      
       console.log ([setTopTenAnimeArr])
    
        

return(
    <div>
    <header className="home-icon">
        <Link to="/">Home</Link>
        <br />
      <p>Top 10 Anime</p>
      <p>{topTenAnimeArr.title}</p>
      </header>
    </div>


);
};

export default TopTenAnime;