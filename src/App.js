import React from "react";
import "./App.css";
import Home from "./Components/Home";
import TopTenAnime from "./Components/TopTenAnime";
import MyFavorite from "./Components/About";
import Upcoming from "./Components/Upcoming";
import NotFound from "./Components/NotFound";
import Favorite from "./Components/Favorite";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";

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
        <Link to="/">Welcome to my Anime Library</Link>
        <br />
      </header>
      <Switch>
        <Route exact path="/" component={(props) => <Home {...props} />} />
        <Route
          exact
          path="/TopTenAnime"
          component={(props) => <TopTenAnime {...props} />}
        />
        <Route
          exact
          path="/MyFavorites"
          component={(props) => <MyFavorite {...props} />}
        />
        <Route
          exact
          path="/Upcoming"
          component={(props) => <Upcoming {...props} />}
        />

        <Route component={(props) => <NotFound {...props} />} />
      </Switch>
      {/* <label for="searchbar">Search:</label> */}
        <input
          type="text"
          name="searchbar"
          placeholder= "Search anime ie: Naruto "
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button onClick={search}>Search</button>
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
          
    </div>
  );
  
}

export default App;
