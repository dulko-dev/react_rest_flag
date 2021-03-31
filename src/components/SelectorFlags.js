import React from "react";
import styled from "styled-components";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Selector = styled.select`
  padding: 20px 40px;
  color: #fff;
  border: none;
  border-radius: 7px;
  background-color: #2b3945;
  text-align-last: center;
  cursor: pointer;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const WrapperSelector = styled.div`
  position: relative;
`;

function SelectorFlags({setRegion }) {
  return (
    <WrapperSelector>
      <FontAwesomeIcon
        icon={faArrowAltCircleDown}
        style={{
          color: "#fff",
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <Selector onChange={(e) => setRegion(e.target.value)}>
        <option value="filter">Filter by Region</option>
        <option value="all">All Region</option>
        <option value="africa">Africa</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </Selector>
    </WrapperSelector>
  );
}

export default SelectorFlags;
