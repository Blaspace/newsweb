import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";

function Style() {
  const { url, style, setStyle } = useContext(newsContext);
  const [loading, setLoading] = useState(false);
  const [imageNews, setImageNews] = useState([]);

  useEffect(() => {
    if (!style.length) {
      setLoading(true);
      fetch(`${url}/style`)
        .then((res) => res.json())
        .then((data) => setStyle(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const newsWithImages = style?.filter((v) => v?.img);
    setImageNews(newsWithImages);
  }, [style]);

  return (
    <div>
      <Header />
      <Nav />
      {loading ? <h1>Getting News...</h1> : <AllNews imageNews={imageNews} />}
    </div>
  );
}

export default Style;
