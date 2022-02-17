import React from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'


interface ButtonProps {
	label: string;
}

const StyledButton = styled(motion.button)`
	background-color:${props=>props.theme.colors? props.theme.colors.primary : 'indigo'};
	color: ${props=>props.theme?props.theme.color:'white'};
	font-sizeZ:14px;
	border:1px solid red;
`

const Button = (props: ButtonProps) => {
	return <StyledButton transition={{duration:1}} initial={{x:-100}}  animate={{x:0}} >{props.label}</StyledButton>
}

export default Button;

