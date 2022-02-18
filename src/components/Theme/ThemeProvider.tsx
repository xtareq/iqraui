import React from "react";
import { ThemeProvider } from "styled-components"

import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: ${(props:any)=>props.theme?.mode == "light"? "#ffffff": "#000f10"};
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  body{
      color:${props=> props.theme.mode == "light"? "#444444" : "#ffffff"};
  }

`;


const RuiProvider = (props:any) =>{

    const theme = {
        mode:'light',
        default:"#ffffff",
        primary:"#6366f1",
        danger:"#f43f5e",
        warning:"#eab308",
        success:"#22c55e",
        secondary:"#8b5cf6",
        dark:"#0f172a",
    }

    return <ThemeProvider theme={props.theme? {...theme,...props.theme} :theme}>
        <GlobalStyle/>
        {props.children}
    </ThemeProvider>

}

export default RuiProvider