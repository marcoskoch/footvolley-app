import React, { createContext, useState, useEffect, useContext } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import api from '~/services/api';
import * as auth from '~/services/auth';
import * as userService from '~/services/user';

const INITIAL_STATE = {
  user: null,
  token: null,
  signed: false,
  loading: false,
};

const AuthContext = createContext(INITIAL_STATE);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadStorageData() {
      const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
      const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

      if (storagedUser && storagedToken) {
        api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
        setUser(JSON.parse(storagedUser));
      }
    }

    loadStorageData();
  }, []);

  async function signIn(payload) {
    setLoading(true);
    const response = await auth.signIn(payload);
    setLoading(false);

    if (response.message) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seus dados'
      );

      return;
    }

    api.defaults.headers.Authorization = `Bearer ${response.token}`;
    setUser(response.user);

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await AsyncStorage.setItem('@RNAuth:token', response.token);
  }

  async function signUp(payload) {
    setLoading(true);
    const response = await auth.signUp(payload);
    setLoading(false);

    if (response.message) {
      Alert.alert(
        'Falha na autenticação',
        'Houve um erro no login, verifique seus dados'
      );
    }
  }

  async function signOut() {
    await AsyncStorage.clear();
    setUser(null);
  }

  async function updateUser(payload) {
    setLoading(true);
    const response = await userService.update(payload);
    setLoading(false);

    if (response.message) {
      Alert.alert(
        'Falha na atualização do usuário',
        'Houve um erro ao salvar, verifique seus dados'
      );

      return;
    }

    setUser(response.user);

    await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token: null,
        signed: !!user,
        loading,
        signIn,
        signOut,
        signUp,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
};

export { AuthProvider, useAuth };
