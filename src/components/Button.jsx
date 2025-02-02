import React from "react";
import styled from "styled-components";

const Button = ({ children, type, onClick, $color}) => {
  return (
    <StButton $color={$color} type={type} onClick={onClick}>
      {children}
    </StButton>
  );
};

export default Button;

const StButton = styled.button`
  border: none;
  height: 25px;
  width: 80px;
  background-color: ${(p)=> p.$color === "orange" ? "#f79757" : "#506e66"} ; 
  color: #f2f2f2;
  font-family: "Nanum Brush Script", serif;
  cursor: pointer;
  border-radius: 8px;
  margin: 5px;
`;
