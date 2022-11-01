import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import BackgroundImage from "../components/BackgroundImage";
import Header from "../components/Header";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error.code);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <Header />
      <Content>
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login to your account</button>
            </div>
          </div>
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

  .form-container {
    gap: 2rem;
    height: 85vh;

    .form {
      padding: 2rem;
      width: 25vw;
      gap: 2rem;
      color: white;

      .container {
        max-width: 100%;
        display: flex;
        flex-direction: column;
        margin: auto;

        input {
          width: 100%
          font-size: 1.3rem;
          padding: 1.2rem;
          border-radius: 5px;
          border: 0;
          margin-bottom: 2px;
        }

        button {
          background-color: rgba(0, 0, 0, 0.6);
          margin: 20px 0;
          padding: 1.2rem;
          letter-spacing: 1.5px;
          text-decoration: none;
          text-transform: uppercase;
          border-radius: 4px;
          cursor: pointer;
          vertical-align: middle;
          display: inline-block;
          border: 1px solid #f9f9f9;
          transition: all 0.2s ease 0s;

          &:hover {
            background-color: #f9f9f9;
            color: #000;
            border-color: transparent;
          }
        }
      }
    }
  }
`;

/* const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.5);
    grid-template-rows: 15vh 85vh;
    .form-container {
      gap: 2rem;
      height: 85vh;
      .form {
        padding: 2rem;
        width: 25vw;
        gap: 2rem;
        color: white;
        .container {
          input {
            margin-bottom: 10px;
            color: black;
            border: none;
            padding: 0.8rem;
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
            background-color: #e50914;
            border: none;
            cursor: pointer;
            color: white;
            font-weight: bolder;
            font-size: 1.05rem;
          }
        }
      }
    }
  }
`; */

export default Login;
