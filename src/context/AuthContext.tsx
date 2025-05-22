import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { users, UserProfile } from '../types/user';


type AuthContextType = {
  isLoggedIn: boolean;
  currentUser: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  getCurrentUserProfile: () => UserProfile | null;
};


const AuthContext = createContext<AuthContextType>({
  isLoggedIn: false,
  currentUser: null,
  login: async () => false,
  logout: () => {},
  getCurrentUserProfile: () => null,
});


export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);


  useEffect(() => {
    const loadAuth = async () => {
      const storedUser = await AsyncStorage.getItem('currentUser');
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');
      if (loggedIn === 'true' && storedUser) {
        setIsLoggedIn(true);
        setCurrentUser(storedUser);
      }
    };
    loadAuth();
  }, []);


  const login = async (username: string, password: string) => {
    const user = users.find(u => u.username === username && u.password === password);


    if (user) {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      await AsyncStorage.setItem('currentUser', username);
      setIsLoggedIn(true);
      setCurrentUser(username);
      return true;
    }
    return false;
  };


  const logout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('currentUser');
    setIsLoggedIn(false);
    setCurrentUser(null);
  };


  const getCurrentUserProfile = (): UserProfile | null => {
    if (!currentUser) return null;
    return users.find(u => u.username === currentUser) || null;
  };


  return (
    <AuthContext.Provider
      value={{ isLoggedIn, currentUser, login, logout, getCurrentUserProfile }}
    >
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);
export { AuthContext };


