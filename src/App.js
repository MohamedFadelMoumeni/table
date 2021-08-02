import styled from 'styled-components';
import TableHead from './components/TableHead';
import TableTop from './components/TableTop';
import TableData from './components/TableData';
import './App.css';

function App() {
  const data = [
    {
      id: 1,
      name: 'محمد'
    },
    {
      id: 2,
      name: 'محمد'
    },
    {
      id: 3,
      name: 'محمد'
    },
    {
      id: 4,
      name: 'محمد'
    },
  ]
  return (
    <AppContaner>
      <Tilte> لوائح الطلبة</Tilte>
      <TableHead />
     <TableTop />
      <DataHandler>
      {
        data.map((user) => (
          <TableData key={user.id} user={user}/>
        ) )
      }
      </DataHandler>
      </AppContaner>
     
    
  );
}
const AppContaner = styled.div`
max-width: 1139px;
margin: auto;
display: flex;
flex-direction: column;
justify-content: flex-end;
align-items:flex-end;
`;
const Tilte = styled.span`
font-size: 32px;
color: #202224;

`;

const Text = styled.span`
color: ${props => props.drop ? '#000' : '#979797'};
`;



const Item = styled.div`
display: flex;
align-items: center;
img{
  width: 2em;
  height: 1em;
}
`;
const DataHandler = styled.div`
width: 100%;
border-right: 0.3px solid #B9B9B9;
border-left: 0.3px solid #B9B9B9;
border-radius: 0 0 10px 10px;
`;


export default App;
