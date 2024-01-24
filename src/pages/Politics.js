import React, { useEffect, useState, useContext } from "react";
import Header from "../component/Header";
import Nav from "../component/Nav";
import AllNews from "../component/AllNews";
import newsContext from "../context/NewsContext";
import { LuLoader2 } from "react-icons/lu";

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

export default Politics;
