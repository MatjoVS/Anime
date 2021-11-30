import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TopTenAnime = () => {
  // set the Hook useState tied to react
  const [topTenAnimeArr, setTopTenAnimeArr] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/top/anime/1/bypopularity")
      .then((info) => {
        // console.log(info);
        // console shows top 50
        setTopTenAnimeArr(info.data.top.slice(0, 10));
        // info.slice(0,10);
        // slice top 10
        // console.log(info.data.top.slice(0, 10));
      })
      // set catch error
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  return (
    <div>
      <main className="home-icon">
        <Link to="/">Home</Link>
        <br />
        <p>Top 10 Anime</p>
        {topTenAnimeArr.map((anime) => {
          return (
            <div>
            <a href={anime.url}>
              <p>{anime.rank}  {anime.title}</p>
              <img src={anime.image_url} alt="anime-card" />
              </a>
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default TopTenAnime;
