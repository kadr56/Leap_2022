import React, { useState } from "react";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";
import myData from "./data/data";

function App() {
  // const url = "https://course-api.com/react-tabs-project";
  const [active, setActive] = useState["John"];
  const [data, setData] = useState([]);

  function handleShow(name) {
    if (name == "John") {
      console.log("John clicked");
      setActive("John");
      // setData()
    } else if (name == "Smith") {
      console.log("Smith clicked");
      setActive("Smith");
    } else if (name == "Tom") {
      console.log("Tom clicked");
      setActive("Tom");
    }
  }
  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="job">
        <div className="company-tab">
          <h4>
            <a onClick={() => handleShow("John")}>John</a>
          </h4>
          <h4>
            <a onClick={() => handleShow("Smith")}>Smith</a>
          </h4>
          <h4>
            <a onClick={() => handleShow("Tom")}>Tom</a>
          </h4>
        </div>
        <div className="company-content">
          {console.log(myData)}
          {myData.map((data, index) => {
            return (
              <div>
                <h2 className="job-title">{data.title}</h2>
                <p className="company-name">{data.company}</p>
                <p className="date">{data.dates}</p>
                {data.duties.map((content) => {
                  return (
                    <div className="text">
                      <AiFillCaretRight />
                      <p>{content}</p>
                    </div>
                  );
                })}
              </div>
            );
          })}

          {/* <div className="text">
            <AiFillCaretRight />
            <p>
              Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke
              leggings offal cold-pressed brunch neutra. Hammock photo booth
              live-edge disrupt.
            </p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>
              Post-ironic selvage chambray sartorial freegan meditation.
              Chambray chartreuse kombucha meditation, man bun four dollar toast
              street art cloud bread live-edge heirloom.
            </p>
          </div>
          <div className="text">
            <AiFillCaretRight />
            <p>
              Butcher drinking vinegar franzen authentic messenger bag copper
              mug food truck taxidermy. Mumblecore lomo echo park readymade
              iPhone migas single-origin coffee franzen cloud bread tilde vegan
              flexitarian.
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default App;
