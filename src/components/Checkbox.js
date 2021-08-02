import React from 'react';
import styled from 'styled-components';

const Checkbox = ({title}) => {
    return (
        <CheckboxContainer >
            <span className="title">{title}</span>
  <input type="checkbox"  />
  <span class="checkmark"></span>
</CheckboxContainer>

    )
}

const CheckboxContainer = styled.label`
  width: 100%;
  display: flex;
  justify-content:center;
  align-items: center;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  input{
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
  &:checked ~ .checkmark {
  background-color: #2196F3;
}
&:checked ~ .checkmark:after {
  display: block;
}
  }


  .checkmark {
    position: absolute;
  right: 5px;
  height: 25px;
  width: 25px;
  border-radius: 5px;
  background-color: #eee;
  &::after{
    content: "";
  position: absolute;
  display: none;
  }
}

&:hover input ~ .checkmark {
  background-color: #ccc;
}
& .checkmark:after {
    left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.title{
    width: 100%;
    font-size: 14px;
    text-align: right;
    margin-right: 50px;
}
`;

export default Checkbox;