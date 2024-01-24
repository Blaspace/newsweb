import React, { useContext, useEffect, useState } from "react";
import newsContext from "../context/NewsContext";
import { useParams } from "react-router-dom";
import Header from "../component/Header";
import Nav from "../component/Nav";
import { LuLoader2 } from "react-icons/lu";

function NewsDetails() {
  const {
    home,
    url,
    world,
    travles,
    style,
    sports,
    politics,
    business,
    health,
    opinion,
    singleNews,
    setSingleNews,
  } = useContext(newsContext);
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [news, setNews] = useState([]);

  useEffect(() => {
    switch (params.class) {
      case "Home":
        setNews(home?.filter((v) => v?.text === params.id));
        break;
      case "Health":
        setNews(health?.filter((v) => v?.text === params.id));
        break;
      case "Business":
        setNews(business?.filter((v) => v?.text === params.id));
        break;
      case "Opinion":
        setNews(opinion?.filter((v) => v?.text === params.id));
        break;
      case "Politics":
        setNews(politics?.filter((v) => v?.text === params.id));
        break;
      case "Sports":
        setNews(sports?.filter((v) => v?.text === params.id));
        break;
      case "Style":
        setNews(style?.filter((v) => v?.text === params.id));
        break;
      case "Travles":
        setNews(travles?.filter((v) => v?.text === params.id));
        break;
      case "World":
        setNews(world?.filter((v) => v?.text === params.id));
        break;
      default:
        break;
    }
  }, []);
  useEffect(() => {
    if (!singleNews) {
      if (news.length) {
        setLoading(true);
        fetch(`${url}/single`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url: news[0]?.url }),
        })
          .then((res) => res.json())
          .then((data) => setSingleNews(data))
          .catch((err) => console.log(err))
          .finally(() => setLoading(false));
      }
    }
  }, [news]);
  return (
    <>
      <Header />
      <Nav head={params.class} />
      <div className="single">
        <div className="single-con">
          {loading ? (
            <span className="load">
              <LuLoader2 size={50} className="loader" />
            </span>
          ) : (
            <>
              <h1>{singleNews?.heading}</h1>
              <br />
              <section>
                <img src={news[0]?.img} />
              </section>
              <br />
              <div className="paragraph">
                {singleNews?.text?.map((value, i) => {
                  return <p key={i}>{value}</p>;
                })}
              </div>
            </>
          )}
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default NewsDetails;
