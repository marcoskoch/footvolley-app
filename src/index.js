import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AuthProvider } from '~/contexts/auth';

import Routes from '~/routes';

import './config/ReactotronConfig';

import colors from './styles/colors';

export default function App() {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.LIGHT_BLACK}
      />
      <NavigationContainer>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
}
