import React, { useEffect, useState } from "react";

function FirstNews({ imageNews }) {
  const [first, setFirst] = useState([]);

  useEffect(() => {
    const x = imageNews.filter((v, i) => i <= 4);
    console.log(x);
    setFirst(x);
  }, [imageNews]);
  return (
    <div>
      <div className="first">
        <div className="first-con">
          <div
            className="card1"
            style={{ backgroundImage: first[0].img }}
          ></div>
          <div className="first2">
            <div
              className="card2"
              style={{ backgroundImage: first[1]?.img }}
            ></div>
            <div className="first3">
              <div
                className="card3"
                style={{ backgroundImage: first[2]?.img }}
              ></div>
              <div
                className="card4"
                style={{ backgroundImage: first[3]?.img }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FirstNews;
