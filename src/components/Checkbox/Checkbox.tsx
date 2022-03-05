import React,{ forwardRef, useEffect, useState } from 'react'
import styled,{ css} from 'styled-components'


const getColor = (props:any)=>{
    return props.color?props.theme[props.theme.mode].colors[props.color] :props.theme[props.theme.mode].colors.primary
}



const StyledCheckbox= styled.label`
display:inline-flex;
span.checkbox{
  font-size:16px;
  input[type=checkbox]{
    appearance: none;
    background-color: #fff;
    margin: 0;
    display: grid;
    place-content: center;
    font: inherit;
    color:   ${props=> getColor(props)}50;
    width: 1.15em;
    height: 1.15em;
   
    transform: translateY(-0.075em);
    &::before{
      content: "";
      width: 0.65em;
      height: 0.65em;
      transform: scale(0);
      transform-origin: bottom left;
      border-color: ${props=> getColor(props)};
      background-color:  ${props=>getColor(props)};
      transition: 120ms transform ease-in-out;
      box-shadow: inset 1em 1em ${props=>getColor(props)};
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      
    }
    &:checked{
      border: 0.15em solid ${props=> getColor(props)};
      border-radius: 0.15em;
      background-color: #fff;
    }
    &:checked::before {
      transform: scale(1);
    }
    &:hover{
      border-color: ${props=> getColor(props)};
    }
  }
}
span.text{
  padding-left:10px
}
}
`


const Checkbox = forwardRef((props:any, ref)=>{
const { children, color, checked,...inputProps} = props


return <StyledCheckbox color={color}>
  <span className='checkbox'>
    <input  type={'checkbox'} {...inputProps} ref={ref}  />
    <span className='inner'></span>
  </span>
  <span className='text'>{children}</span>
</StyledCheckbox>
})

Checkbox.displayName="Checkbox"

export default Checkbox