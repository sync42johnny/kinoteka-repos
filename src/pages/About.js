import React from "react";
import styled from "styled-components";

function About() {
  return (
    <Container>
        <CTA>
            <CTALogo src={path + "/images/kinoteka.svg"} />
            <SiteDesctiption>
            GET ALL THERE
            </SiteDesctiption>
        </CTA>
    </Container>
  );
}

const path = process.env.PUBLIC_URL;
export default About;

const Container = styled.main`
position: relative;
height: calc(100vh - 70px);
display: flex;
align-items: center;
justify-content:center;
&:before {
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    background-image: url(${path+"/images/brian-mcgowan-LObpG0ku8VM-unsplash.jpg"});
    content: "";
    opacity: 0.8;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index:-1;
}
  }
`
const CTA = styled.div`
max-width: 650px;
padding: 80px 40px;
display:flex;
flex-direction: column;
margin-bottom: 10%;
width: 650px;
`
const CTALogo = styled.img`
padding: 10px 0px;
`
const SiteDesctiption = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 15px 5px;
  border-radius: 4px;
  text-align:center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover{
    background: #0483ee;
  }
`
