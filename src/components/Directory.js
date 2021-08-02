import React from 'react';
import styled from 'styled-components';
import Checkbox from '../assets/checkbox.svg';

const Directory = () =>{
    return (
        <DirectoryContainer>
            <Item>
                <span>الجميع</span>
                <img src={Checkbox} />
            </Item>
            <Item>
                <span>الجميع</span>
                <img src={Checkbox} />
            </Item>
            <Item>
                <span>الجميع</span>
                <img src={Checkbox} />
            </Item>

        </DirectoryContainer>

    )
}

export default Directory;

const DirectoryContainer = styled.div`
width: 100;
display: flex;
flex-direction: column;
`;
const Item = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items:center;
padding: 5px 0;
`;