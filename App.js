import { useState } from 'react' ;
import './App.css';
import Dashboard from './component/Dashboard';
import Navbar from './component/Navbar';

function App() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async() => {
    setLoading(true);
    const data = await fetch("https://reqres.in/api/users?page=1");
    const jsonData = await data.json();
    setUsers(jsonData.data)
    setLoading(false);
  }

  return (
    <>
      <Navbar getUsers={getUsers}/>
      <Dashboard users={users} loading={loading}/>
    </>
  );
}

export default App;
