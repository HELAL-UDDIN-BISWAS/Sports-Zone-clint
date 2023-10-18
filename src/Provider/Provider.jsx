import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../Firebase/firebase.init';
const Auth=getAuth(app)

export const AuthContext=createContext(null);
const Provider = ({children}) => {

 const register=(email,password)=>{
return createUserWithEmailAndPassword(Auth,email,password)
 }

 const signin=(email,password)=>{
   return signInWithEmailAndPassword(Auth,email,password)
 }


    const AuthInfo={register,signin}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default Provider;