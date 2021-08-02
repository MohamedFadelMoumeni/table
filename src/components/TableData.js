import React from 'react';
import styled from 'styled-components';
const TableData = ({user}) => {
    return (
        <TableDataContainer>
           <Item>
              <Button>
                  <span>متمدرس</span>
              </Button>
            </Item>
            <Item>
               <Text>28 يوليوز 2021</Text>
            </Item>
            <Item>
               <Text>عبد الحمان</Text>
            </Item>
            <Item>
               <Text>سفيان الحطري</Text>
            </Item>
            <Item>
               <Text>soufiane.elhatri</Text>
            </Item>
            <Item>
               <Text>00001</Text>
            </Item>
        </TableDataContainer>

    )
}

export default TableData;

const TableDataContainer = styled.div`
width: 100%;
padding: 10px 20px;
display: flex;
align-items:center;
justify-content: space-between;
border-bottom: 0.6px solid #D5D5D5;
`;
const Item = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: calc(100%/6);

`;
const Text = styled.span`
color: #000;
`;
const Button = styled.a`
padding: 5px 20px;
background:rgba(0, 182, 155, .2);
span{
    z-index: 30;
    color: #00B69B;

}
`;

