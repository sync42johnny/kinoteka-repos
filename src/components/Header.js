import React from "react";
import styled from "styled-components";

function Header() {
  const path = process.env.PUBLIC_URL;
  return (
    <Nav>
      <Logo src={path + "/images/kinoteka.svg"} />
      <NavMenu>
        <a>
          <img src={path + "/images/home-icon.svg"} />
          <span>HOME</span>
        </a>
        <a>
          <img src={path + "/images/search-icon.svg"} />
          <span>SEARCH</span>
        </a>
        <a>
          <img src={path + "/images/watchlist-icon.svg"} />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src={path + "/images/movie-icon.svg"} />
          <span>MOVIE</span>
        </a>
        <a>
          <img src={path + "/images/series-icon.svg"} />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src={path + "/images/avatar.jpg"} />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;

    img {
      height: 20px;
    }

    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;

      &:after {
        content: "";
        height: 2px;
        background: white;
        position: absolute;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: left center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.75, 0.94) 0s;
        transform: scaleX(0);
      }
    }

    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
