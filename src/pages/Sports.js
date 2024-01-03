import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";

function Sports() {
  const { url, sports, setSports } = useContext(newsContext);
  const [loading, setLoading] = useState(false);
  const [imageNews, setImageNews] = useState([]);

  useEffect(() => {
    if (!sports.length) {
      setLoading(true);
      fetch(`${url}/sport`)
        .then((res) => res.json())
        .then((data) => setSports(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const newsWithImages = sports?.filter((v) => v?.img);
    setImageNews(newsWithImages);
  }, [sports]);

  return (
    <div>
      <Header />
      <Nav head={"Sports"} />
      {loading ? <h1>Getting News...</h1> : <AllNews imageNews={imageNews} />}
    </div>
  );
}

export default Sports;
