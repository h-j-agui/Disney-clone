import React, { Component } from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" />
      <NavMenu>
        <a>
          <Logo src="/images/home-icon.svg" />
          <span>HOME</span>
        </a>
        <a>
          <Logo src="/images/search-icon.svg" />
          <span>SEARCH</span>
        </a>
        <a>
          <Logo src="/images/watchlist-icon.svg" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <Logo src="/images/original-icon.svg" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <Logo src="/images/movie-icon.svg" />
          <span>MOVIES</span>
        </a>
        <a>
          <Logo src="/images/series-icon.svg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg />
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
  align-items: center;
`;
const Logo = styled.img`
  width: 80px;
`;
const NavMenu = styled.div`
  display: flex;
  flex: 1;
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
        transition: all 250ms cubic-bezier(0.25, 0.45, 0.045, 0.094) 0s;
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
  background: #ddcc33;
`;
