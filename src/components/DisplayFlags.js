import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WrapperDisplayFlags = styled.div`
  height: 370px;
  border: 15px solid ${({ theme }) => theme.nav};
  border-radius: 15px;
  width: 280px;
  max-width: 100%;
  margin: 15px 30px;

  @media (max-width: 559px) {
    margin: 15px 0;
  }
`;

const ImageFlags = styled.img`
  height: 50%;
  width: 100%;
  object-fit: cover;
  border-radius: 4px 4px 0 0;
`;

const NameFlags = styled.h4`
  font-weight: 600;
  font-size: 1.3em;
  padding: 30px 0 20px 20px;
`;
const TextFlags = styled.p`
  padding: 0 0 10px 20px;
`;

const SpanFlags = styled.span`
  color: ${({ theme }) => theme.sub};
  padding-left: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

function DisplayFlags({ flag }) {
  return (
    <WrapperDisplayFlags>
      <ImageFlags src={flag.flags.png} />
      <StyledLink to={`/${flag.cca3}`}>
        <NameFlags>{flag.name.common}</NameFlags>
        <TextFlags>
          Population:
          <SpanFlags>{flag.population}</SpanFlags>
        </TextFlags>
        <TextFlags>
          Region:
          <SpanFlags>{flag.region}</SpanFlags>
        </TextFlags>
        <TextFlags>
          Capital:
          <SpanFlags>
            {flag.capital === undefined ? "" : flag.capital[0]}
          </SpanFlags>
        </TextFlags>
      </StyledLink>
    </WrapperDisplayFlags>
  );
}

export default DisplayFlags;
