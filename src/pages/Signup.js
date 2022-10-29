import React from "react";
import styled from "styled-components";
import BackgroundImage from "../components/BackgroundImage";

function Signup() {
  return (
    <Container>
        <BackgroundImage />
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies, TV shows and more</h1>
                <h4>Watch anywhere.</h4>
                <h6>Ready to watch? Enter your email to create membership</h6>
            </div>
            <div className="form">
                <input type="emial" placeholder="Email Address" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button>Get Started</button>
            </div>
            <button>Log In</button>
        </div>
    </Container>
  );
}

export default Signup;

const Container = styled.div``;