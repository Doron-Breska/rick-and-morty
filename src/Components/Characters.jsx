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
        `https://rickandmortyapi.com/api/character/?page=${num}`
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
  const [showModal, setShowModal] = useState(null);

  // Function to handle opening the modal
  const openModal = (index) => {
    setShowModal(index);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <>
      <Navbar filterNames={filterNames} />
      <div className="Container">
        {/* ************* */}
        {filteredResults
          ? filteredResults.map(
              ({ name, image, status, species, id }, index) => (
                <div key={index}>
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={image} alt={`pic of ${name}`} />
                      </div>
                      <div className="flip-card-back">
                        <p>{name}</p>
                        <button onClick={() => openModal(id)} className="btn">
                          LEARN MORE!
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    id="myModal"
                    className={
                      showModal === id ? "modal show-modal" : "modal hide-modal"
                    }
                  >
                    <div className="modal-content">
                      <button onClick={closeModal} className="close">
                        close
                      </button>
                      <br />
                      <h2>{name}</h2>
                      <div>
                        <img src={image} alt="pic of the x" />
                      </div>
                      <div>
                        <p>Status: {status}</p>
                      </div>
                      <div>
                        <p>Species: {species}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )
          : result &&
            result.map(({ name, image, status, species, id }, index) => (
              <div key={index} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={image} alt="pic of the x" />
                  </div>
                  <div className="flip-card-back">
                    <p>{name}</p>
                    <button onClick={openModal} id="myBtn" className="btn">
                      LEARN MORE!
                    </button>
                    <p>test</p>
                    <div
                      id="myModal"
                      className={
                        showModal ? "modal show-modal" : "modal hide-modal"
                      }
                    >
                      <div className="modal-content">
                        <button onClick={closeModal} className="close">
                          close
                        </button>
                        <br />
                        <h2>{name}</h2>
                        <div>
                          <img src={image} alt="pic of the x" />
                        </div>
                        <div>
                          <p>{status}</p>
                        </div>
                        <div>
                          <p>{species}</p>
                        </div>
                      </div>
                    </div>
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
