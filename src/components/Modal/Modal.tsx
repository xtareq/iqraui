import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { forwardRef, useRef } from "react"
import { useEffect } from "react"
import { useImperativeHandle } from "react"
import { useState } from "react"
import styled from "styled-components"
import { calcColor } from "../helpers/colors"



const CloseIcon = (props:any) => {
    return <>
    <svg {...props} stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
    </>
}


const StyledDrawer=styled.div<any>`
    overflow: hidden;
    overflow-x:hidden;
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:100;
    width: 100%;
    min-width:0;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0 0 6px #00000030;

    .overlay{
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0;
        background:#000000b0;
        z-index:110;

        span{
            position:absolute;
            right:0;
            padding:20px;
    

            svg{
                font-size:33px;
                color:white;
                opacity:0.5;
                &:hover{
                    opacity:1;
                    color: ${props=>props.theme[props.theme.mode].colors.danger};
                }
            }

        }
    }

    .inner{
        position:absolute;
        background:${props=>props.theme[props.theme.mode].contentBgAlt};
        width:500px;
        height:400px;
        z-index:120;
        overflow-y:auto;

        .xsNtas{
            height:50px;
        }
    }
`
const SyledHeader = styled.div`
    padding: 1rem 1.5rem;
    border-bottom: 1px solid ${(props:any)=> calcColor(props.theme[props.theme.mode].bodyBg,0)};
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    color: ${(props:any)=>props.theme[props.theme.mode].primaryText};
    font-family: Open Sans,sans-serif;
    font-size:1.2rem;

    line-height: 1.5rem;
    display:flex;
    justify-content:space-between;
    align-items:center;

    .close{
        cursor:pointer;
        font-size:1.5rem;

        &:hover{
            color:${(props:any)=>props.theme[props.theme.mode].colors.danger};
        }
    }

`

const Modal = forwardRef((props:any,ref:any)=>{
    const [show, setShow]= useState(false)
    const toggle = ()=>setShow(!show)
    const open = () => {
        if(props.onOpen){
            props.onOpen();
        }
        setShow(true)
    }
    const close = () => {
        if(props.onClose){
            props.onClose()
        }
        setShow(false)
    }
    const dRef = useRef(null)

    console.log()
 
    useEffect(()=>{
        document.body.style.overflowY='hidden'
        document.body.style.overflowX='hidden'

        return () =>{
            document.body.style.overflowY='auto'
            document.body.style.overflowX='auto'
        }
    })

    useEffect(()=>{
        if(props.visible){
            setShow(props.visible)
        }
    })

    // useEffect(() => {
    //     /**
    //      * Alert if clicked on outside of element
    //      */
    //     function handleClickOutside(event) {
    //         if (dRef.current && !dRef.current.contains(event.target)) {
    //             close()
    //         }
    //     }

    //     // Bind the event listener
    //     document.addEventListener("mousedown", handleClickOutside);
    //     return () => {
    //         // Unbind the event listener on clean up
    //         document.removeEventListener("mousedown", handleClickOutside);
    //     };
    // }, [dRef]);

    // useOnClickOutside(dRef,close)


    let animate = {
        initial:{
            opacity:0,
            scale:0,
        },
        animate:{
            opacity:1,
            scale:1
        },
        exit:{
            opacity:0,
            scale:2
        }
    }

    useImperativeHandle(ref,()=>({
        open,close
    }))

    return <div ref={dRef}>
       <AnimatePresence>
            {show && <StyledDrawer {...props} transition={{duration:0.3}} as={motion.div} initial={animate.initial} animate={animate.animate} exit={animate.exit}>
            {props.backdrop && <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}  className="overlay">
                    <span>
                        <CloseIcon onClick={close} />
                    </span>
                </motion.div>}
               <div className={'inner'}>
                    {props.title && <SyledHeader>{props.title}   <CloseIcon className="close" onClick={close} /></SyledHeader>}
                    {props.children}
               </div>
           </StyledDrawer>}
       </AnimatePresence>
    </div>
})

Modal.displayName = "Modal"



export default Modal