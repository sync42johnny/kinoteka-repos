import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { firebaseAuth } from "../utils/firebase-config";
export default function Navbar({ isScrolled }) {
  const path = process.env.PUBLIC_URL;
  const links = [
    { name: "HOME", link: "/", icon: "/images/home-icon.svg" },
    { name: "SEARCH", link: "/search", icon: "/images/search-icon.svg" },
    {
      name: "WATCHLIST",
      link: "/watchlist",
      icon: "/images/watchlist-icon.svg",
    },
    { name: "MOVIE", link: "/movie", icon: "/images/movie-icon.svg" },
    { name: "SERIES", link: "/series", icon: "/images/series-icon.svg" },
    { name: "ABOUT", link: "/about", icon: "/images/about-us-icon.svg" },
  ];

  return (
    <Nav>
      <Logo src={path + "/images/kinoteka.svg"} />
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
      <SignOut>
        <UserImg src={path + "/images/avatar.jpg"} />
        <DropDown>
          <span onClick={() => signOut(firebaseAuth)}>Sign out</span>
        </DropDown>
      </SignOut>
    </Nav>
  );
}

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
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
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }
  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;
