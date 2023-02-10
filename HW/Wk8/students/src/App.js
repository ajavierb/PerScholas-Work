import {useState} from 'react';
import './App.css';
import userData from './data';
import Students from './components/Students';

function App() {
  const [user,setUser] = useState(userData)
  return (
    <div className="App">
     <h1>Student Data</h1>

     <Students user={user} />
     
     
     
    </div>
  );
}

export default App;
