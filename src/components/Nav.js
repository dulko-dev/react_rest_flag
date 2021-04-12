import React from "react";
import styled from "styled-components";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WrapperNav = styled.div`
  background-color: ${({ theme }) => theme.nav};
  color: ${({ theme }) => theme.text};
  width: 100%;
`;
const ContainerNav = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    padding: 0 20px;
  }
`;

const NameNav = styled.h2`
  font-size: 2.2em;

  @media (max-width: 498px) and (min-width: 372px) {
    font-size: 1.5em;
  }
  @media (max-width: 371px) {
    font-size: 1em;
  }
`;

const IconNav = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const Text = styled.p`
  align-self: center;
  padding-left: 5px;

  @media (max-width: 498px) {
    font-size: 0.8em;
  }
`;

const FontAwesomeStyle = styled(FontAwesomeIcon)`
  @media (max-width:498px){
    font-size:0.8em;
  }
`;

function Nav({ handleChangeTheme, theme }) {
  return (
    <WrapperNav>
      <ContainerNav>
        <NameNav>Where in the world?</NameNav>
        <IconNav onClick={handleChangeTheme}>
          {theme === "light" ? (
            <FontAwesomeStyle icon={faMoon} size="lg" />
          ) : (
            <FontAwesomeStyle icon={faSun} size="lg" />
          )}

          <Text>{theme === "light" ? "Dark Mode" : "Light Mode"}</Text>
        </IconNav>
      </ContainerNav>
    </WrapperNav>
  );
}

export default Nav;
