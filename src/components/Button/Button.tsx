import styled from "styled-components"
import { calcColor, isLighterColor } from "../../helpers"
import React, { ReactElement } from "react";


type COLORS = "primary" | "default" | "danger" | "warning" | "success" | "secondary" | "dark"

const Sizes = {
    xs:'12px',
    lg: '22px',
    xl: '28px',
    xxl: '36px'
}
interface ButtonProps extends  React.ComponentPropsWithoutRef<"button">{
    children:any
    color:COLORS,
    suffix?: ReactElement,
    rounded?: boolean,
    size?: 'xs' | 'lg' |'xl' |'xxl',
    link?: boolean
}

const StyledButton = styled.button<ButtonProps>`
    

    background-color: ${(props)=>props.theme[props.color]};
    color:${(props)=>isLighterColor(props.theme[props.color])? "#000000" :"#fff" };
    cursor:pointer;
    border:1px solid ${(props)=>calcColor(props.theme[props.color],-20)};
    padding:8px 16px;
    box-shadow:  0 4px 15px -3px ${(props)=>calcColor(props.theme[props.color],20)}50, 0 4px 6px -4px ${(props)=>calcColor(props.theme[props.color],20)}50;
    
    ${props=> props.rounded && `
        border-radius:24px;
    `}

    ${props=> props.size && `
        font-size: ${Sizes[props.size]};
        padding:calc(${Sizes[props.size]} / 2) calc(${Sizes[props.size]} * 1.5);
    `}
    
    &:hover,&:active{
        background-color: ${(props)=>calcColor(props.theme[props.color],-40)};
        border-color: ${(props)=>calcColor(props.theme[props.color],-40)};
        box-shadow:  0 10px 15px -3px ${(props)=>calcColor(props.theme[props.color],20)}20, 0 4px 6px -4px ${(props)=>calcColor(props.theme[props.color],20)};
    
    
    }

`


const Button = (props:ButtonProps) =>{
    return <StyledButton {...props}>{props.children}</StyledButton>
}


export default Button