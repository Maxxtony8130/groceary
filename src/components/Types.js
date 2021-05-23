import React from "react";
import styled from "styled-components";
import dairy from "../images/dairy (2).png";
import fruits from "../images/fruits.png";
import vegetables from "../images/vegetables.png";

const Types = () => {
  return (
    <Container>
      <Head>
        <h1>Choose, Whatever you Want</h1>
      </Head>
      <Products>
        <Product>
          <img src={dairy} alt="" />
          <p>Dairy Products</p>
        </Product>
        <Product>
          <img src={fruits} alt="" />
          <p>Fruits</p>
        </Product>
        <Product>
          <img src={vegetables} alt="" />
          <p>Vegetables</p>
        </Product>
      </Products>
    </Container>
  );
};

export default Types;
const Container = styled.div`
  justify-content: center;
  align-items: center;
  background-color: #2b4b40;
  padding: 30px;
  text-align: center;
`;
const Head = styled.div`
  color: #ebe697;
  line-height: 1.5px;
  margin-top: 20px;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1.5px;
  @media (max-width: 768px) {
    line-height: 22px;
  }
`;
const Products = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 60px;
  margin-top: 20px;
  margin-right: 60px;
  align-items: center;
`;
const Product = styled.div`
  & > img {
    object-fit: contain;
    height: 300px;
    cursor: pointer;
    width: 300px;
    transition: transform 0.5s;
    :hover {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1010px) {
    & > img {
      height: 120px;
      width: 120px;
    }
  }
  & > p {
    font-size: 30px;
    color: #ebe697;
    cursor: pointer;
    @media (max-width: 768px) {
      font-size: 15px;
    }
  }
`;
