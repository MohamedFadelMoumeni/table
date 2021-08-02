import React from 'react';
import styled from 'styled-components';


const DropDown = ({children,openModal, ...otherProps}) =>{
    return (
        <DropdownContainer openModal={openModal} {...otherProps}>
            {children}
        </DropdownContainer>

    )
}

export default DropDown;

const DropdownContainer = styled.div`

align-self: stretch;
display: flex;
justify-content: space-around;
align-items: center;
padding: 10px 25px;
border-left: ${props => props.last ? '0' : '0.3px solid #979797'};
position: relative;



`;