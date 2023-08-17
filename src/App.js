import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

function App() {
  const [users, setUsers] = useState([])

  const addingUser = (newUser) => {
    console.log(newUser)
    setUsers([...users, newUser])
  } 

    return (
    <div className="App">
      <Banner/>
      <Form registeredUser={newUser => addingUser(newUser)}/>
    </div>
  );
}

export default App;
