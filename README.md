
# Context Api


The Context API is a feature of React that allows data to be passed down the component tree without the need for props drilling. It provides a way to share data between components that are not directly related to each other, without having to pass the data through every intermediate component.
Context is essentially a global object that can hold any data that needs to be shared across multiple components. It consists of three main parts:

    Context object
    Provider component
    Consumer component

The problem Context API solves Context API solves the problem of props drilling. When props need to be passed through multiple layers of components, it can lead to code that is hard to read, understand, and maintain. Context API provides an elegant solution to this problem by allowing data to be shared directly between components without having to pass it through intermediate components.
Overall, the Context API provides a powerful way to pass data between components without having to pass it down through every level of the component tree.

## To authenticate login using context API in a React application, you can follow these steps:

1. Create a new context using the createContext function from the React module. This context will hold the state and actions related to user authentication.



```javascript
import { createContext, useState } from "react";
export const myContext = createContext();

function CustomProvider({children}){
  const [isloggedin, setIsLoggedIn] = useState(false);
    return <myContext.Provider value={{isloggedin,setIsLoggedIn}}>
      {children}
    </myContext.Provider>
}
export default CustomProvider;
```
2. Wrap your application with the CustomProvider component to make the authentication context available to all child components.
```javascript
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <CustomProvider>
    <App/>
   </CustomProvider>
);
```
3. In any child component that needs to access the authentication state or actions, use the useContext hook to consume the context.
```javascript
const Login = (props) =>{
  const [user, setUser] = useState({
    name:"",
    password:""
  })
  const {setIsLoggedIn} = useContext(myContext);
  const handleAuthentication =( ) =>{
    if(user.name==="admin" && user.password==="admin@123"){
     setIsLoggedIn(true)  
     
    }else{
      alert("Enter proper Credentials")
    }
  }
    return(
        
        <div>
        <h2>Login Form</h2>
           <div>
              <input 
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
              type="password"  
              placeholder="Password"
              onChange={(event) =>{setUser({
                ...user,
                password:event.target.value
              })}}
              />
           </div>
           <div>
              <button onClick={handleAuthentication}>Login</button>
           </div>
        </div>
    )
}
```
With these steps, you should be able to authenticate login using context API in your React application.