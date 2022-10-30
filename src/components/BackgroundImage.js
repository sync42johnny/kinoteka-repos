import React from "react";
import styled from "styled-components";

function BackgroundImage() {
  const path = process.env.PUBLIC_URL;

  return (
    <Container>
      <img
        src={path + "/images/brian-mcgowan-ggg_B1MeqQk-unsplash.jpg"}
        alt="background"
      />
    </Container>
  );
}

export default BackgroundImage;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }
`;
