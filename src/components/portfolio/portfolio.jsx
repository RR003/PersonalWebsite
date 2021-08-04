import React, { useEffect } from "react";
import { useState } from "react";
import "./portfolio.scss";
import PortfolioList from "../portfolioList/portfolioList";
import { webPortfolio, AI, schoolPortfolio } from "../../data.js";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    { id: "web", title: "Web Applications" },
    { id: "school", title: "School Work" },
    { id: "ai", title: "Artificial Intelligence" },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "school":
        setData(schoolPortfolio);
        break;
      case "ai":
        setData(AI);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  const goToLink = (link) => {
    window.open(link);
  };

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" onClick={() => goToLink(d.link)} />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
