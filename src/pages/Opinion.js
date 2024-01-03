import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";

function Opinion() {
  const { url, opinion, setOpinion } = useState();
  const [loading, setLoading] = useState(false);
  const [imageNews, setImageNews] = useState([]);

  useEffect(() => {
    if (!opinion?.length) {
      setLoading(true);
      fetch(`${url}/opinion`)
        .then((res) => res.json())
        .then((data) => setOpinion(data))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }
  }, []);

  useEffect(() => {
    const newsWithImages = opinion?.filter((v) => v?.img);
    setImageNews(newsWithImages);
  }, [opinion]);

  return (
    <div>
      <Header />
      <Nav head={"Opinion"} />
      {loading ? <h1>Getting News...</h1> : <AllNews imageNews={imageNews} />}
    </div>
  );
}

export default Opinion;
