import React,{ Children, FC } from "react"
import styled, { css } from "styled-components"




const StyledRow = styled.div<any>`
    display: flex;
    flex-wrap: wrap;
    margin-right:${props=> '-'+props.space.x || '-15px'};
    margin-left: ${props=> '-'+props.space.x || '-15px'};
    row-gap: calc(${props=> props.space.y || '15px'} * 2);
    .col{
        padding-left: ${props=> props.space.x || '15px'};
        padding-right: ${props=> props.space.x || '15px'};
    }
`


const StyledCol = styled.div<any>`
    box-sizing: border-box;
    ${props=> props.span && css`
        flex-basis: ${100/(12/props.span)}%;
        flex-grow:0;
        max-width:${100/(12/props.span)}%;
    `}

`
const Col:FC = (props:any) => {
    return <StyledCol className="col" {...props}>
       {props.children}
    </StyledCol>
}

const Row:FC = (props:any) => {

    return <StyledRow {...props}>
        {props.children}
    </StyledRow>
}

export {Row, Col}