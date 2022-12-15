import "./portfolio.scss"
import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import{
    featuredPortfolio,
    webPortfolio,
    mobilePortfolio,
    designPortfolio,
   } from "../../data.js"

export default function Portfolio() {
    const [selected,setSelected] = useState("featured")
    const [data,setData] = useState([]);
    const list = [
        {
          id: "featured",
          title: "Most Competent Languages",
        },
        {
          id: "Frontend",
          title: "Frontend",
        },
        {
          id: "Backend",
          title: "Backend",
        },
        {
          id: "Markup and design",
          title: "Markup and design",
        }
      ];

      useEffect(() => {
        switch (selected) {
          case "featured":
            setData(featuredPortfolio);
            break;
          case "Frontend":
            setData(webPortfolio);
            break;
          case "Backend":
            setData(mobilePortfolio);
            break;
          case "Markup and design":
            setData(designPortfolio);
            break;
          default:
            setData(featuredPortfolio);
        }
      }, [selected]);

      return (
        <div className="portfolio" id="portfolio">
          <h1>Previously used</h1>
          <ul>
            {list.map((item) => (
              <PortfolioList
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
                link={item.link}
              />
            ))}
          </ul>
          <div className="container">
            {data.map((d) => (
              <div className="item">
                <img
                  src={d.img}
                  alt=""
                />
                <a className="LTP" href={d.link}>Link to the project</a>
                {/* <h3>{d.title}</h3> */}
              </div>
            ))}
          </div>
        </div>
      );
    }
