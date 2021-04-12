import React from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = styled.input`
  color: ${({ theme }) => theme.text};
  position: relative;
  width: 400px;
  height: 65px;
  padding-left: 40px;
  background-color: ${({ theme }) => theme.nav};
  border: none;
  border-radius: 7px;

  @media (max-width: 632px) {
    margin: 10px 0;
    max-width:193px;
  }
`;

const FontAwesomeStyle = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  left: 15px;
  transform: translateY(-50%);
  z-index: 1;
`;

function InputFlags({ setInputField, inputField }) {
  const handleChange = (e) => {
    setInputField(e.target.value);
  };

  return (
    <div style={{ position: "relative" }}>
      <FontAwesomeStyle icon={faSearch} />
      <Input
        placeholder="Search for a country"
        onChange={handleChange}
        value={inputField}
      />
    </div>
  );
}

export default InputFlags;
