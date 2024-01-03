import React, { useContext, useEffect, useState } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";

function Home() {
  const { url, home, setHome } = useContext(newsContext);
  const [loading, setLoading] = useState(false);
  const [imageNews, setImageNews] = useState([]);

  useEffect(() => {
    if (!home?.length) {
      setLoading(true);
      fetch(`${url}/home`)
        .then((res) => res.json())
        .then((data) => setHome(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const newsWithImages = home?.filter((v) => v?.img);
    setImageNews(newsWithImages);
  }, [home]);

  return (
    <div>
      <Header />
      <Nav />
      {loading ? <h1>Getting News...</h1> : <AllNews imageNews={imageNews} />}
      <br />
      <br />
    </div>
  );
}

export default Home;
