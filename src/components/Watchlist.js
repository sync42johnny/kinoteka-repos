import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";
import Card from "./Card";
import styled from "styled-components";
import Navbar from "./Navbar";
import Section from "./Trending";

const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  const [isScrolled, setIsScrolled] = useState(false);

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
        {watchlist.length > 0 ? (
          <Section movies={watchlist} title={"My Watchlist"} type="watchlist" />
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </Container>
  );
};

export default Watchlist;

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
