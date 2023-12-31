import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";

function Travles() {
  const { url, travles, setTravles } = useContext(newsContext);
  const [loading, setLoading] = useState(false);
  const [imageNews, setImageNews] = useState([]);

  useEffect(() => {
    if (!travles.length) {
      setLoading(true);
      fetch("http://localhost:8000/travles")
        .then((res) => res.json())
        .then((data) => setTravles(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const newsWithImages = travles?.filter((v) => v?.img);
    setImageNews(newsWithImages);
  }, [travles]);

  return (
    <div>
      <Header />
      <Nav />
      <br />
      <h1>Travles</h1>
      {loading ? <h1>Getting News...</h1> : <AllNews imageNews={imageNews} />}
    </div>
  );
}

export default Travles;
