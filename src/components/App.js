import React from "react";
import Nav from "../components/Nav";
import Flags from "./Flags";
import styled from "styled-components";

const WrapperApp = styled.div`
  font-family: var(--titleText);
  background-color: #202c37;
`;

function App() {
  return (
    <WrapperApp>
      <Nav />
      <Flags />
    </WrapperApp>
  );
}

export default App;
