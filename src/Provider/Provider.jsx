import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import app from '../Firebase/firebase.init';
const Auth = getAuth(app)

export const AuthContext = createContext(null);
const Provider = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loding, setloding]=useState(true)

    const register = (email, password) => {
        setloding(true)
        return createUserWithEmailAndPassword(Auth, email, password)
    }

    const signin = (email, password) => {
        setloding(true)
        return signInWithEmailAndPassword(Auth, email, password)
    }
    const logout = () => {
        setloding(true)
        return signOut(Auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, currentUser => {
            console.log('user', currentUser);
            setuser(currentUser)
        setloding(false)
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const AuthInfo = { user,loding, register, signin, logout }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Provider;