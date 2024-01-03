import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";

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
      {loading ? <h1>Getting News...</h1> : <AllNews imageNews={imageNews} />}
    </div>
  );
}

export default Health;
