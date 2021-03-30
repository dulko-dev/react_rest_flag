import React from "react";
import styled from "styled-components";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = styled.input`
  color: #fff;
  position: relative;
  width: 400px;
  height: 7vh;
  padding-left: 40px;
  background-color: #2b3945;
  border: none;
  border-radius: 7px;
`;

function InputFlags({setInputField, inputField}) {

  const handleChange = (e) => {
    setInputField(e.target.value)
  }

  return (
    <>
      <FontAwesomeIcon
        icon={faSearch}
        style={{
          color: "#fff",
          position: "absolute",
          top: "50%",
          left: "15px",
          transform: "translateY(-50%)",
          zIndex: "1",
        }}
      />
      <Input placeholder="Search for a country" onChange={handleChange} value={inputField} />;
    </>
  );
}

export default InputFlags;
