import React, { useState, useMemo, createContext } from 'react';
import './styles/App.css';

import {
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";

import { CssBaseline } from '@mui/material';
import { useSelector, useDispatch } from "react-redux";

// import { ThemeContext } from './ThemeContext';

import { Container, Typography, Box, Link } from '@mui/material';

import { darkTheme } from "./theme/theme-dark";
import { lightTheme } from "./theme/theme-light";
import { SwitchModeButton } from './components/SwitchModeButton/SwitchModeButton';


const App = () => {
  const [mode, setMode] = useState("light");

  // const [theme, setTheme] = useState("light");
  // const value = { theme, setTheme };

  const darkMode = useSelector((state) => state.theme.darkMode);

  useMemo(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode]);

  // const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <SwitchModeButton />
      </Container>

    </ThemeProvider>

    // <ThemeContext.Provider value={value}   >
    //   <SwitchModeButton />
    // </ThemeContext.Provider>
  );
};

export default App;