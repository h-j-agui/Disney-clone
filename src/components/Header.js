import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import styled from "styled-components";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
  setSignOut,
} from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        let user = result.user;
        dispatch(
          setUserLogin({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      })
      .then(() => {
        navigate("/home");
      });
  };
  const signOut = () => {
    auth.signOut().then(() => {
      dispatch(setSignOut);
      navigate("/login");
    });
  };

  return !userName ? (
    <LoginContainer>
      <Login onClick={signIn}>Login</Login>
    </LoginContainer>
  ) : (
    <Nav>
      <Logo
        src="/images/logo.svg"
        onClick={() => {
          navigate("/home");
        }}
      />
      <NavMenu>
        <a>
          <Logo src="/images/home-icon.svg" />
          <span
            onClick={() => {
              navigate("/home");
            }}
          >
            HOME
          </span>
        </a>
        <a>
          <Logo src="/images/search-icon.svg" href="#" />
          <span>SEARCH</span>
        </a>
        <a>
          <Logo src="/images/watchlist-icon.svg" href="#" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <Logo src="/images/original-icon.svg" href="#" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <Logo src="/images/movie-icon.svg" href="#" />
          <span>MOVIES</span>
        </a>
        <a>
          <Logo src="/images/series-icon.svg" href="#" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg onClick={signOut} />
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
  overflow-x: hidden;
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
const Login = styled.div`
  border: 1px solit #f9f9f9;
  padding: 8px 16px;
  border-radius: 4px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0.6);
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;
const LoginContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
