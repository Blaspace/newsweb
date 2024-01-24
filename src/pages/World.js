import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";
import { LuLoader2 } from "react-icons/lu";

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
      <Nav head={"World"} />
      <br />
      <br />
      {loading ? (
        <span className="load">
          <LuLoader2 size={50} className="loader" />
        </span>
      ) : (
        <AllNews imageNews={imageNews} />
      )}
    </div>
  );
}

export default World;
