import React, { useState } from "react";
/* import ResultCard from "./ResultCard"; */
import { API_KEY } from "../utils/constants";
import Card from "./Card";
import Trending from "./Trending";
import ResultCard from "./ResultCard";
import styled from "styled-components";
import Navbar from "./Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => {
    e.preventDefault();

    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data.results);
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    
    if (!currentUser) navigate("/login");
  });

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <div className="navbar">
        <Navbar isScrolled={isScrolled} />
      </div>
      <div className="data">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Container>
  );
};
export default AddMovie;

const Container = styled.div`
  padding: 0 8rem;
  @media (max-width: 1024px) {
    padding: 0 4rem;
  }
  @media (max-width: 768px) {
    padding: 0 2rem;
  }
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 2rem;
    }
  }
`;
