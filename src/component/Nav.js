import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleGetNews = (e) => {
    navigate(e);
  };
  const navRef = useRef();
  const ulRef = useRef();
  const handleToggle = () => {
    setToggle(!toggle);
    if (toggle) {
      ulRef.current.style.display = "block";
      navRef.current.style.height = "0";
    } else {
      ulRef.current.style.display = "block";
      navRef.current.style.height = "500px";
    }
  };
  return (
    <div className="nav">
      <div className="nav-con">
        <h3 onClick={handleToggle}>
          <b>{!toggle ? <>&#x2630;</> : <>&times;</>}</b>
        </h3>
        <div className="drop-down" ref={navRef}>
          <ul ref={ulRef}>
            <li onClick={() => handleGetNews("/")}>Home</li>
            <li onClick={() => handleGetNews("../business")}>Business</li>
            <li onClick={() => handleGetNews("../world")}>World</li>
            <li onClick={() => handleGetNews("../sports")}>Sports</li>
            <li onClick={() => handleGetNews("../style")}>Style</li>
            <li onClick={() => handleGetNews("../travles")}>Travles</li>
            <li onClick={() => handleGetNews("../health")}>Health</li>
            <li onClick={() => handleGetNews("../politics")}>Politics</li>
            <li onClick={() => handleGetNews("../opinion")}>Opinion</li>
          </ul>
        </div>
        <ul>
          <li onClick={() => handleGetNews("/")}>Home</li>
          <li onClick={() => handleGetNews("../business")}>Business</li>
          <li onClick={() => handleGetNews("../world")}>World</li>
          <li onClick={() => handleGetNews("../sports")}>Sports</li>
          <li onClick={() => handleGetNews("../style")}>Style</li>
          <li onClick={() => handleGetNews("../travles")}>Travles</li>
          <li onClick={() => handleGetNews("../health")}>Health</li>
          <li onClick={() => handleGetNews("../politics")}>Politics</li>
          <li onClick={() => handleGetNews("../opinion")}>Opinion</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
