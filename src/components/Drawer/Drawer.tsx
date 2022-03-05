import React from "react"
import { AnimatePresence, motion } from "framer-motion"
import {  useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import { FiX } from "react-icons/fi"
import styled from "styled-components"




const StyledOverlay = styled(motion.div)<any>`
&.overlay{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: #00000080;
    z-index:40;
  }
  

`
const StyledDrawer=styled.div<any>`
    overflow: hidden;
    overflow-x:hidden;
    position:fixed;
    top:0;
     ${props=>props.position && `
     ${[props.position]}:0;
     `}
    width: 320px;
    z-index:50;
    min-width:0;
    height:100vh;
    background:#fff;
    box-shadow: 0 0 6px #00000030;
    *{
        overflow-x:hidden;
    }

    .inner{
        position:absolute;
        background:${props=> props.theme[props.theme.mode].contentBg};
        width:100%;
        z-index:450;
        min-height:100vh;
        overflow-y:auto;

        svg#close{
            position:absolute;
            right:0;
            top:0;
            margin:10px;
            font-size:24px;
            &:hover{
                color: ${props=>props.theme[props.theme.mode].colors.danger};
                cursor:pointer;
            }
        }
    }
`


const Drawer = (props:any)=>{
    const [show, setShow]= useState(false)
    const toggle = ()=>setShow(!show)
    const close = () => setShow(false)
    const dRef = useRef(null)
    let { backdrop,children , ...drawerProps} = props

    if(backdrop){
        drawerProps = {...drawerProps,backdrop:'true'}
    }

    useEffect(()=>{
        if(show !== props.visible){
            setShow(props.visible)
        }
        
    },[props.visible])
 
    useEffect(()=>{
        document.body.style.overflowY='hidden'
        document.body.style.overflowX='hidden'

        return () =>{
            document.body.style.overflowY='auto'
            document.body.style.overflowX='auto'
        }
    })



    let animate = {
        initial:{
            opacity:0,
            x:-100,
        },
        animate:{
            opacity:1,
            x:0
        },
        exit:{
            opacity:0,
            x:-100
        }
    }

    if(props.position){
        animate = {
            initial:{
                opacity:0,
                x:props.position == 'right'?100: -100,
            },
            animate:{
                opacity:1,
                x:0
            },
            exit:{
                opacity:0,
                x:props.position == 'right'?100: -100,
            }
        }
    }


    return <div ref={dRef}>
       <AnimatePresence>
            {show && 
            <>
             {!props.backdrop && <StyledOverlay transition={{duration:0.8}} initial={{y:'-100vh'}} animate={{y:0}} exit={{y:'-100vh'}}  className="overlay"></StyledOverlay>}
             <StyledDrawer {...drawerProps} transition={{duration:0.4}} as={motion.div} initial={animate.initial} animate={animate.animate} exit={animate.exit}>
               
               <div className={'inner'}>
                   <FiX onClick={toggle} id="close"/>
                    {children}
               </div>
           </StyledDrawer>
            </>
            
           }
       </AnimatePresence>
    </div>
}

Drawer.displayName = "Drawer"


export default Drawer