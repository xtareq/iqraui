import React from "react";
import styled from "styled-components";


type JustifyTypes = 'start' | 'center' | 'end'

interface RowProps extends React.ComponentPropsWithoutRef<"div">{
    justify?: JustifyTypes
}

const StyledRow = styled.div<RowProps>`
    display:flex;
    gap:24px;
    justify-content:${props=>props.justify ? props.justify : 'flex-start'}; 
    align-items:${props=>props.justify ? props.justify : 'flex-start'}; 

`


const Row = (props:RowProps)=>{
    
    return <StyledRow {...props}>{props.children}</StyledRow>
}


export default Row