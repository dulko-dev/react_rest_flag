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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 1400px;
  margin: 0 auto;
`;

const NameNav = styled.h2`
  font-size: 2.2em;
`;

const IconNav = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;
const Text = styled.p`
  align-self: center;
  padding-left: 5px;
`;

function Nav({ handleChangeTheme, theme }) {
  return (
    <WrapperNav>
      <ContainerNav>
        <NameNav>Where in the world?</NameNav>
        <IconNav onClick={handleChangeTheme}>
          {theme === "light" ? (
            <FontAwesomeIcon icon={faMoon} size="lg" />
          ) : (
            <FontAwesomeIcon icon={faSun} size="lg" />
          )}

          <Text>{theme === "light" ? "Dark Mode" : "Light Mode"}</Text>
        </IconNav>
      </ContainerNav>
    </WrapperNav>
  );
}

export default Nav;
