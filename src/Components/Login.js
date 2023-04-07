import { useContext, useState } from "react"
import { myContext } from "./Context"
import React from "react";

const Login = (props) =>{
  const [user, setUser] = useState({
    name:"",
    password:""
  })
  const {setIsLoggedIn} = useContext(myContext);
  const handleAuthentication =( ) =>{
    if((user.name==="renuka" && user.password==="renuka@8")||(user.name==="admin" && user.password==="admin@123")){
     setIsLoggedIn(true)  
     
    }else{
      alert("Enter proper Credentials")
    }
  }
    return(
        
        <div className="stylebox" >
        <h2>Login Form</h2>
           <div>
              <input 
              style={{padding:"0.5rem"}}
               type="text"
               placeholder="User Name"
               onChange={(event)=>{setUser({
                ...user,
                name:event.target.value
               })}}
               />
           </div><br/>
           <div>
              <input 
              style={{padding:"0.5rem"}} 
              type="password"  
              placeholder="Password"
              onChange={(event) =>{setUser({
                ...user,
                password:event.target.value
              })}}
              />
           </div><br/>
           <div>
              <button style={{padding:"0.5rem"}} onClick={handleAuthentication}>Login</button>
           </div><hr/>
           <h6>user name-&gt; admin</h6>
           <h6>password -&gt; admin@123</h6>
        </div>
          
          
        
    )
}
export default Login