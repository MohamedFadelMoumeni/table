import React, {useState} from 'react';
import styled from 'styled-components';
import DropDown from './Dropdown';
import Search from '../assets/search.svg';
import Filter from '../assets/filter.svg';
import Path from '../assets/Path.svg';
import Arrow from '../assets/Arrow.svg';
import Modal from './Modal';


const TableHead = () => {
    const [openOne, setOpenModal] = useState(false);
    const [openTwo, setOpenModalTwo] = useState(false);
    return (
        <TableHeadContainer>
            <DropDown last>
      <Img src={Arrow} />
        <Text style={{color: '#EA0234'}}>ازالة الفلترة</Text>
        </DropDown>
      <DropDown  openModal={openOne}>
        <Text onClick={() => setOpenModal(!openOne)} drop>الحلقة</Text>
          <Img  openModal={openOne} src={Path} />
          <Modal  openModal={openOne}/>
        </DropDown>
        <DropDown  openModal={openTwo}>
        <Text onClick={() => setOpenModalTwo(!openTwo)} drop>البرنامج</Text>
          <Img openModal={openTwo} src={Path} />
          <Modal  openModal={openTwo}/>
        </DropDown>
        <DropDown>
        <Text drop>وضعية الحساب</Text>
          <Img src={Path} />
        </DropDown>
        <DropDown>
        <Text drop>تاريخ التسجيل</Text>
          <Img src={Path} />
        </DropDown>
        <FilterContainer>
          <Img src={Filter} />
        </FilterContainer>
        <SearchBox>
        <Input placeholder="البحث" type="text"/>
          <Img src={Search} />
        </SearchBox>

        </TableHeadContainer>

    )
}
export default TableHead;

const TableHeadContainer = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
align-items:center;
margin: 2em 0;
background-color: #F9F9FB;
border: 0.6px solid #D5D5D5;
border-radius: 10px;
height: 60px;
`;
const FilterContainer = styled.div`
align-self: stretch;
display: flex;
justify-content: center;
align-items: center;
border-right: 0.3px solid #979797;
border-left: 0.3px solid #979797;
width: 70px;
`;

const Text = styled.span`
cursor: pointer;
`;

const SearchBox = styled.div`
align-self:stretch;
display: flex;
justify-content:flex-end;
align-items: center;
flex: 1;
img{
  width: 2em;
  height: 2em;
  cursor: pointer;
  margin: 10px;
}
`;
const Input = styled.input`
align-self: stretch;
border:none;
flex: 1;
background:transparent;
outline: none;
text-align:right;
`;
const Img = styled.img`
 margin: 0 10px;
  transition: all .5s;
  transform: ${props => props.openModal ? 'rotate(180deg)' : 'rotate(0deg);'};
`;