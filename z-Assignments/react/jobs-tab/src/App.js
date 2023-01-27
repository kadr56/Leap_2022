import React, { useState } from "react";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";
// import data from "./data/data";
import Content from "./components/Content";
import { useEffect } from "react";

function App() {
  const url = "https://course-api.com/react-tabs-project";

  const [activeIndex, setActiveIndex] = useState(0);
  const [data, setData] = useState([]);


  async function fetchData() {
    const FETCHED_DATA = await fetch(url)
    const JSON_DATA = await FETCHED_DATA.json();

    console.log(JSON_DATA, "fetched data");
    setData(JSON_DATA)
  }


  useEffect(() => {
    fetchData();
  }, [])

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          {data.map((d, index) => {
            return (
              <h4 key={index}><a onClick={() => setActiveIndex(index)}>{d.company}</a> </h4>
            )
          })}
        </div>
        <div className="company-content">
          <Content data={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </div>
    </section>
  );
}

export default App;
