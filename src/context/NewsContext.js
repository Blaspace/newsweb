import { createContext, useState, useEffect } from "react";

const newsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [home, setHome] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageNews, setImageNews] = useState([]);
  const [business, setBusiness] = useState([]);
  const [health, setHealth] = useState([]);
  const [opinion, setOpinion] = useState([]);
  const [politics, setPolitics] = useState([]);
  const [sports, setSports] = useState([]);
  const [style, setStyle] = useState([]);
  const [travles, setTravles] = useState([]);
  const [world, setWorld] = useState([]);
  const [singleNews, setSingleNews] = useState([]);

  //const url = "http://localhost:8000";
  const url = "https://cnnserver.onrender.com";

  return (
    <newsContext.Provider
      value={{
        home,
        setHome,
        url,
        world,
        setWorld,
        travles,
        setTravles,
        style,
        setStyle,
        sports,
        setSports,
        politics,
        setPolitics,
        loading,
        setLoading,
        imageNews,
        setImageNews,
        business,
        setBusiness,
        health,
        setHealth,
        opinion,
        setOpinion,
        singleNews,
        setSingleNews,
      }}
    >
      {children}
    </newsContext.Provider>
  );
};

export default newsContext;
