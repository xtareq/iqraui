import React, { FC } from "react";
import styled, { css } from "styled-components";
import {calcColor}  from "../helpers/colors";


interface ButtonProps extends React.ComponentPropsWithoutRef<"button">{
    icon:any
}

const StyledButton = styled.button<ButtonProps>`
        border-radius:50%;

        border-width:0;
        padding:5px;
        cursor:pointer;
        background-color:transparent;
        color: ${(props:any)=> props.theme[props.theme.mode].primaryText};
        width:48px;
        height:48px;

        span{
            color: ${(props:any)=> props.theme[props.theme.mode].primaryText};
            font-size:24px;
        }

    &:hover{
        background-color:${(props:any)=> calcColor(props.theme[props.theme.mode].colors.primary,20)}50;
    }
`

const Button:FC<ButtonProps> =(props:ButtonProps)=>{

    return <StyledButton {...props} ><span>{props.icon}</span></StyledButton>
}


export default Button