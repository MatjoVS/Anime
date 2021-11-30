import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Upcoming = () => {
  const [upcomingAnimeArr, setupcomingAnimeArr] = React.useState([]);

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/season/later")
      .then((info2) => {
        
        console.log(info2);
        
          setupcomingAnimeArr(info2.data.anime);
      })
      // set catch error
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  return (
    <div>
      {/* <header className="home-icon"> */}
        <br />
        <p>Upcoming Anime</p>
        {upcomingAnimeArr.map((anime) => {
          return (
            <a href={anime.url} alt="anime">
              <img src={anime.image_url} alt="anime-card"  />
              <p>{anime.title}</p>
            </a>
          );
        })}
        ;
      {/* </header> */}
    </div>
  );
};

export default Upcoming;
