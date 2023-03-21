import React from "react";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Characters() {
  const [result, setResults] = useState();
  const [num, SetNum] = useState(1);
  const [data, SetData] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  //NOTE fixed broken useEffect
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `http://rickandmortyapi.com/api/character/?page=${num}`
      );
      const data = await response.json();
      SetData(data);
      setResults(data.results);
    };
    getData();
  }, [num]);

  const nextPage = () => {
    data.info.next === null ? SetNum(num) : SetNum(num + 1);
  };
  const prevPage = () => {
    data.info.prev === null ? SetNum(1) : SetNum(num - 1);
  };
  const filterNames = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredResults =
    result &&
    result.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <>
      <Navbar filterNames={filterNames} />
      <div className="Container">
        {/* ************* */}
        {filteredResults
          ? filteredResults.map(({ name, image }, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image} alt={`pic of ${name}`} />
                  </div>
                  <div className="flip-card-back">
                    <p>{name}</p>
                    <button className="btn">LEARN MORE</button>
                  </div>
                </div>
              </div>
            ))
          : result &&
            result.map(({ name, image }, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image} alt="pic of the x" />
                  </div>
                  <div className="flip-card-back">
                    <p>{name}</p>
                    <button className="btn">LEARN MORE</button>
                  </div>
                </div>
              </div>
            ))}
        {/* **************** */}
      </div>
      <Footer num={num} prevPage={prevPage} nextPage={nextPage} />
    </>
  );
}
export default Characters;
