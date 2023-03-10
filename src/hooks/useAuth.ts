import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

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

const useAuth = ():AuthContextType => useContext(AuthContext)

export default useAuth