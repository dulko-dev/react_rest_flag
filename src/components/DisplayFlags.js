import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WrapperDisplayFlags = styled.div`
  height: 350px;
  border: 15px solid ${({ theme }) => theme.nav};
  border-radius: 15px;
  max-width: 280px;
  margin: 15px 30px;
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
      <ImageFlags src={flag.flag} />
      <StyledLink to={`/${flag.alpha3Code}`}>
        <NameFlags>{flag.name}</NameFlags>
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
          <SpanFlags>{flag.capital}</SpanFlags>
        </TextFlags>
      </StyledLink>
    </WrapperDisplayFlags>
  );
}

export default DisplayFlags;
