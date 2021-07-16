import "./App.css";
import HomeCard from "./components/HomeCard";
import styled, { ThemeProvider } from "styled-components";
import WebTheme from "./components/WebTheme";
import { useState } from "react";

const Application = styled.div`
  background: ${({ theme }) => theme.background};
`;

function App() {
  const [theme, setTheme] = useState(WebTheme["light"]);

  return (
    <ThemeProvider theme={theme}>
      <Application className="App">
        <HomeCard theme={theme} setTheme={setTheme} WebTheme={WebTheme} />
      </Application>
    </ThemeProvider>
  );
}

export default App;
