
import { useContext } from 'react';
import './App.css';
import { myContext } from './Components/Context';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Login from './Components/Login';

function App() {
  const {isloggedin} = useContext(myContext);
  return (
    <div className="App">
      {
        isloggedin ? (<div> <Nav/> <Home/> </div>): (<Login/>)
      }
    </div>
  );
}

export default App;
