import React, { createContext, useState, useEffect, useContext } from "react";
import * as auth from "../services/auth";
import AsyncStorage from "@react-native-community/async-storage";
import api from "../services/api";

interface User {
  name: string;
  email: string;
}

interface AuthContextData {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
 
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoad] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      // simular uma lentidão para mostar o loading.
      await new Promise((resolve) => setTimeout(resolve, 2000));


      if (storagedUser && storagedToken) {
        setUser(JSON.parse(storagedUser));
      }
      setLoad(false);
      api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
    }

    loadStorageData();
  });
 
  async function signIn() {
    const response = await auth.signIn();
    setUser(response.user);
    setLoad(true);  

    
    api.defaults.headers.Authorization = `Baerer ${response.token}`;

    
    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  
  async function signOut() {
    await AsyncStorage.clear();
    console.log(user);
    setUser(null);
    setLoad(true);
  }
  
  return (
    <AuthContext.Provider 
       value={{ signed: !!user, 
                user, 
                loading,
                signIn, 
                signOut }}>
      {children}
    </AuthContext.Provider>
  );
};


function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}

export {AuthProvider, useAuth};
