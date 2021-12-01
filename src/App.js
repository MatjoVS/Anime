import React from "react";
import "./App.css";
import Home from "./Components/Home";
import TopTenAnime from "./Components/TopTenAnime";
import About from "./Components/About";
import Upcoming from "./Components/Upcoming";
import NotFound from "./Components/NotFound";
import Favorite from "./Components/Favorite";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";
import Goku from "./Assets/goku-magic-cloud.jpeg"
import Ichigo from "./Assets/ichigo.jpeg"


function App() {
  const [searchText, setSearchText] = React.useState("");
  const [animeArr, setAnimeArr] = React.useState ([]);


  const search = () => {
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${searchText}`)
      .then((result) => {
        console.log(result);
        setAnimeArr(result.data.results)
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  };
  
  return (
    <div className="App">
      <header className="home-icon">
        <img className="goku"  src={Goku} alt="goku" />
        <Link className="title"
        to="/"><h1> Anime Library</h1></Link>
        <br />
      </header>
      <input 
          className="search-bar"
          type="text"
          name="searchbar"
          placeholder= "Search anime ie: Naruto "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button className="search-button" onClick={search}>Search</button>
        {/* <button>Reset</button> */}

        <div className="result">
        {animeArr.map( (anime) => {
          return (
          <a href={anime.url}> 
          <img src={anime.image_url} alt="animes" />
          <p>{anime.title}</p>
          </a> 
          )})
        }
        </div>  
      <Switch className="page-links">
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          exact
          path="/TopTenAnime"
          component={(props) => <TopTenAnime {...props} />}
        />
        <Route
          exact
          path="/MyFavorite"
          component={(props) => <Favorite {...props} />}
        />
        <Route
          exact
          path="/Upcoming"
          component={(props) => <Upcoming {...props} />}
        />

        <Route component={(props) => <NotFound {...props} />} />
      </Switch>
          <footer>
          <img src={Ichigo} alt="ichigo"/>
        </footer>
    </div>
  );
  
}

export default App;
