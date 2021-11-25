import React from 'react';
import './App.css';
import Home from './Components/Home';
import TopTenAnime from './Components/TopTenAnime';
import MyFavorites from './Components/MyFavorites';
import AnimeList from './Components/AnimeList';
import NotFound from './Components/NotFound';
import {Switch, Link, Route} from 'react-router-dom';

function App() {
  
  return (
      <div className="App">
       <Switch>
         <Route exact path='/' component={(props) => <Home {...props}/>}/>
         <Route
          exact
          path="/TopTenAnime"
          component={(props) => <TopTenAnime {...props} />}
        />
         <Route
          exact
          path="/MyFavorites"
          component={(props) => <MyFavorites {...props} />}
        />
         <Route
          exact
          path="/AnimeList"
          component={(props) => <AnimeList {...props} />}
        />
         <Route  component={(props) => <NotFound {...props}/>}/>
       </Switch>
      </div>
  );
}

export default App;
