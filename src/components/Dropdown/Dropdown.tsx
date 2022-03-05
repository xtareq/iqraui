import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, Children, useEffect, useState, createRef, Fragment, ReactElement } from "react";
import styled, { css } from "styled-components";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { calcColor } from "../helpers/colors";


type DropdownContextTypes = {
    show : boolean
    close: () => void
    open?: () => void
    toggle?: () => void
}
const DropdownContext = createContext<DropdownContextTypes>({
    show:false,
    close:() =>{},
    toggle:() =>{},
})

const StyledDropdown = styled.div<{show:boolean}>`
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
        background: ${(props:any)=> props.theme[props.theme.mode].bodyBg};
        border: 1px solid ${(props:any)=> props.theme[props.theme.mode].bodyBg};
        padding: 0.6rem 1rem;
        border-radius:0.4rem;
        display:flex;
        align-items:center;
        justify-content:space-between;
        svg#down{
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
const StyledOption = styled.li`

    cursor:pointer;
    padding: 8px;
    a{
        color:${(props:any)=> props.theme[props.theme.mode].primaryText};
        text-decoration:none;
    }
    &:hover{
        background-color: ${(props:any)=> calcColor(props.theme[props.theme.mode].contentBgAlt,-10)};
       
    }
`
const StyledContainer = styled(motion.ul)`
    position:absolute;
    padding:0;
    margin:0;
    width:100% !important;
    list-style:none;
    margin-top:2rem;
    background-color:${(props:any)=> props.theme[props.theme.mode].contentBg};
    border-width:1px;
    border-style:solid;
    border-color:${(props:any)=> props.theme[props.theme.mode].contentBg};
    box-shadow: 0 0 5px 1px ${(props:any)=> calcColor(props.theme[props.theme.mode].contentBgAlt,-10)};
    border-radius:8px;
    z-index:60;
    top:1.3rem;
    &::after{
        content:"";
        width:16px;
        height:16px;
        position:fixed;
        display:inline-block;
        background:${(props:any)=> props.theme[props.theme.mode].contentBg};
        border-width:1px;
        border-style:solid;
        clip-path: polygon(50% 0%, 0 46%, 100% 49%);
        border-color:${(props:any)=> props.theme[props.theme.mode].contentBg};
        box-shadow: 0 0 5px 1px ${(props:any)=> calcColor(props.theme[props.theme.mode].contentBgAlt,-10)};
        border-bottom:0;
        top:-8px;
        right:8px;
        z-index:0;
    }
    
`

type SelectItem = {
    label:string
    value:string | number
}
type DropdownProps = {
    children:any,
    title:string | ReactElement
}


const Items = (props:any) => {
    const ctx = useContext(DropdownContext)

    return <div>
            <StyledContainer initial={{x:100, scale:0}} transition={{duration:0.2}} animate={{x:-10,scale:1}} exit={{x:100,scale:0}}>
                <span/>
                {Children.map(props.children,(child)=>{
                    return child
                })}
            </StyledContainer>
      
    </div>
}

const Item = (props:any) => {
    const ctx = useContext(DropdownContext)
    return <StyledOption onClick={()=>ctx.close()}>
        {props.children}
    </StyledOption>
}

const Dropdown = (props:DropdownProps) => {

    const [show, setShow] = useState(false)
    const open = ()=>setShow(true)
    const close = ()=>setShow(false)
    const toggle = ()=>setShow(!show)

    
    const menuRef:any = createRef()
    useOnClickOutside(menuRef,()=>close())
    
    return <DropdownContext.Provider value={{show,close,toggle}}>

            <DropdownContext.Consumer>
                {(value)=>{
                return <StyledDropdown show={value.show} ref={menuRef}>
                   
                    <button   onClick={()=> value.toggle && value.toggle()} >
                    {props.title}
                        <svg id="down" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><polyline points="6 9 12 15 18 9"></polyline></svg>
                        </button>
                        <AnimatePresence>
                    {value.show && props.children}
                    </AnimatePresence>

                </StyledDropdown>
                }}
            </DropdownContext.Consumer>


    </DropdownContext.Provider> 
    


}



Dropdown.displayName = "Dropdown"
Dropdown.Items = Items
Dropdown.Item = Item


export default Dropdown