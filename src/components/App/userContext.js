import React, { useState, createContext } from 'react';

const UserContext = createContext([{}, ()=>{}]) 
const UserProvider = ({children}) => {
    const  [userState, setUserState] = useState({})
    return <UserContext.Provider value = {[userState, setUserState]} >
        {children}
    </UserContext.Provider>
}

export {UserContext, UserProvider}