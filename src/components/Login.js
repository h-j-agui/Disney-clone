import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLogin,
} from "../features/user/userSlice";
import styled from "styled-components";

function Login() {
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

  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" alt="" />
        <SignUp onClick={signIn}>Sign In</SignUp>
        <Description>
          Get Premier Acceess with a Disney+ subscription.
        </Description>
        <LogoTwo src="/images/cta-logo-two.png" alt="" />
      </Content>
    </Container>
  );
}
export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
    display: flex;
    align-items: top;
    
justify-content: center;

  &:before {
      background-position: top;
      background-size: cover
      background-repeat: no-repeat;
    position: absolute;
    top: 0;
    bottom: 0;
    content: "";
    left: 0;
    right: 0;
    opacity: 0.7;
    z-index: -1;
    background-image: url("/images/login-background.jpg");
  }
`;
const Content = styled.div`
  margin-top: 100px;
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoOne = styled.img``;
const SignUp = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;
  text-transform: uppercase;

  &:hover {
    background: #0483ee;
  }
`;
const Description = styled.p`
  font-size: 11px;
  letter-spacing: 1.5px;
  text-align: center;
  line-height: 1.5;
`;
const LogoTwo = styled(LogoOne)`
  width: 90%;
`;
