import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import newsContext from "../context/NewsContext";

function AllNews({ imageNews }) {
  const { setSingleNews } = useContext(newsContext);
  const navigate = useNavigate();
  const handlenav = (title, text) => {
    setSingleNews(null);
    navigate(`../single/${title}/${text}`);
  };
  return (
    <div className="all-news">
      <br />
      <div className="all-news-con">
        {imageNews?.map((value, i) => {
          return (
            <div
              onClick={() =>
                handlenav(value?.title, value?.text?.replace(/ /g, " "))
              }
              key={i}
            >
              <section>
                <img src={value.img} alt="news" />
              </section>
              <p>{value?.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllNews;
