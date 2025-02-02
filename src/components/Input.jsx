import React from "react";
import styled from "styled-components";

const Input = ({ children, htmlFor, type, value, id, onChange }) => {
  return (
    <>
      <StLabel htmlFor={htmlFor}>{children}</StLabel>
      <StInput type={type} value={value} id={id} onChange={onChange} />
    </>
  );
};

export default Input;

const StLabel = styled.label`
  font-size: 22px;
  font-weight: 900;
  color: #373e3b;
`;

const StInput = styled.input`
  background-color: #a2b7a8;
  margin: 0 25px 0 5px;
  height: 25px;
  width: 250px;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 0 10px;
  color: #f2f2f2;
`;
