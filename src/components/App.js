import React from "react";
import Nav from "../components/Nav";
import Flags from "./Flags";
import NationDetails from "./NationDetails";
import NotFound from "./Error404";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/global";
import { ResetStyles } from "../styles/reset";
import { lightTheme, darkTheme } from "../styles/theme";
import useDarkMode from "./useDarkMode";
import { BrowserRouter as Router, Route,Switch } from "react-router-dom";

const WrapperApp = styled.div`
  font-family: "Poppins", sans-serif;
`;

function App() {
  const [theme, handleChangeTheme] = useDarkMode();

  const themeMode = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyle />
        <ResetStyles />
        <Router>
          <WrapperApp>
              <Nav handleChangeTheme={handleChangeTheme} theme={theme} />
            <Switch>
              <Route path={"/"} exact component={Flags} />
              <Route path={"/:id"} component={NationDetails} />
              <Route component={NotFound} />
            </Switch>
          </WrapperApp>
        </Router>
      </>
    </ThemeProvider>
  );
}

export default App;
