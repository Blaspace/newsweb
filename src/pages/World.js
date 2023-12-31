import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";

function World() {
  const { url, world, setWorld } = useContext(newsContext);
  const [loading, setLoading] = useState(false);
  const [imageNews, setImageNews] = useState([]);

  useEffect(() => {
    if (!world.length) {
      setLoading(true);
      fetch(`${url}/world`)
        .then((res) => res.json())
        .then((data) => setWorld(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const newsWithImages = world?.filter((v) => v?.img);
    setImageNews(newsWithImages);
  }, [world]);

  return (
    <div>
      <Header />
      <Nav />
      <br />
      <h1>World</h1>
      <br />
      {loading ? <h1>Getting News...</h1> : <AllNews imageNews={imageNews} />}
    </div>
  );
}

export default World;
