import React,{ createContext, FC, useEffect, useState } from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "./global"



const ThemeContext:any = createContext({})

export type ThemeModes ='light' | 'dark' | 'cosmos' | 'nebula'

export type ThemeProps = {
    mode:ThemeModes,
    light?:{},
    dark?:{},
    cosmos?:{},
    nebula?:{},
    sidebar?:boolean
}

export type ThemeContextTypes = ThemeProps & {
    changeTheme:(mode:ThemeModes)=>void | undefined ,
    toggleSidebar:()=>void | undefined
}


const colors = {
    primary:"#3366ff",
    success:"#00d68f",
    info:"#0095ff",
    warning:"#ffaa00",
    danger:"#ff3d71",
    disabled:""
}

const currentTheme = (mode="light"):ThemeModes =>{
    let theme = ""
    if(typeof window !== 'undefined'){
        theme = localStorage.getItem('theme') || mode
    }
    return theme as ThemeModes
}


const TProvider:FC =(props:any) => {

    const [current, setCurrent] = useState<ThemeModes>(currentTheme(props.mode))
    const [sidebar, setSidebar] = useState<Boolean>(false)



    const theme:ThemeProps = {
        mode:current,

        light:{
            primaryText:'#222b45',
            muteText:'#8f9bb3',
            bodyBg:"#edf1f7",
            contentBg: "#ffffff",
            contentBgAlt:"#f7f9fc",
            colors:{
                ...colors
            }
        },
        dark:{
            primaryText:'#ffffff',
            muteText:'#8f9bb3',
            bodyBg:"#151a30",
            contentBg: "#222b45",
            contentBgAlt:"#192038",
            colors:{
               ...colors,
                primary:"#3366ff"
            }
        },
        cosmos:{
            primaryText:'#ffffff',
            muteText:'#8f9bb3',
            bodyBg:"#1b1b38",
            contentBg: "#323259",
            contentBgAlt:"#252547",
            colors:{
                ...colors,
                primary:"#a16eff"
            }
        },
        nebula:{
            primaryText:'#ffffff',
            muteText:'#8f9bb3',
            bodyBg:"#150240",
            contentBg: "#392973",
            contentBgAlt:"#0e1748",
            colors:{
                ...colors,
                primary:"#F21BA7"
            }
        }
  
    }
    const value = props.theme ? {...theme,sidebar,...props.theme} : {...theme,sidebar}


    const changeTheme = (mode:ThemeModes)=>{
            setCurrent(mode)
            if(typeof window !=='undefined'){
                localStorage.setItem('theme',mode)
            }
    }

    const toggleSidebar = () =>{
        setSidebar(!sidebar)
    }

    return <ThemeContext.Provider value={{...value,mode:current,changeTheme,toggleSidebar}}>
                <ThemeContext.Consumer>
                    {(value:any)=>{
                    return <ThemeProvider  theme={value}>
                            <GlobalStyle/>
                            {props.children}
                        </ThemeProvider>
                    }}
                </ThemeContext.Consumer>
            </ThemeContext.Provider> 
}



export default TProvider