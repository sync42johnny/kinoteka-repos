import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { firebaseAuth } from "../utils/firebase-config";
function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
      <Header login />
      <Content>
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h6>
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
              name="email"
              value={formValues.email}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
                name="password"
                value={formValues.password}
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          {showPassword && <button onClick={handleSignIn}>Sign up</button>}
        </div>
      </Content>
    </Container>
  );
}

const path = process.env.PUBLIC_URL;

// container section
const Container = styled.div`
  width: 100%;
  height: 100%;
`;
// content div
const Content = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: grid;
  padding: 0 calc(2.7vw + 5px);

  &:after {
    background: url(${path + "/images/login-background.jpg"}) center center /
      cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }

  .body {
    gap: 1rem;
    .text {
      gap: 1rem;
      text-align: center;
      font-size: 2rem;
      h1 {
        padding: 0 25rem;
      }
    }
    .form {
      display: grid;
      grid-template-columns: ${({ showPassword }) =>
        showPassword ? "1fr 1fr" : "2fr 1fr"};
      width: 60%;
      input {
        color: black;
        border: none;
        padding: 1.5rem;
        font-size: 1.2rem;
        appearance: none;
        border: 1px solid #8c8c8c;
        border-radius: 2px;
        box-sizing: border-box;
        &:focus {
          outline: none;
        }
      }
      button {
        border-radius: 2px;
        padding: 0.5rem 1rem;
        font-weight: bolder;
        font-size: 1.05rem;
        background-color: rgba(0, 0, 0, 0.6);
        letter-spacing: 1.5px;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;
        display: inline-block;
        border: 1px solid #f9f9f9;
        transition: all 0.2s ease 0s;

        &:hover {
          background-color: #e50914;
          color: #fff;
          border-color: transparent;
        }
      }
    }
    button {
      border-radius: 2px;
      padding: 0.5rem 1rem;
      background-color: rgba(0, 0, 0, 0.6);
      letter-spacing: 1.5px;
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
      border: 1px solid #f9f9f9;
      transition: all 0.2s ease 0s;
      cursor: pointer;
      font-weight: 400;
      font-size: 1.05rem;

      &:hover {
        background-color: #e50914;
        color: #fff;
        border-color: transparent;
      }
    }
  }
`;

export default Signup;
