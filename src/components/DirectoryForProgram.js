import React from 'react';
import styled from 'styled-components';

import Checkbox from './Checkbox';

const DirectoryForProgram = () =>{
    return (
        <DirectoryContainer>
            <Item>
                <Checkbox title="الجميع"/>
            </Item>
            <Item>
            <Checkbox title="التمهيدي"/>
            </Item>
            <Item>
            <Checkbox title="الربع في الاسبوع"/>
            </Item>
            <Item>
            <Checkbox title="النص في الاسبوع"/>
            </Item>
            <Item>
            <Checkbox title="الحفاظ"/>
            </Item>
        </DirectoryContainer>

    )
}

export default DirectoryForProgram;

const DirectoryContainer = styled.div`
width: 100;
display: flex;
flex-direction: column;
margin-top: 10px;
position: relative;
padding:  15px;
height: 150px;
overflow-y: scroll;
&::-webkit-scrollbar {
    width: 4px;
    background: rgba(61, 66, 223, 0.2);
border-radius: 11px;
}
&::-webkit-scrollbar-track {
   background: rgba(61, 66, 223, 0.2);
}
&::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
}
`;
const Item = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items:center;
padding: 5px 0;
`;