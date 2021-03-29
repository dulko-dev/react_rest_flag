import React, { Component } from "react";
import styled from "styled-components";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WrapperNav = styled.div`
  background-color: #2b3945;
  width: 100%;
`;
const ContainerNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 1400px;
  margin: 0 auto;
  color: #fff;
`;

const NameNav = styled.h2`
  font-size: 2.2em;
`;

const IconNav = styled.div`
  display: flex;
  justify-content: center;
`;
const Text = styled.p`
  align-self: center;
  padding-left: 5px;
`;

export default class Nav extends Component {
  render() {
    return (
      <WrapperNav>
        <ContainerNav>
          <NameNav>Where in the world?</NameNav>
          <IconNav>
            <FontAwesomeIcon icon={faMoon} size="lg" />
            <Text>Dark Mode</Text>
          </IconNav>
        </ContainerNav>
      </WrapperNav>
    );
  }
}
