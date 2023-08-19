import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Time from './components/Time';

function App() {
  const times = [
    {
      name: 'Programação',
      primaryColor: '#57C278',
      secondaryColor: '#D9F7E9',
    },
    {
      name: 'Front-End',
      primaryColor: '#82CFFA',
      secondaryColor: '#E8F8FF',
    },
    {
      name: 'Data Science',
      primaryColor: '#A6D157',
      secondaryColor: '#F0F8E2',
    },
    {
      name: 'Devops',
      primaryColor: '#E06B69',
      secondaryColor: '#FDE7E8',
    },
    {
      name: 'Ux e Design',
      primaryColor: '#D86EBF',
      secondaryColor: '#FAE9F6',
    },
    {
      name: 'Mobile',
      primaryColor: '#FFBA05',
      secondaryColor: '#FFF5D9',
    },
    {
      name: 'Inovação e Gestão',
      primaryColor: '#FF8A29',
      secondaryColor: '#FFEEDF',
    },
  ]

  const [users, setUsers] = useState([])

  const addingUser = (newUser) => {
    console.log(newUser)
    setUsers([...users, newUser])
  } 

    return (
    <div className="App">
      <Banner/>
      <Form times={times.map(time => time.name)} registeredUser={newUser => addingUser(newUser)}/>
      {times.map(time => <Time key={time.name} name={time.name} primaryColor={time.primaryColor} secondaryColor={time.secondaryColor}/>)}
    </div>
  );
}

export default App;
