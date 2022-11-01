import React from "react";
import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Navbar from "../components/Navbar";

function About() {
  return (
    <Container>
      <Navbar />
      <Content>
        <CTA>
          <CTALogo src={path + "/images/kinoteka.svg"} />
          <SiteDesctiption>GET ALL THERE</SiteDesctiption>
        </CTA>
      </Content>
    </Container>
  );
}

const path = process.env.PUBLIC_URL;
export default About;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
`;

const Content = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 70px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url(${path + "/images/brian-mcgowan-ggg_B1MeqQk-unsplash.jpg"})
      center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -2;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const CTA = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  margin-bottom: 10%;
  width: 650px;
`;
const CTALogo = styled.img`
  padding: 10px 0px;
`;
const SiteDesctiption = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 15px 5px;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  &:hover {
    background: #0483ee;
  }
`;
