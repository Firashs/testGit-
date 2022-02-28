import React , {useState} from 'react';
import LoginForm from './LoginForm'; 
import './App.css';

function App() {
  const adminUser = {
    email : "admin@admin.com" ,
    password : "123456"
    }
  const [user, setUser]= useState({ name:"", email:""});
  const [error,setError]=useState("");
  const login = details => {
    console.log(details);
    if(details.email == adminUser.email && details.password == adminUser.password){
      console.log("login");
      setUser ({
        name : details.name ,
        email : details.email
      });
    }else{
      console.log("error");
      setError("error")
    }
  }
  const logout = ()=>{
    setUser({ name:"", email:""});
  }
  return (
    <div className="App">
      {(user.email !=  "") ? (<div>
        <h2>welcome , <span>{user.name}</span></h2>
        <button onClick={logout}>logout</button>
      </div>): ( <LoginForm login ={login} error ={error}/>)}
    </div>
  );
}

export default App;
