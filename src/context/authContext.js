import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) =>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
    );
    const login = () =>{
        setCurrentUser({
            id:1,
            name:"John Doe",
            profilePic:"https://mommateen.com/wp-content/uploads/2022/07/Teenage-Profile-Picture.jpg"
        })
    }

    useEffect(()=>{
        localStorage.setItem("user",JSON.stringify(currentUser));
    },[currentUser])

    return(
        <AuthContext.Provider value={{currentUser,login}}>
            {children}
        </AuthContext.Provider>
    );
};