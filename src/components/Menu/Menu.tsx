import React,{createElement, Children, createContext, useContext, useEffect, useState } from "react"
import styled, { css } from "styled-components"
import { calcColor } from "../helpers/colors"



const MenuContext = createContext<any>({})

const StyledMenu = styled.div<any>`
    padding-top:1rem;
`
const StyledHeader = styled.p<any>`
        font-size:10px;
        text-transform:uppercase;
        color:${props=> props.theme[props.theme.mode].muteText};
        margin-bottom:0.5rem;
`

const StyledItems = styled.ul<any>`
    margin:0;
    padding:0;
    list-style:none;
`
const StyledItem = styled.li<any>`
    
    padding: 0.5rem 1rem;
    margin-bottom:0.5rem;
    color:${props=> props.theme[props.theme.mode].primaryText};
    cursor: pointer;
    font-size:13px;
    display:flex;
    gap:1rem;

    a{
     text-decoration:none;  
     color:${props=> props.theme[props.theme.mode].primaryText};
     cursor: pointer;
     font-size:13px; 
     display:flex;
     align-items:center;
     gap:1rem;
     width:100%;
    }

 
    ${props=>props.active && css`
        background-color:${props.theme[props.theme.mode].colors.primary};
        color:#fff;
        border-radius:12px;
        box-shadow: 0 0.5rem 1rem 0 ${calcColor( props.theme[props.theme.mode].contentBg,-15)};
        a{
            color:#fff;
        }
    ` }

    ${props=> !props.active && css`
        &:hover{
            background-color:${props=>props.theme[props.theme.mode].colors.primary}10;
            border-radius:12px;
        
        }
    
    `}

`

const MenuItem = (props:any) =>{
    const ctx = useContext(MenuContext)
    return  <StyledItem onClick={()=>ctx.increment(props.index)} header={props.header} active={ctx.index==props.index}>
        {props.children}
    </StyledItem>
}

const Items= (props:any) => {
    return <StyledItems>
        {Children.map(props.children, (child, index)=>{
            return child.props.title? <StyledHeader>{child}</StyledHeader>:<MenuItem index={index}>{child}</MenuItem>
        })}
    </StyledItems>
}

const Item= (props:any) => {
    return <>{props.children}</>
    
}

const Menu = (props:any) => {
    const [index, setIndex] = useState(0)

    const increment = (id:number) => {
        setIndex(id)
    }

    return <MenuContext.Provider value={{index, increment}}>
        <StyledMenu>{props.children}</StyledMenu>
    </MenuContext.Provider>
     
     

}

const Divider = (props:any) => {
    return <>{props.title}</>
}
Menu.displayName = "Menu"
Menu.Divider = Divider
Menu.Items = Items
Menu.Item = Item

export default Menu