import React, { FC } from "react";
import styled, { css } from "styled-components";
import {calcColor}  from "../helpers/colors";


type ButtonProps={
    color:'primary'| 'success' | 'info'| 'warning'| 'danger' | 'ghost'
    size?:any,
    children?:any,
    onClick?:any
}

const GhostButton = styled.button<ButtonProps>`
    background-color:transparent;
    border-color:none;
    color:${props=>props.theme[props.theme.mode].primaryText};
    border:none;
    font-size: 1.5rem;
    ${props=>props.size && css`
        ${props.size == 'xs' && `
            padding: calc(0.6875rem / 3)  calc(1.125rem/3);
            
        `}
    `}
    line-height: 1rem;
    transition-duration: .15s;
    transition-property: background-color,border-color,box-shadow,color;
    transition-timing-function: ease-in;
    appearance: none;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
    font-family: Open Sans,sans-serif;
    font-weight: 700;
    overflow: hidden;
    position: relative;
    &:hover{
        color:${props=>props.theme[props.theme.mode].colors.primary};
    }


`

const StyledButton = styled.button<ButtonProps>`
    background-color:${(props:any)=>props.color == 'ghost' ? 'transparent': props.theme[props.theme.mode].colors[props.color]};
    border-color:${(props:any)=> props.theme[props.theme.mode].colors[props.color]} !important;
    color: #fff;
    margin-top:0 !important;
    padding: 0.6875rem 1.125rem;
    border-style: solid;
    border-width: 0.0625rem;
    border-radius: 0.25rem;
    font-size: .875rem;
    ${props=>props.size && css`
        ${props.size == 'xs' && `
            padding: calc(0.6875rem / 3)  calc(1.125rem/3);
            font-size: calc(.875rem/3);
        `}
    
    `}


    line-height: 1rem;
    transition-duration: .15s;
    transition-property: background-color,border-color,box-shadow,color;
    transition-timing-function: ease-in;
    appearance: none;
    text-align: center;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    cursor: pointer;
    font-family: Open Sans,sans-serif;
    font-weight: 700;
    overflow: hidden;
    position: relative;

    &:hover{
        background-color:${(props:any)=> calcColor(props.theme[props.theme.mode].colors[props.color],20)};
        border-color:${(props:any)=> calcColor(props.theme[props.theme.mode].colors[props.color],20)} !important;
    }

    &:focus{
        background-color:${(props:any)=> calcColor(props.theme[props.theme.mode].colors[props.color],-20)}};
        border-color:${(props:any)=> calcColor(props.theme[props.theme.mode].colors[props.color],-20)}};
    }

    &:active{
        background-color:${(props:any)=> calcColor(props.theme[props.theme.mode].colors[props.color],-30)}};
        border-color:${(props:any)=> calcColor(props.theme[props.theme.mode].colors[props.color],-30)}};
    }
`

const Button:FC<ButtonProps> =(props:ButtonProps)=>{
    if(props.color == "ghost"){
        return <GhostButton {...props}></GhostButton>
    }

    return <StyledButton {...props} >{props.children}</StyledButton>
}


export default Button