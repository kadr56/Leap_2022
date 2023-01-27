import React, { useState } from "react";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";
import data from "./data/data";
import Content from "./components/Content";

function App() {
  // const url = "https://course-api.com/react-tabs-project";
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          {data.map((d, index) => {
            return (
              <h4><a onClick={() => setActiveIndex(index)}>{d.company}</a> </h4>
            )
          })}
        </div>
        <div className="company-content">
          {console.log(data)}
          <Content data={data} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>
      </div>
    </section>
  );
}

export default App;
