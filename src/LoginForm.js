import React , {useState} from "react";

function LoginForm({login , error}){
  const [details ,setDetails]= useState({name:"", email:"",password:""});
  const submitHandler = e => {
      e.preventDefault();  
      login(details);   
  }

    return(
        <form onSubmit={submitHandler}>
            <div>
                <h2>Login</h2>
                {(error != "") ? (<div>{error}</div>): ""}
                <div>
                    <label>name</label>
                    <input type="text" name ="name" onChange={e => setDetails({...details, name:e.target.value})} value ={details.name}/>
                </div>
                <div>
                    <label>email</label>
                    <input type="email" name ="email" onChange={e => setDetails({...details, email:e.target.value})} value ={details.email}/>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name ="password" onChange={e => setDetails({...details, password:e.target.value})} value={details.password}/>
                </div>
                <button>Login</button>
            </div>
        </form>
    );
}
export default LoginForm;