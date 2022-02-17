import React from 'react';
import styled from 'styled-components'



interface ButtonProps {
	label: string;
}

const StyledButton = styled.button`
	background-color:${props=>props.theme.colors? props.theme.colors.primary : 'indigo'};
	color: ${props=>props.theme?props.theme.color:'white'};
	font-sizeZ:14px;
	border:1px solid red;
`

const Button = (props: ButtonProps) => {
	return <StyledButton>{props.label}</StyledButton>
}

export default Button;

