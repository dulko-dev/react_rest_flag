import React from "react";
import styled from "styled-components";
import { faArrowAltCircleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Selector = styled.select`
  padding: 24px 40px;
  color: ${({ theme }) => theme.text};
  border: none;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.nav};
  text-align-last: center;
  cursor: pointer;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
`;

const WrapperSelector = styled.div`
  position: relative;
`;

const FontAwesomeStyle = styled(FontAwesomeIcon)`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;

function SelectorFlags({ setRegion }) {
  return (
    <WrapperSelector>
      <FontAwesomeStyle icon={faArrowAltCircleDown} />
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
