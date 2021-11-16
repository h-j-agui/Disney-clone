import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Content>
        <LogoOne src="/images/cta-logo-one.svg" alt="" />
        <SignUp>Sign Up</SignUp>
        <Description>
          Get Premier Acceess with a Disney+ subscription.
        </Description>
      </Content>
    </Container>
  );
}
export default Login;

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;
    display: flex;
    align-items: center;
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
    z-index: -1;
    background-image: url("/images/login-background.jpg");
  }
`;
const Content = styled.div`
  max-width: 650px;
  width: 90%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
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
