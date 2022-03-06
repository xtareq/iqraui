import React from "react"
import styled from "styled-components"

interface Props extends React.ComponentPropsWithoutRef<"div">{
    children?:any 
    axis?: "x" | "y"
    gap?: string
}


const StyledSpace = styled.div<Props>`

    display:flex;
    flex-direction: ${props=> props.axis && props.axis == 'y' ? 'column' : 'row'||'row'};
    gap: ${props=>props.gap || '1rem'};
    flex-wrap:wrap;
    max-width:100%;
    > *{
        display:block;
        flex:1 1 auto;
        
    }
`
interface SpaceProps extends Props{
    children:any 
}

const Space = (props:SpaceProps)=>{
    return <StyledSpace {...props}>
        {props.children}
    </StyledSpace>
}

Space.displayName = "Space"
export default Space