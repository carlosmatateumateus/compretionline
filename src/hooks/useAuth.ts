import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

type User = {
  uid: string,
  email: string,
  photoURL: string
}

type AuthContextType = {
  user: User | undefined,
  signInWithGoogle: () => Promise<void>,
  GoogleSignOut: () => Promise<unknown>,
}

const useAuth = ():AuthContextType => useContext(AuthContext)

export default useAuth