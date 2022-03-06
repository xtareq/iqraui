import React from "react";
import styled, { StyledComponent, StyledComponentProps } from "styled-components";
import { calcColor } from "../helpers/colors";




const Card:any = styled.div<any>`
    background-color: ${(props:any)=> props.theme[props.theme.mode].contentBg};
    border: 0.0625rem solid ${(props:any)=> calcColor(props.theme[props.theme.mode].contentBg,-8)};
    border-radius: 0.25rem;
    box-shadow: none;
    color: ${(props:any)=>props.theme[props.theme.mode].primaryText};
    font-family: Open Sans,sans-serif;
    font-size: .9375rem;
    font-weight: 400;
    line-height: 1.25rem;
`

Card.Header = styled.div`
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${(props:any)=> calcColor(props.theme[props.theme.mode].bodyBg,0)};
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: ${(props:any)=>props.theme[props.theme.mode].primaryText};
    font-family: Open Sans,sans-serif;
    font-size: .9375rem;
    font-weight: 600;
    line-height: 1.5rem;

`

Card.Body = styled.div`
    flex: 1;
    -ms-flex: 1 1 auto;
    overflow: auto;
    padding: 1rem 1.5rem;
    position: relative;

`


export default Card