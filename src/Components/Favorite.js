import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Favorite = () => {
  // set the Hook useState tied to react
  const [favorite, setFavorite] = React.useState('');

  useEffect(() => {
    axios
      .get("https://api.jikan.moe/v3/manga/656")
      .then((info3) => {
        console.log(info3)
        // setFavorite(info3.data.manga.id)
      })
      .catch((err) => {
        console.log("something is wrong", err);
      });
  }, []);

  return (
    <div>
      {/* <main className="home-icon"> */}
        <Link to="/">Home</Link>
        <br />
        <p>Favorite Manga</p>
        {favorite.map((manga) => {
          return (
            <div>
            <a href={manga.url}>
              <p>{manga.title}</p>
              <img src={manga.image_url} alt="anime-card" />
              </a>
            </div>
          );
        })}
      {/* </main> */}
    </div>
  );
};

export default Favorite;
