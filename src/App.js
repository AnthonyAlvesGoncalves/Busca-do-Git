import logo from './logo.svg';
import Github from './GitHub.jpg'
import './App.css';
import { useState } from 'react';

function App() {
  
  const [search, setSearch] = useState('');
  const [userData, setUserData] = useState();

  const handleChange = (event) =>{
    setSearch(event.target.value)
  }
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`https://api.github.com/users/${search}`)
    .then(response => response.json())
    .then(userResponse => setUserData(userResponse));
  }
  console.log(userData);
  return (
    <div className="container text-center">
      <h1 className="py-5 text-uppercase">Github Profile</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <div className="input-group">
            <input type="text" className="form-control" required value={search}
            onChange={handleChange}/>
            <span className="input-group-btn">
              <button type="submit" className="btn btn-success">
                Search
              </button>
            </span>
          </div>
        </div>
      </form>
      <div className="py-5">
        {!userData && (<img src={Github} className="responsive rounded-circle" alt="" >
        </img>)}
        {userData &&(
        <div>
        <img src={userData.avatar_url} className="responsive rounded-circle" alt="" >
        </img>
        <h3>{userData.location}</h3>
        <p></p>
        </div>)}
      </div>
    </div>
  );
}

export default App;
