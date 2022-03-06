import { AnimatePresence, motion } from "framer-motion";
import React,{ FC, useEffect } from "react";
import styled, { css } from "styled-components";
import { calcColor } from "../helpers/colors";
import { useTheme } from "../Theme/hooks";



const StyledLayout:any = styled.div`
    max-width: 1920px;
    margin: 0 auto;
    overflow: auto;
    height: 100vh;
    display: block;
    position: relative;
    .layout{
        background-color: ${(props:any)=> props.theme[props.theme.mode].bodyBg};
        color: #222b45;
        font-family: Open Sans,sans-serif;
        font-size: .9375rem;
        font-weight: 400;
        line-height: 1.25rem;
        min-height: 100vh; 
        min-width: 300px;
    }

`

const StyledContent = styled.div`
    
    overflow-x:hidden;
    min-height: 100vh;
    transition: all 0.5s ease;
    ${(props:any)=>props.theme.sidebar && css`
       
        padding-left:16rem;

        @media (max-width:1200px){
            transform:translateX(1rem);
        }
    `}
    .layout-content{
        ${(props:any)=> props.fixed ? css`
            padding: 2.25rem 2.25rem 0.75rem;
            margin-top: 3.75rem;
        `:' padding: 1.25rem 1.25rem 0.75rem;'}
       
    }

`

const StyledSidebar = styled(motion.div)`
    width: 16rem;
    background-color: #fff;
    box-shadow: 0 0.5rem 1rem 0 ${(props:any)=> calcColor( props.theme[props.theme.mode].contentBg,-15)};
    color: ${(props:any)=>props.theme[props.theme.mode].primaryText};;
    font-family: Open Sans,sans-serif;
    font-size: .9375rem;
    font-weight: 400;
    line-height: 1.25rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
    order: 0;
    .sidebar-container{
        height: calc(100vh - 3.75rem);
        background-color:  ${(props:any)=> props.theme[props.theme.mode].contentBg};;
        box-shadow: 0 0.5rem 1rem 0 ${(props:any)=> calcColor( props.theme[props.theme.mode].contentBg,-15)};
        top: 3.75rem;
        position: fixed;
        z-index: 1;
     
        transform: translate3d(0, 0, 0);
        display: flex;
        flex-direction: column;
        width: 16rem;
        .sidebar-inner{
            overflow-y: auto;
            overflow-x: hidden;
            flex: 1;
            padding: 1.25rem;
            position: relative;
           
            -webkit-transform: translateZ(0);
        }
    }

}

`

const StyledHeader = styled(motion.div)<{fixed:boolean}>`

    max-width: 1920px;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    display:block;
    background-color: ${(props:any)=> props.theme[props.theme.mode].contentBg};
    color: ${(props:any)=>props.theme[props.theme.mode].primaryText};
    font-family: Open Sans,sans-serif;
    font-size: .9375rem;
    font-weight: 400;
    line-height: 1.25rem;
    nav{
        max-width: 1920px;
        height:${(props:any)=>props.height && props.height || '64px'};
        margin: 0 auto;
        align-items: center;
        justify-content: flex-start;
        display: flex;
        box-shadow: 0 0.5rem 1rem 0 ${(props:any)=> calcColor( props.theme[props.theme.mode].contentBg,-15)};
    }
 

    ${(props:any)=> props.fixed && css`
     
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index:2;
    `}

`

const LayoutHeader = (props:any) => {

    return <StyledHeader {...props} >
        <nav>
            {props.children}
        </nav>
    </StyledHeader>
}

const LayoutContent = (props:any) => {

    return <StyledContent {...props}>
        <div  className="layout-content">
            {props.children}
        </div>
    </StyledContent>
}

const LayoutSidebar= (props:any) => {
    const theme = useTheme()

    useEffect(()=>{
        if(window.screen.availWidth > 1200){
            theme.toggleSidebar()
        }
    },[])

    return <AnimatePresence>
           {theme.sidebar && <StyledSidebar>
                <motion.div  initial={{x:"-100%"}} animate={{x:0}} exit={{x:"-100%"}} transition={{duration:0.5, ease:'easeInOut'}}  className="sidebar-container">
                <div className="sidebar-inner">
                {props.children}
                </div>
                </motion.div>
            </StyledSidebar>}
    </AnimatePresence>
   
}



const Layout = (props:any) => {

    return <StyledLayout as={motion.div} >
        <div className="layout">
            {props.children}
        </div>

    </StyledLayout>
}

Layout.displayName = "Layout"
Layout.Header = LayoutHeader
Layout.Content = LayoutContent
Layout.Sidebar = LayoutSidebar






export default Layout