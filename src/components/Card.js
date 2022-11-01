import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
//import axios from "axios";
//import { onAuthStateChanged } from "firebase/auth";
//import { firebaseAuth } from "../utils/firebase-config";
import { useDispatch } from "react-redux";
//import { removeMovieFromLiked } from "../store";

export default React.memo(function Card({ index, movieData }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //const [email, setEmail] = useState(undefined);

  /* onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) {
      setEmail(currentUser.email);
    } else navigate("/login");
  }); */

  /* const addToList = async () => {
    try {
      await axios.post("http://localhost:5000/api/user/add", {
        email,
        data: movieData,
      });
    } catch (error) {
      console.log(error);
    }
  }; */

  return (
    <Container>
      <Link to={`/carddetails/` + movieData.id}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
          alt={movieData.name}
        />
      </Link>
    </Container>
  );
});

const Container = styled.div`
  padding-top: 56.25%;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 81%) 0px 41px 59px -16px,
      rgb(0 0 0 / 73%) 0px 31px 23px -11px;
    transform: scale(1.05);
    border-color: rgb(249, 249, 249, 0.9);
  }
`;
