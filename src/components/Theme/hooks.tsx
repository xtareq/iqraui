import React,{ useContext } from "react";
import { ThemeContext } from "styled-components";
import { ThemeContextTypes, ThemeProps } from "./TProvider";



export function useTheme(){
    const ctx:ThemeContextTypes = useContext(ThemeContext)

    return {changeTheme:ctx.changeTheme,mode:ctx.mode,toggleSidebar:ctx.toggleSidebar,sidebar:ctx.sidebar}

}