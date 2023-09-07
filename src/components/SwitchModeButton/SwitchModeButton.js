import React, { useContext } from "react";

import { Box, IconButton, Switch, useTheme } from "@mui/material";
import DarkIcon from "@mui/icons-material/Brightness4";
import LightIcon from "@mui/icons-material/Brightness7";

// import { ThemeContext } from "../../ThemeContext";

import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../../store/reducers/themeSlice";

export const SwitchModeButton = () => {
  const theme = useTheme();

  const dispatch = useDispatch();
  // const darkMode = useSelector((state) => state.theme.darkMode);

  return (
    // <Box
    //   sx={{
    //     display: "flex",
    //     marginTop: '0.8vh',
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   {/* <h4>{darkMode ? "Dark" : "Light"} Theme</h4> */}
    //   {/* {theme.palette.mode} mode */}
      
    //   <IconButton onClick={() => dispatch(toggleTheme())}
    //     sx={{ ml: 1 }}
    //     color="inherit"
    //   >
    //     {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
    //   </IconButton>
    // </Box>

    <IconButton onClick={() => dispatch(toggleTheme())}
        sx={{ ml: 1 }}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? <LightIcon /> : <DarkIcon />}
      </IconButton>
  );
};
