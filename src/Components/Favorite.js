import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Favorite = () => {
  // set the Hook useState tied to react
  const [favorite, setFavorite] = React.useState({});

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/manga/656")
      .then((musashi) => {
        console.log(musashi)
         setFavorite(musashi.data)
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  return (
    <div className="favorite">
        <Link to="/">Home</Link>
        <br />
        <p>Favorite Manga</p>
            <a href={favorite.url}>
              <p>{favorite.title}</p>
              <img src={favorite.image_url} alt="anime-card" />
            </a>
              <p>Synopsis:{favorite.synopsis}</p>
    </div>
  );
};

export default Favorite;
