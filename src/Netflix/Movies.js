import React, { useState, useEffect } from "react";
import Footer from "./Footer";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    fetch("https://www.omdbapi.com/?s=telugu&apikey=4a3b711b")
      .then((response) => response.json())
      .then((json) => {
        const { Search } = json;
        setMovies([...Search]);
      });
  }, []);

  const inputHandler = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const search = async () => {
    await fetch(`https://www.omdbapi.com/?s=${input}&apikey=4a3b711b`)
      .then((response) => response.json())
      .then((json) => {
        const { Search } = json;
        setMovies([...Search]);
      });
  };

  return (
    <>
      <div
        className="row no-gutters rounded-0 p-5"
        style={{ margin: "0px", backgroundColor: "#800000" }}
      >
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            style={{ height: "43px" }}
            onChange={inputHandler}
            placeholder="Search..."
            id="search"
            name="search"
          />
          <div class="input-group-append">
            <button type="button" onClick={search} className="btn btn-primary">
              Search
            </button>
          </div>
        </div>

        {movies.map(({ Poster, Title, Year, Type }) => (
          <div className="col-md-3 p-2">
            <div
              className="card mb-4"
              style={{ width: "auto", height: "480px" }}
            >
              <img
                className="card-img-top img-fluid"
                src={Poster}
                alt="Coming Soon..."
                style={{ height: "290px" }}
              />
              <div className="card-body">
                <h5 className="card-title">{Title}</h5>
                <div className="float-left">
                  Year:{" "}
                  <span className="btn-sm btn-primary disabled">{Year}</span>{" "}
                </div>
                <div className="float-right">
                  Type:{" "}
                  <span className="btn-sm btn-success disabled">{Type}</span>{" "}
                </div>
              </div>
              <button type="button" className="btn-lg btn-danger btn-block">
                WATCH NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};
export default Movies;
