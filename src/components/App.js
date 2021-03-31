import React from "react";
import Nav from "../components/Nav";
import Flags from "./Flags";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { ResetStyles } from "../styles/reset";
import { lightTheme, darkTheme } from "../styles/theme";
import useDarkMode from './useDarkMode';

const WrapperApp = styled.div`
  font-family: "Poppins", sans-serif;
`;

function App() {
 const [theme,handleChangeTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

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
