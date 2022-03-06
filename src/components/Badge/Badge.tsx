import React, { FC } from 'react';
import styled from 'styled-components';

const StyledBadge = styled.span<any>`
  position:relative;
  .count{
    overflow: hidden;
    position: absolute;
    top: -8px;
    right: 1px;
    transform: translate(50%,-50%);
    transform-origin: 100% 0%;
    z-index: auto;
    width: 16px;
    height: 16px;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${props=>props.theme[props.theme.mode].colors[props.color]};
    border-radius: 50%;
    box-shadow: 0 0 0 1px ${props=>props.theme[props.theme.mode].colors[props.color]};
    span{
        margin:50% auto;
        
      transition: none 0s ease 0s;
    }
  }
`;

const Badge:FC = (props:any) => {

  return (
    <StyledBadge color={props.color?props.color:'danger'}>
      {props.count > 0 && (
        <sup className={'count'}>
          <span>{props.count > 99 ? "99+" : props.count}</span>
        </sup>
      )}
      {props.children}
    </StyledBadge>
  );
};

export default Badge;