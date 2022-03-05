import React from "react"
import styled from "styled-components"


const alignments = {
    center: "center",
    start:"flex-start",
    end:"flex-end",
    between:"space-between",
    around: "space-around",
    evenly: "space-evenly"
}

interface FlexProps {
    direction?: "row" | "column"
    justify? : "center" | "start" | "end" | "between" | "around" | "evenly"
    align? : "center" | "start" | "end" 
    gap?:number,
    wrap?:"wrap" | "nowrap"
}
const StyledFlex = styled.div<FlexProps>`
    display:flex;
    width:100%;
    height:100%;
    flex-direction: ${props=>props.direction ? props.direction : 'row'};
    justify-content: ${props=>props.justify ? alignments[props.justify] :"flex-start"};
    align-items: ${props=>props.align ? alignments[props.align] :"flex-start"};
    gap:${props=>props.gap? props.gap+"rem":"0"};
    flex-wrap:${props=>props.wrap ? props.wrap :"wrap"};
   
`

interface Props extends FlexProps{
    children?:any
    style?:any
}

const Flex = (props:Props) => {
    const { justify, align, direction, gap, wrap,style } = props
    let vpros:Props ={justify, align, direction, gap, wrap, style}

    return <StyledFlex {...vpros}>
        {props.children}
    </StyledFlex>
}


export default Flex