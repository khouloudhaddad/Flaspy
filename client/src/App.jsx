import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [usersList, setUsersList] = useState([])

  const fetchAPI = async() => {
    const response = await axios.get('http://127.0.0.1:8080/api/users');
    setUsersList(response.data.users)
  }

  useEffect(()=>{
    fetchAPI();
  }, [])

  return (
    <>
      <h1>Python API + React</h1>
      <div className="card">
          <ul className="list_unstyled">
            {
              usersList.map((user, index) => (
                <li key={index}>{user}</li>
              ))
            }
          </ul>
      </div>
    </>
  )
}

export default App
