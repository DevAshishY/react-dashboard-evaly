import React, { useState } from "react";
import { styled } from "styled-components";
import { IoSearchOutline } from "react-icons/io5";

export const InputStyle = styled.div`
  position: relative;
  display: inline-block;
  input {
    width: 200px;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    padding: 10px 16px;
    border: none;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    color: #8b909a;
    padding-right: 40px;
    &::placeholder {
      font-weight: 400;
      font-size: 15px;
      font-family: "Public Sans", sans-serif;
      color: #8b909a;
    }
  }
  svg {
    position: absolute;
    right: 18px;
    color: #8b909a;
    font-size: 20px;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const InputElement: React.FC = () => {
  return (
    <>
      <InputStyle>
        <input type="text" placeholder="Search by order id"></input>
        <IoSearchOutline />
      </InputStyle>
    </>
  );
};

export default InputElement;
