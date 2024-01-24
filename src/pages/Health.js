import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";
import { LuLoader2 } from "react-icons/lu";

function Health() {
  const { health, setHealth, url } = useContext(newsContext);
  const [loading, setLoading] = useState(false);
  const [imageNews, setImageNews] = useState([]);

  useEffect(() => {
    if (!health.length) {
      setLoading(true);
      fetch(`${url}/health`)
        .then((res) => res.json())
        .then((data) => setHealth(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const newsWithImages = health?.filter((v) => v?.img);
    setImageNews(newsWithImages);
  }, [health]);

  return (
    <div>
      <Header />
      <Nav head={"Health"} />
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

export default Health;
