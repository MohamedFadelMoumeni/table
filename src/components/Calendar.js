import React from 'react';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import {CalendarComponent} from '@syncfusion/ej2-react-calendars';

const CalendarContainer = ({openModal}) => {
    const [value, onChange] = React.useState(new Date());
    return (
        <>
        {
            openModal ? 
            (
       
        <Container>
            <CalendarComponent style={{width: '30px'}}></CalendarComponent>
        </Container>
       
                
                
            ) : null
        }
        </>
        

    )
}
export default CalendarContainer;

const Container = styled.div`
position: absolute;
top: 60px;
z-index:30;
background-color: #fff;
width: 300px;
`;
const Wrapper = styled.div`
  display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 10px 0;
    padding: 10px;
    & > * {
      & > * {
        margin: 10px;
      }
    }

`;
export const Content = styled.div`
      display: flex;
      max-width: 100%;
      flex-basis: 420px;
      flex-direction: column;
      flex-grow: 100;
      align-items: stretch;
      padding-top: 1em;
`;