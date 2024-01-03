import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";

function Politics() {
  const { url, politics, setPolitics } = useContext(newsContext);
  const [loading, setLoading] = useState(false);
  const [imageNews, setImageNews] = useState([]);

  useEffect(() => {
    if (!politics.length) {
      setLoading(true);
      fetch(`${url}/politics`)
        .then((res) => res.json())
        .then((data) => setPolitics(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const newsWithImages = politics?.filter((v) => v?.img);
    setImageNews(newsWithImages);
  }, [politics]);

  return (
    <div>
      <Header />
      <Nav head={"Politics"} />
      {loading ? <h1>Getting News...</h1> : <AllNews imageNews={imageNews} />}
    </div>
  );
}

export default Politics;
