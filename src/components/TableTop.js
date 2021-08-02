import React from 'react';
import styled from 'styled-components';
import TopArrow from '../assets/top.svg';
import Modal from './Modal';

const TableTop = () => {
    
    return (
        <TableTopContainer>
            <Item>
        <img src={TopArrow} />
          <Text drop>وضعية الحساب</Text>
        </Item>
        <Item>
        <img src={TopArrow} />
        <Text drop>تاريخ التسجيل</Text>
        </Item>
        <Item>
        <img src={TopArrow} />
          <Text drop>الحلقة التالية</Text>
        </Item>
        <Item>
        <img src={TopArrow} />
          <Text drop>الاسم الكامل</Text>
        </Item>
        <Item>
        <img src={TopArrow} />
          <Text drop>اسم المستخدم</Text>
        </Item>
        <Item>
        <img src={TopArrow} />
          <Text drop>الرقم الاكاديمي</Text>
        </Item>

        </TableTopContainer>

    )
}

export default TableTop;

const TableTopContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
background: #FCFDFD;
border-radius: 10px 10px 0 0;
border: 0.6px solid #D5D5D5;
padding: 10px 20px;
`;
const Item = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: calc(100%/6);
position: relative;
img{
    width: 1.5em;
    height: 1em;
}

`;
const Text = styled.span`
color: #000;
`;
