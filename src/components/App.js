import React, { useState } from "react";
import Nav from "../components/Nav";
import Flags from "./Flags";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { ResetStyles } from "../styles/reset";
import { lightTheme, darkTheme } from "../styles/theme";

const WrapperApp = styled.div`
  font-family: "Poppins", sans-serif;
`;

function App() {
  const [theme, setTheme] = useState("light");

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <ResetStyles />
        <WrapperApp>
          <Nav handleChangeTheme={handleChangeTheme} theme={theme} />
          <Flags />
        </WrapperApp>
      </>
    </ThemeProvider>
  );
}

export default App;
