import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { users, UserProfile } from '../types/user';

type AuthContextType = {
  isLoggedIn: boolean;
  currentUser: UserProfile | null;
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

const normalize = (s: string) => s.trim().toLowerCase();

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState<UserProfile | null>(null);

  useEffect(() => {
    const loadAuth = async () => {
      const loggedIn = await AsyncStorage.getItem('isLoggedIn');

      const storedUsername = await AsyncStorage.getItem('currentUsername');

      const legacyUserJson = await AsyncStorage.getItem('currentUser');

      if (loggedIn === 'true') {
        let user: UserProfile | null = null;

        if (storedUsername) {
          const uname = normalize(storedUsername);
          user = users.find(u => normalize(u.username) === uname) || null;
        } else if (legacyUserJson) {
          try {
            const legacyUser = JSON.parse(legacyUserJson) as UserProfile;
            const uname = normalize(legacyUser.username);
            user = users.find(u => normalize(u.username) === uname) || null;
            if (user) {
              await AsyncStorage.setItem('currentUsername', uname);
              await AsyncStorage.removeItem('currentUser');
            }
          } catch {
          }
        }

        if (user) {
          setIsLoggedIn(true);
          setCurrentUser(user);
          return;
        }
      }

      setIsLoggedIn(false);
      setCurrentUser(null);
    };

    loadAuth();
  }, []);

  const login = async (username: string, password: string) => {
    const uname = normalize(username);

    const user = users.find(u => normalize(u.username) === uname);
    if (user && user.password === password) {
      await AsyncStorage.setItem('isLoggedIn', 'true');
      await AsyncStorage.setItem('currentUsername', uname);
      setIsLoggedIn(true);
      setCurrentUser(user);
      return true;
    }

    return false;
  };

  const logout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('currentUsername');
    await AsyncStorage.removeItem('currentUser');  
    setIsLoggedIn(false);
    setCurrentUser(null);
  };

  const getCurrentUserProfile = () => currentUser;

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
