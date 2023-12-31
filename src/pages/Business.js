import React, { useContext, useEffect, useState } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";

function Business() {
  const { business, setBusiness, url } = useContext(newsContext);
  const [loading, setLoading] = useState(false);
  const [imageNews, setImageNews] = useState([]);

  useEffect(() => {
    if (!business.length) {
      setLoading(true);
      fetch(`${url}/business`)
        .then((res) => res.json())
        .then((data) => setBusiness(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, [business]);

  useEffect(() => {
    const newsWithImages = business?.filter((v) => v?.img);
    setImageNews(newsWithImages);
  }, [business]);

  return (
    <div>
      <Header />
      <Nav />
      {loading ? <h1>Getting News...</h1> : <AllNews imageNews={imageNews} />}
    </div>
  );
}

export default Business;
