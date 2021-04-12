import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*,*::after,*::before {
  box-sizing: border-box;

}

body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
}

`;
