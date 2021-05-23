import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <LeftSide>
        <button>LOGO HERE</button>
      </LeftSide>
      <RightSide>
        <Right>
          <p>Home</p>
          <p>Our Products</p>
          <p>Contact Us</p>
          <p>About us</p>
          <button>Login</button>
        </Right>
      </RightSide>
    </Container>
  );
};

export default Header;
const Container = styled.div`
  display: flex;
  top: 0;
  position: sticky;
  z-index: 100;
  height: 30px;
  background-color: #2b4b40;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
`;
const LeftSide = styled.div`
  button {
    border: none;
    margin-left: 20px;
    background-color: #2b4b40;
    border: 0.5px solid #ebe697;
    cursor: pointer;
    color: #ebe697;
    justify-content: center;
    width: 130px;
    height: 30px;
    border-radius: 20px;
  }
`;
const RightSide = styled.div``;
const Right = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > p {
    margin-left: 60px;
    color: #ebe697;
    cursor: pointer;
    font-size: 15px;
    letter-spacing: 1.42px;
    position: relative;
    text-decoration: none;
    @media (max-width: 880px) {
      font-size: 10px;
    }
    @media (max-width: 880px) {
      display: none;
    }
    &:after {
      content: "";
      height: 2px;
      background: #ebe697;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform-origin: left-center;
      transition: all 200ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      transform: scaleX(0);
    }
  }
  p:hover:after {
    transform: scaleX(1);
    opacity: 1;
  }
  button {
    margin-left: 60px;
    width: 70px;
    font-size: 15px;
    height: 20px;
    background-color: #ebe697;
    color: green;
    font-weight: bold;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 10px;
    border: none;
  }
`;
