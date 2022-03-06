import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const getColor = (props:any)=>{
    return props.color?props.theme[props.theme.mode].colors[props.color] :props.theme[props.theme.mode].colors.primary
}


const StyledDivider = styled.div<any>`

    display: flex;
    clear: both;
    width: 100%;
    min-width: 100%;
    margin: 24px 0;


    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${props=>props.theme[props.theme.mode].primaryText};
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: "tnum";
    border-top: 1px solid ${props=>props.theme[props.theme.mode].bodyBg};

    &.with-text{
        display: flex;
        margin: 16px 0;
        color: ${props=>props.theme[props.theme.mode].primaryText};
        font-weight: 500;
        font-size: 16px;
        white-space: nowrap;
        text-align: center;
        border-top: 0;
        border-top-color: ${props=>props.theme[props.theme.mode].bodyBg};
    
        &::before{
            position: relative;
            top: 50%;
            width: 50%;
            ${props=> props.left && css`
            width:5%;
            ` }
            ${props=> props.right && css`
            width:95%;
            ` }
            border-top: 1px solid transparent;
            border-top-color: inherit;
            border-bottom: 0;
            transform: translateY(50%);
            content: "";
    
        }
    
        &::after{
            position: relative;
            top: 50%;
            width: 50%;
            ${props=> props.left && css`
                width:95%;
            ` }
            ${props=> props.right && css`
            width:5%;
        ` }
            border-top: 1px solid transparent;
            border-top-color: inherit;
            border-bottom: 0;
            transform: translateY(50%);
            content: ""; 
        }

        span{
            display: inline-block;
            padding: 0 1em;
        }
    }




`;

const Divider:FC = (props:any) => {
    let text = 'none'
    if(props.text){
        text = props.text
    }
  return <StyledDivider {...props} className={`${props.children && 'with-text'}`} text={text}>
       
       {props.children &&  <span>{props.children}</span>}
  </StyledDivider>
};

export default Divider;
