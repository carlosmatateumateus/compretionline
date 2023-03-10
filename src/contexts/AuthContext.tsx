import { GoogleAuthProvider, signInWithPopup, signOut as googleSignOut } from "firebase/auth";
import { createContext, useState, ReactNode, useEffect } from "react";

import { auth } from "../lib/firebase"
import { api } from "../lib/axios";

type User = {
  uid: string,
  email: string,
  photoURL: string
}

type AuthContextType = {
  user: User | undefined,
  signIn: () => Promise<void>,
  signOut: () => Promise<unknown>,
}

type AuthContextProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [user, setUser] = useState<User>()

  async function userVerify(user: User) {
    await api.post('/user', {
      id: user.uid,
      email: user.email
    })
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged( user =>{
      if (user) {
        const { uid, photoURL, email } = user as User
        userVerify({ uid, photoURL, email })
        setUser({ uid, photoURL, email })
      }
    })
    return () => {
      unsubscribe();
    }
  }, [user?.uid])

 async function signIn() {
  const provider = new GoogleAuthProvider();
  
  await signInWithPopup(auth, provider)
  .then(result => {
    const { uid, photoURL, email } = result.user as User

    userVerify({ uid, photoURL, email })
    setUser({ uid, photoURL, email })
  })
  .catch(error => {
    throw new Error(error)
  })
 }

function signOut() {  
  return new Promise(async (resolve, reject) => {
    await googleSignOut(auth)
    .then(() => {
      setUser(undefined)
      resolve('sucefull')
    })
    .catch((error) => {
      reject(error)
    });
  }) 
 }

 return(
  <AuthContext.Provider value={{ user, signIn, signOut }}>
    {props.children}
  </AuthContext.Provider>
);
}