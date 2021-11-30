import React from "react";
import "./App.css";
import Home from "./Components/Home";
import TopTenAnime from "./Components/TopTenAnime";
import MyFavorite from "./Components/About";
import Upcoming from "./Components/Upcoming";
import NotFound from "./Components/NotFound";
import { Switch, Link, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [searchText, setSearchText] = React.useState("");

  const search = () => {
    axios
      .get(`https://api.jikan.moe/v3/search/anime?q=${searchText}`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  };

  return (
    <div className="App">
      <header className="home-icon">
        <Link to="/">Home</Link>
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
        <button>Reset</button>
        {/* <div className="result">
         {props.searchText.map(result => (
            <div className="anime-images"  />
            {result.title}
            </div>
          ))}
         </div>  */}
    </div>
  );
}

export default App;
