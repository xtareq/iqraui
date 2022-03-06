import styled,{css} from 'styled-components'
import React,{ FC, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { calcColor } from '../helpers/colors'


const StyledInput = styled(motion.div)<any>`
  margin: -4px -8px;
    display: flex;
    position: relative;
    width:100%;
    min-width:0;
    color:  #cfcfcf;
    padding: 4px 8px;
    border-width: 1px;
    border-style: solid;
    border-radius: 0.25rem;
    border-color:${props=> calcColor(props.theme[props.theme.mode].contentBgAlt,-20) };
    background:${props=> props.theme[props.theme.mode].contentBgAlt };
    ${props=>props.error == 'true' && css`
       border-color: ${props.theme[props.theme.mode].colors.danger};
    `}
    
    ${props=> props.rounded && css`
        border-radius:20px;
    `}
    ${props=> props.large && css`
        font-size:16px;
        padding: 6px 8px;
    `}
    span.prefix, span.suffix{
      display: flex;
      flex: none;
      align-items: center;
    }
    span.prefix{
      margin-right: 4px;
    }
    span.suffix{
      margin-left: 4px;
    }
    input{
      padding: 0;
      border: none;
      outline: none;  
      position: relative;
      display: block;
      flex:1 1 auto;
      max-width: 100%;
      min-width: 0;
      color:${props=>props.error == 'true'? props.theme[props.theme.mode].colors.danger : props.theme[props.theme.mode].primaryText};
      font-size:14px;
      ${props=> props.large && css`
         font-size:16px;
      `}
      line-height: 1.5715;
      margin:0;
      background-color: transparent;
      background-image: none;
    }
    &:hover{
      border-width: 1px;
      border-style: solid;
      border-color: ${props=>props.error == 'true'? props.theme[props.theme.mode].colors.danger : props.theme[props.theme.mode].colors.primary};
      color: #484848;
    }
    &:focus, &:focus-within{
      outline-offset:2px;
      outline:2px solid ${props=>props.error == 'true'? props.theme[props.theme.mode].colors.danger+50 : props.theme[props.theme.mode].colors.primary+'50'};
      border-color: ${props=>props.error == 'true'? props.theme[props.theme.mode].colors.danger : props.theme[props.theme.mode].colors.primary};
      box-shadow: 0 0 1px 2px ${props=>props.theme[props.theme.mode].colors.primary}05;
    }
`

const Input:FC = forwardRef((props:any, ref) =>{
   const { animate, initial, error, rounded, large, transition, exit, prefix, suffix, ...inputProps } = props
    return (
      <StyledInput className='inPut-zo' error={error?'true':'false'} initial={initial} animate={animate} transition={transition} exit={exit} rounded={rounded? 'true' :''}  large={large?'true':''}>
        {prefix && <span className='prefix'>{prefix}</span>}
          <input {...inputProps} ref={ref} />
        {suffix && <span className='suffix'>{suffix}</span>}
    </StyledInput>
    )
   
})
Input.displayName ="Input"

export default Input