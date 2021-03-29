import React from "react";
import Nav from "../components/Nav";
import styled from "styled-components";

const WrapperApp = styled.div`
  font-family: var(--titleText);
  background-color: #202c37;
  height: 100vh;
`;

function App() {
  return (
    <WrapperApp>
      <Nav />
    </WrapperApp>
  );
}

export default App;
