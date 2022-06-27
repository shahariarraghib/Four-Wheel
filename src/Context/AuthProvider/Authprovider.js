import React, { createContext } from 'react';
import useFireBase from '../../Hooks/useFireBase';

export const AuthContext = createContext(null);

const Authprovider = ({ children }) => {
    const AllContext = useFireBase();
    return (
        <AuthContext.Provider value={AllContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;