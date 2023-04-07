import { createContext, useState } from "react";
export const myContext = createContext();

function CustomProvider({children}){
  const [isloggedin, setIsLoggedIn] = useState(false);
    return <myContext.Provider value={{isloggedin,setIsLoggedIn}}>
      {children}
    </myContext.Provider>
}
export default CustomProvider;