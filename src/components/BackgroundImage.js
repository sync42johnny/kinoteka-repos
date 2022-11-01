import React from "react";
import styled from "styled-components";

export default function BackgroundImage() {
  return (
    <Container>
      <img src={process.env.PUBLIC_URL + "/images/brian-mcgowan-ggg_B1MeqQk-unsplash.jpg"} alt="background" />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
`;
