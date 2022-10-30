import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Header(props) {
  const path = process.env.PUBLIC_URL;
  const navigate = useNavigate();
  const userName = false;
  const links = [
    { name: "HOME", link: "/", icon: "/images/home-icon.svg" },
    { name: "SEARCH", link: "/search", icon: "/images/search-icon.svg" },
    { name: "WATCHLIST", link: "/watchlist", icon: "/images/watchlist-icon.svg", },
    { name: "MOVIE", link: "/movie", icon: "/images/movie-icon.svg" },
    { name: "SERIES", link: "/series", icon: "/images/series-icon.svg" },
    { name: "ABOUT", link: "/about", icon: "/images/about-us-icon.svg" },
  ];
  return (
    <Nav>
      <Logo src={path + "/images/kinoteka.svg"} />
      {!userName ? (
        <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
          {props.login ? "Log In" : "Sign In"}
        </button>
      ) : (
        <>
          <NavMenu>
            {links.map((item, idx) => {
              return (
                  <Link key={idx} to={item.link}>
                    <a>
                      <img src={path + item.icon} />
                      <span>{item.name}</span>
                    </a>
                  </Link>
              );
            })}
          </NavMenu>
          <UserImg src={path + "/images/avatar.jpg"} />
        </>
      )}
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  height: 70px;
  background: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  overflow-x: hidden;
  z-index: 3;

  button {
    background-color: rgba(0, 0, 0, 0.6);
    padding: 8px 16px;
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
`;

const Logo = styled.img`
  width: 80px;
  display: inline-block;
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
      margin-left: 11px;

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
