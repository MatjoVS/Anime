import React, {useEffect} from 'react';
import { Link } from 'react-router-dom'


const TopTenAnime = ()=> {
const [topTenAnimeArr, setTopTenAnimeArr] = useState ([]);


   
  useEffect(() =>{
    axios
        .get( "https://api.jikan.moe/v3/top/anime/1/bypopularity" )
        .then ((info)=>{
            setTopTenAnime
        })
  },[]);      
       
    
        




return(
    <div>
    <header className="home-icon">
        <Link to="/">Home</Link>
        <br />
      <p>Top 10 Anime</p>
      <p>
      </p>
      </header>
    </div>


);
};

export default TopTenAnime;