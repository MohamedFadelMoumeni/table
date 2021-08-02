import React from 'react';
import styled from 'styled-components';
import Directory from './Directory';

const Modal = ({openModal}) => {
    return (
        <ModalContainer openModal={openModal}>
            <SearchBox>
                <Input placeholder="البحث" type="text" />
            </SearchBox>
            <Directory />
            <Button>التاكيد</Button>
           
        </ModalContainer>
    )
}

export default Modal;

const ModalContainer = styled.div`
transition : all .5s;
transform: ${props => props.openModal ? 'scale(1)' : 'scale(0)'};
position: absolute;
top: 80%;
display: flex;
flex-direction: column;
padding: 15px;
border-radius: 12px;
background: #FFFFFF;
box-shadow: 0px 30px 84px rgba(19, 10, 46, 0.08), 0px 8px 32px rgba(19, 10, 46, 0.07), 0px 3px 14px rgba(19, 10, 46, 0.03), 0px 1px 3px rgba(19, 10, 46, 0.13);
z-index: 30;
`;

const SearchBox = styled.div`
background: rgba(215, 221, 248, 0.52);
border-radius: 5px;
`;

const Input = styled.input`
flex: 1;
background: transparent;
border: 0;
outline: none;
text-align: right;
padding: 0 5px;
`;

const Button = styled.a`
margin-top: 20px;
width: 100%;
height: 30px;
background: #3D42DF;
border-radius: 5px;
color: #fff;
text-align: center;
`;