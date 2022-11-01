import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Navbar from "../components/Navbar";
import ImgSlider from "../components/ImgSlider";
import Trending from "../components/Trending";

function Home() {
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "all" }));
    }
  }, [genresLoaded]);

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  return (
    <Container>
      <Navbar />
      <Content>
        <ImgSlider movies={movies} />
        <Trending movies={movies} />
      </Content>
    </Container>
  );
}

export default Home;

const path = process.env.PUBLIC_URL;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  overflow-x: hidden;
  display: block;
  top: 70px;

  &:before {
    background: url(${path + "/images/home-background.png"}) center center /
      cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
