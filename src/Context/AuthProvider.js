import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';
import useFoodDetails from '../hooks/useFoodDetails';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const allContext = useFirebase();
    const foodContext = useFoodDetails();
    // console.log(foodContext);
    return (
        <AuthContext.Provider value={{allContext,foodContext}}>
            {children}
        </AuthContext.Provider>
    );
    
};

export default AuthProvider;