import React, { useContext, useState, useEffect } from "react";
import { auth } from '../utils/firebase';

const AuthContext = React.createContext();

const useAuth = () => {
    return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(true);

    const singup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    };

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setLoading(false);
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        singup,
        login
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export { useAuth, AuthProvider };