import React,{ useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { calcColor } from "../helpers/colors";


const StyledSelect = styled.div<{show:boolean}>`
    position:relative;
    button{
        width:100%;
        font-family: Open Sans,sans-serif;
        font-size: .9375rem;
        font-weight: 400;
        line-height: 1.25rem;
        color:${(props:any)=> props.theme[props.theme.mode].primaryText};
        
        overflow: hidden !important;
        cursor:pointer;
        position: relative;
        background: ${(props:any)=> props.theme[props.theme.mode].bodyBg};
        border: 1px solid ${(props:any)=> props.theme[props.theme.mode].bodyBg};
        padding: 0.6rem 1rem;
        border-radius:0.4rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        svg{
            transition: transform 0.5s;
            ${(props:any)=> props.show && css`
                transform:rotate(180deg);

            `}
        }


        &:hover{
            background: ${(props:any)=> calcColor(props.theme[props.theme.mode].contentBgAlt,-20)};
        }
    }
`
const StyledOption = styled.li<{active:boolean}>`

    cursor:pointer;
    padding: 8px;
   ${props=> props.active && css`
        background-color: ${(props:any)=> calcColor(props.theme[props.theme.mode].contentBgAlt,-10)};
   `}
       

    &:hover{
        background-color: ${(props:any)=> calcColor(props.theme[props.theme.mode].contentBgAlt,-10)};
       
    }

`
const StyledContainer = styled.ul`
    position:absolute;
    padding:0;
    margin:0;
    width:100% !important;
    list-style:none;
    background-color:${(props:any)=> props.theme[props.theme.mode].contentBg};
    border-width:1px;
    border-style:solid;
    border-color:${(props:any)=> props.theme[props.theme.mode].contentBg};
    box-shadow: 0 0 5px 1px ${(props:any)=> calcColor(props.theme[props.theme.mode].contentBgAlt,-10)};
    border-radius:8px;
    margin-top:5px;
`

type SelectItem = {
    label:string
    value:string | number
}
type SelectProps = {
    name:string,
    onChange:(val:SelectItem)=>void,
    initialValue?: string | number,
    items:SelectItem[]
}



const Select = (props:SelectProps) => {
    const [current, setCurrent] = useState<SelectItem>()
    const [show, setShow] = useState(false)

    useEffect(()=>{
            if(!props.initialValue){
                setCurrent(props.items[0])
            }else{
                const index = props.items.findIndex(v=>v.value==props.initialValue)
                setCurrent(props.items[index])
            }
                   
    },[])

    const handleClick=(item:SelectItem)=>{
        setCurrent(item)
        setShow(false)
        props.onChange(item)
    }
    
    
    
    return <StyledSelect show={show}>
            <button  onClick={()=>setShow(!show)} >
                <span>{current?.label}</span>
                
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="6 9 12 15 18 9"></polyline></svg>
            </button>
            
           {show && <StyledContainer>
               
               {props.items.map((item,key)=>{
                   return <StyledOption active={current?.value == item.value} onClick={()=>handleClick(item)} value={item.value} key={key}>
                       {item.label}
                   </StyledOption>
               })}
            </StyledContainer>}
    </StyledSelect>

}



Select.displayName = "Select"


export default Select