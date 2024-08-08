import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { PostContextProvider } from "./contexts/PostsContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <PostContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PostContextProvider>
    </ThemeProvider>
  )
}
