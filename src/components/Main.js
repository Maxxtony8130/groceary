import React from "react";
import styled from "styled-components";
import back from "../images/background.jpg";
import fruit from "../images/fruit.png";
const Main = () => {
  return (
    <Conatiner>
      <Left>
        <h1>Get Your Products at Your DoorStep</h1>
        <p>
          Shopping with us and get super products at your door step with an
          existing price & offers that you always wants.
        </p>
      </Left>
      <Right>
        <img src={fruit} alt="" />
      </Right>
    </Conatiner>
  );
};

export default Main;
const Conatiner = styled.div`
  justify-content: center;
  background: url(${back});
  background-position: center;
  background-size: 500px;
  display: flex;
  padding: 20px;
  height: 330px;
  align-items: center;
`;
const Left = styled.div`
  & > h1 {
    font-family: "Goblin One", cursive;
    font-size: 45px;
    color: #143840;
    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
  & > p {
    color: #143840;
    max-width: 720px;
    font-size: 20px;
    font-weight: 700;
    @media (max-width: 768px) {
      font-size: 12px;
    }
  }
`;
const Right = styled.div`
  margin-right: 30px;
  @media (max-width: 768px) {
    & > img {
      height: 130px;
    }
  }
  & > img {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }
  @keyframes up-down {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }
`;
