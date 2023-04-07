import './Nav.css'
import { myContext } from './Context';
import { useContext } from 'react';
const Nav = () => {
  const {setIsLoggedIn}  = useContext(myContext);
    return(
        <>
          <div className='nav'>
             <div id="title">
               <h2>React Context</h2>
             </div>
             <div id="menu">
             
               <a href="https://github.com/renu-run-run">Home</a>
               
               <a href="https://github.com/renu-run-run">Profile</a>
               
               <a href="https://github.com/renu-run-run">Products</a>
               
               <a href="https://github.com/renu-run-run">Support</a>
               <button style={{padding:"0.5rem"}} onClick={()=>setIsLoggedIn(false)}>Logout</button>
             </div>
          </div>
        </>
    )
}

export default Nav;