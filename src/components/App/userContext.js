import React, { useState, createContext } from "react";

const UserContext = createContext([{}, () => {}, {}, () => {}]);
const UserProvider = ({ children }) => {
	const [userState, setUserState] = useState({});
	const [resultList, setResultList] = useState({});
	return (
		<UserContext.Provider
			value={[userState, setUserState, resultList, setResultList]}>
			{children}
		</UserContext.Provider>
	);
};

export { UserContext, UserProvider };
